import { IGetUser } from "./interfaces";
import { HttpError } from "../utils";

const getUser: IGetUser = async (UserRepository, userId) => {
  if (!userId) {
    throw new HttpError("validation failed", 400);
  }

  let user;
  try {
    user = await UserRepository.get(userId);
  } catch (err) {
    const errorStatus = err.message === "Could not find user" ? 404 : 500;
    const error = new HttpError(
      err.message || "Unknown error getting user",
      errorStatus
    );
    throw error;
  }

  if (!user) {
    const error = new HttpError("Could not find user", 404);
    throw error;
  }

  return user;
};

export { getUser };
