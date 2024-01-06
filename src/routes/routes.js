import Router from "express";
import Controller from "../controllers/controller.js";
import controller from "../controllers/controller.js";
import { validId } from "../middlewares/noteMiddle.js";

const routes = Router()

routes.get("/notes", Controller.GetNotes)
routes.get("/notes/:id", validId, Controller.GetId)
routes.post("/notes", Controller.PostNotes)
routes.delete("/notes/:id", validId, Controller.Deletenotes)
routes.patch("/notes/:id", validId, controller.PutNotes)

export default routes