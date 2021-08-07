import express from "express";
import { UserRepository } from "../../../frameworks/persistance/mongo/repositories/userRepository";
import { addUser } from "../../../application/use_cases/user/addUser";
import { getUser } from "../../../application/use_cases/user/getUser";
import { updateUser } from "../../../application/use_cases/user/updateUser";

const usersRoutes = express.Router();

// Get user by id
usersRoutes.get("/:id", async (req, res, next) => {
  const userId = req.params.id;

  let user;
  try {
    user = await getUser(UserRepository, userId);
  } catch (error) {
    return next(error);
  }

  res.json({
    user,
  });
});

// Create new user
usersRoutes.post("/", async (req, res, next) => {
  const { name, email, password, companyRef } = req.body;

  let createdUser;
  try {
    createdUser = await addUser(UserRepository, {
      name,
      email,
      password,
      companyRef,
    });
  } catch (error) {
    return next(error);
  }

  return res.json({
    user: createdUser,
  });
});

// Update user user
usersRoutes.put("/", async (req, res, next) => {
  const { _id, name, email, password, companyRef } = req.body;

  let updatedUser;
  try {
    updatedUser = await updateUser(UserRepository, {
      _id,
      name,
      email,
      password,
      companyRef,
    });
  } catch (error) {
    return next(error);
  }

  return res.json({
    user: updatedUser,
  });
});

export { usersRoutes };
