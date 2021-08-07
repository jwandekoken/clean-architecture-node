import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/../.env" });

import express from "express";
import type { ErrorRequestHandler } from "express";
import { projectDependencies } from "./config/projectDependencies";
import { apiRouter } from "./frameworks/web/routes";

console.log("process.env.TEST: ", process.env.TEST);

const app = express();
const port = process.env.PORT || 3000;

projectDependencies.DatabaseService.init(
  "mongodb://localhost:27017/unitmanager"
)
  .then(() => {
    // Handle Cors
    app.use((req, res, next) => {
      const allowedOrigins = ["http://localhost:3000"];
      const origin = req.headers.origin;

      if (origin) {
        if (allowedOrigins.indexOf(origin) > -1) {
          res.setHeader("Access-Control-Allow-Origin", origin);
        }

        res.setHeader(
          "Access-Control-Allow-Methods",
          "OPTIONS, GET, POST, PUT, PATCH, DELETE"
        );
        res.setHeader(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Authorization, Accept, Referer, User-Agent, sec-ch-ua, sec-ch-ua-mobile"
        );
      }

      next();
    });

    // middlewares
    app.use(express.json());

    // Routes
    app.get("/", (req, res) => {
      res.json({
        message: "You should use /api/1.0/:resource",
      });
    });

    app.use("/api/1.0", apiRouter());

    const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
      console.log("Error from errorHandler: ", err);

      const statusCode = err.statusCode || 500;

      res.status(statusCode).json({
        error: {
          statusCode: statusCode,
          message: err.message || "Sorry, unkown error",
        },
      });
    };
    app.use(errorHandler);

    app.listen(port, () => {
      console.log("The application is listening on port 3000!");
    });
  })
  .catch((err) => {
    console.log("Error initializing MongoDB: ", err);
  });
