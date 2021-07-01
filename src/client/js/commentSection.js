import fetch from "node-fetch";

const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const comments = document.getElementById("comments");
const deleteBtns = comments.querySelectorAll("a");

let newDeleteBtn = null;

const addComment = (text, id) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.dataset.id = id;
  newComment.className = "video__comment";
  const icon = document.createElement("i");
  icon.className = "fas fa-comment";
  const commentSpan = document.createElement("span");
  commentSpan.innerText = text;
  newDeleteBtn = document.createElement("a");
  newDeleteBtn.dataset.id = id;
  newDeleteBtn.innerText = "❌";
  newComment.appendChild(icon);
  newComment.appendChild(commentSpan);
  newComment.appendChild(newDeleteBtn);
  videoComments.prepend(newComment);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (response.status === 201) {
    textarea.value = "";
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
  }
};

const handleDelete = async (deleteBtn) => {
  const { id } = deleteBtn.dataset;
  const { status } = await fetch(`/api/comment/${id}/delete`, {
    method: "get",
  });
  if (status === 201) {
    const videoComment = deleteBtn.parentNode;
    videoComment.remove();
  }
};

if (form) {
  form.addEventListener("submit", handleSubmit);
}

for (const deleteBtn of deleteBtns) {
  deleteBtn.addEventListener("click", () => handleDelete(deleteBtn));
}
