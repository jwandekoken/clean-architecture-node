import express from "express";
import { usersRoutes } from "./users";
import { authRoutes } from "./auth";

const apiRouter = () => {
  const routes = express.Router();

  routes.use("/users", usersRoutes);
  routes.use("/auth", authRoutes);

  return routes;
};

export { apiRouter };
