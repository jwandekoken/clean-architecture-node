import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/../.env" });

import express from "express";
import { projectDependencies } from "./config/projectDependencies";
import { enableCors } from "./frameworks/web/middlewares/enableCors";
import { errorHandler } from "./frameworks/web/middlewares/errorHandler";
import { apiRouter } from "./frameworks/web/routes";

const app = express();
const port = process.env.PORT || 3000;

projectDependencies.DatabaseService.init(
  "mongodb://localhost:27017/unitmanager"
)
  .then(() => {
    app.use(enableCors);
    app.use(express.json());

    // Routes
    app.get("/", (req, res) => {
      res.json({
        message: "You should use /api/1.0/:resource",
      });
    });
    app.use("/api/1.0", apiRouter());

    // error handler
    app.use(errorHandler);

    app.listen(port, () => {
      console.log("The application is listening on port 3000!");
    });
  })
  .catch((err) => {
    console.log("Error initializing MongoDB: ", err);
  });
