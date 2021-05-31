export const trending = (req, res) => res.render("home");
export const see = (req, res) => {
    console.log(req.params);
    return res.send(`<!DOCTYPE html><html lang='ko'><head><title>Wetube</title></head><body><h1>Watch Video #${req.params.id}</h1><footer>&copy: 2021 Wetube</footer></body></html>`);
};
export const edit = (req, res) => {
    console.log(req.params);
    return res.send(`<!DOCTYPE html><html lang='ko'><head><title>Wetube</title></head><body><h1>Edit Video #${req.params.id}</h1><footer>&copy: 2021 Wetube</footer></body></html>`);
}
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
    console.log(req.params);
    return res.send("Delete Video");
}