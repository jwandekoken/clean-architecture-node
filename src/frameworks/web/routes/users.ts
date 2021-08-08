import express from "express";
import { verifyAuth } from "../middlewares/verifyAuth";
import { userController } from "../controllers/users";

const usersRoutes = express.Router();

usersRoutes.get("/:id", userController.getById);
usersRoutes.post("/", userController.create);
usersRoutes.put("/", verifyAuth, userController.update);
usersRoutes.delete("/:id", userController.delete);

export { usersRoutes };
