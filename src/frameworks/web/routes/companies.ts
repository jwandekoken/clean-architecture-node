import express from "express";
import { verifyAuth } from "../middlewares/verifyAuth";
import { companyController } from "../controllers/companies";

const companiesRoutes = express.Router();

// companiesRoutes.get("/:id", userController.getById);
companiesRoutes.post("/", verifyAuth, companyController.create);
// companiesRoutes.put("/", verifyAuth, userController.update);
// companiesRoutes.delete("/:id", userController.delete);

export { companiesRoutes };
