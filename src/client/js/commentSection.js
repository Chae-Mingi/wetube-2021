const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const textarea = document.querySelector("textarea");
const btn = document.querySelector("button");

const handleSubmit = (event) => {
  event.preventDefault();
  const text = textarea.value;
  const video = videoContainer.dataset.id;
};

form.addEventListener("submit", handleSubmit);
