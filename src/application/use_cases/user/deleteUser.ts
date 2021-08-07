import { IDeleteUser } from "./interfaces";
import { HttpError } from "../utils";

const deleteUser: IDeleteUser = async (UserRepository, _id) => {
  if (!_id) {
    throw new HttpError("validation failed", 400);
  }

  try {
    return await UserRepository.delete(_id);
  } catch (err) {
    const error = new HttpError(err.message || "Unknown error deleting user");
    throw error;
  }
};

export { deleteUser };
