import express from "express";
import { userController } from "../controllers/users";

const usersRoutes = express.Router();

usersRoutes.get("/:id", userController.getById);
usersRoutes.post("/", userController.create);
usersRoutes.put("/", userController.update);
usersRoutes.delete("/:id", userController.delete);

export { usersRoutes };
