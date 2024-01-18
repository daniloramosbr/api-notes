import Router from "express";
import Controller from "../controllers/controller.js";
import controllerLogin from "../controllers/controllerLogin.js";
import { validId } from "../middlewares/noteMiddle.js";
import { ValidLogin } from "../middlewares/loginMidde.js";

const routes = Router()

routes.get("/notes", Controller.GetNotes)
routes.get("/notes/:id", validId, Controller.GetId)
routes.post("/notes", Controller.PostNotes)
routes.delete("/notes/:id", validId, Controller.Deletenotes)
routes.patch("/notes/:id", validId, Controller.PutNotes)
routes.post("/signup", controllerLogin.PostLogin)
routes.post("/signin",ValidLogin, controllerLogin.ValidEmail)
routes.get("/users", controllerLogin.GetLogin)

export default routes