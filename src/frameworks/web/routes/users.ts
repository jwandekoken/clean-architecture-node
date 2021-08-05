import express from "express";
import { UserRepository } from "../../../frameworks/persistance/mongo/repositories/userRepository";
import { addUser } from "../../../application/use_cases/user/addUser";

const usersRoutes = express.Router();

usersRoutes.get("/", (req, res, next) => {
  res.json({
    message: "users get",
  });
});

usersRoutes.post("/", async (req, res, next) => {
  console.log("req.body: ", req.body);

  const { name, email, password } = req.body;

  let createdUser;
  try {
    createdUser = await addUser(UserRepository, {
      name,
      email,
      password,
    });
  } catch (error) {
    return next(error);
  }

  console.log("createdUser: ", createdUser);

  return res.json({
    user: createdUser,
  });
});

export { usersRoutes };
