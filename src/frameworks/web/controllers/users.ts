import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../../persistance/mongo/repositories/userRepository";
import { addUser } from "../../../application/use_cases/user/addUser";
import { getUser } from "../../../application/use_cases/user/getUser";
import { updateUser } from "../../../application/use_cases/user/updateUser";
import { deleteUser } from "../../../application/use_cases/user/deleteUser";

const userController = {
  getById: async (req: Request, res: Response, next: NextFunction) => {
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
  },
  create: async (req: Request, res: Response, next: NextFunction) => {
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
  },
  update: async (req: Request, res: Response, next: NextFunction) => {
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
  },
  delete: async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.id;

    let deletedUser;
    try {
      deletedUser = await deleteUser(UserRepository, userId);
    } catch (error) {
      return next(error);
    }

    return res.json({
      deletedUser,
    });
  },
};

export { userController };
