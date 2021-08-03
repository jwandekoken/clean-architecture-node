import express from "express";
import { projectDependencies } from "./config/projectDependencies";
//
import { UserRepository } from "./frameworks/persistance/mongo/repositories/userRepository";
import { addUser } from "./application/use_cases/user/addUser";

const app = express();
const port = process.env.PORT || 3000;

projectDependencies.DatabaseService.init("mongodb://localhost:27017/test")
  .then((res) => {
    console.log("res: ", res);

    app.get("/", (req, res) => {
      res.send("Hello World - here an Express project with TS");
    });

    app.post("/user", async (req, res) => {
      const user = await addUser(UserRepository, {
        name: "Julio",
        email: "email@email.com",
        password: "123",
      });

      return res.json({
        user: user,
      });
    });

    app.listen(port, () => {
      console.log("The application is listening on port 3000!");
    });
  })
  .catch((err) => {
    console.log("err: ", err);
  });
