import express from "express";
import { usersRoutes } from "./users";
import { authRoutes } from "./auth";
import { companiesRoutes } from "./companies";

const apiRouter = () => {
  const routes = express.Router();

  routes.use("/users", usersRoutes);
  routes.use("/auth", authRoutes);
  routes.use("/companies", companiesRoutes);

  return routes;
};

export { apiRouter };
