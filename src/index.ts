import express from "express";
import type { ErrorRequestHandler } from "express";
import { projectDependencies } from "./config/projectDependencies";
//
import { UserRepository } from "./frameworks/persistance/mongo/repositories/userRepository";
import { addUser } from "./application/use_cases/user/addUser";

const app = express();
const port = process.env.PORT || 3000;

projectDependencies.DatabaseService.init("mongodb://localhost:27017/test")
  .then(() => {
    app.get("/", (req, res) => {
      res.send("Hello World - here an Express project with TS");
    });

    app.post("/user", async (req, res, next) => {
      let createdUser;
      try {
        createdUser = await addUser(UserRepository, {
          name: "Julio",
          email: "email@email.com",
          password: "123",
        });
      } catch (error) {
        console.log("### entrou aqui");
        return next(error);
      }

      console.log("createdUser: ", createdUser);

      return res.json({
        user: createdUser,
      });
    });

    const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
      console.log("err from errorHandler: ", err);
      res.status(500).send("Something broke!");
    };
    app.use(errorHandler);

    app.listen(port, () => {
      console.log("The application is listening on port 3000!");
    });
  })
  .catch((err) => {
    console.log("Error initializing MongoDB: ", err);
  });
