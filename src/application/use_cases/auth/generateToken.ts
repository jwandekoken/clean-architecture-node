import { IGenerateToken } from "./interfaces";
import { HttpError, hashStr } from "../utils";
import jwt from "jsonwebtoken";

const generateToken: IGenerateToken = async (
  UserRepository,
  { email, password }
) => {
  if (!process.env.JW7T0K3N) {
    const error = new HttpError("Error loading environment variables");
    throw error;
  }

  if (!email || !password) {
    throw new HttpError("validation failed", 400);
  }

  let userFromDb;
  try {
    userFromDb = await UserRepository.getByEmail(email);
  } catch (err) {
    const error = new HttpError(err.message || "Incorrect credentials", 401);
    throw error;
  }

  if (!userFromDb) {
    const error = new HttpError("Incorrect credentials", 401);
    throw error;
  }

  const hashedPassword = hashStr(password);

  if (hashedPassword !== userFromDb.password) {
    const error = new HttpError("Incorrect credentials", 401);
    throw error;
  }

  const token = jwt.sign({ user: userFromDb }, process.env.JW7T0K3N, {
    expiresIn: "1h",
  });

  return token;
};

export { generateToken };
