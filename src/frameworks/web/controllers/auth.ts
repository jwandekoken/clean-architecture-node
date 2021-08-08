import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../../persistance/mongo/repositories/userRepository";
import { generateToken } from "../../../application/use_cases/auth/generateToken";

const authController = {
  login: async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    let authToken;
    try {
      authToken = await generateToken(UserRepository, {
        email,
        password,
      });
    } catch (error) {
      return next(error);
    }

    res.json({
      authToken,
    });
  },
};

export { authController };
