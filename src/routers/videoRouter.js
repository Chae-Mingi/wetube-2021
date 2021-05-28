import express from "express";
import { watch, edit } from "../comtrollers/videoController"

const videoRouter = express.Router();

videoRouter.get("/watch", watch);
videoRouter.get("/watch", edit);

export default videoRouter;