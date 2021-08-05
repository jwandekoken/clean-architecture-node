import express from "express";
import { usersRoutes } from "./users";

const apiRouter = () => {
  const routes = express.Router();

  routes.use("/users", usersRoutes);
  return routes;
};

export { apiRouter };
