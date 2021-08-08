import express from "express";
import { authController } from "../controllers/auth";

const authRoutes = express.Router();

authRoutes.post("/", authController.login);

export { authRoutes };
