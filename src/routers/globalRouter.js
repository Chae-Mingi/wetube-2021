import express from "express";
import { join } from "../controllers/ueserController"
import { trending } from "../controllers/videoController"

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/", join);


export default globalRouter