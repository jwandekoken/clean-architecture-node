import { IUpdateUser } from "./interfaces";
import { HttpError } from "../utils";

const updateUser: IUpdateUser = async (
  UserRepository,
  { _id, name, email, password, companyRef }
) => {
  if (!_id) {
    throw new HttpError("validation failed", 400);
  }

  // validate new fields

  try {
    return await UserRepository.update({
      _id,
      name,
      email,
      password,
      companyRef,
    });
  } catch (err) {
    const error = new HttpError(err.message || "Unknown error updating user");
    throw error;
  }
};

export { updateUser };
