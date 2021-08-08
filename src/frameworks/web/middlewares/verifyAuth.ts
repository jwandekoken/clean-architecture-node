import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { HttpError } from "../../../application/use_cases/utils";

const verifyAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!process.env.JW7T0K3N) {
    const error = new HttpError("Error loading environment variables");
    return next(error);
  }

  const authToken = req.headers.authorization;
  if (!authToken) {
    const error = new HttpError("Access denied", 401);
    return next(error);
  }

  // @TODO: type this
  let decodedToken: any;
  try {
    decodedToken = jwt.verify(authToken, process.env.JW7T0K3N);
  } catch (err) {
    console.log("err: ", err);
    const error = new HttpError("Access denied", 401);
    return next(error);
  }

  if (!decodedToken) {
    const error = new HttpError("Access denied", 401);
    return next(error);
  }

  req.user = decodedToken.user;
  next();
};

export { verifyAuth };
