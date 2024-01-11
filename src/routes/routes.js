import Router from "express";
import Controller from "../controllers/controller.js";
import controllerLogin from "../controllers/controllerLogin.js";
import { validId } from "../middlewares/noteMiddle.js";

const routes = Router()

routes.get("/notes", Controller.GetNotes)
routes.get("/notes/:id", validId, Controller.GetId)
routes.post("/notes", Controller.PostNotes)
routes.delete("/notes/:id", validId, Controller.Deletenotes)
routes.patch("/notes/:id", validId, Controller.PutNotes)
routes.get("/login", controllerLogin.GetLogin)
routes.post("/login", controllerLogin.PostLogin)


export default routes