import { IUpdateUser } from "./interfaces";
import { HttpError, hashStr } from "../utils";

const updateUser: IUpdateUser = async (
  UserRepository,
  { _id, name, email, password, companyRef }
) => {
  if (!_id) {
    throw new HttpError("validation failed", 400);
  }

  const hashedPassword = hashStr(password);

  // @TODO: validate fields

  try {
    return await UserRepository.update({
      _id,
      name,
      email,
      password: hashedPassword,
      companyRef,
    });
  } catch (err) {
    const error = new HttpError(err.message || "Unknown error updating user");
    throw error;
  }
};

export { updateUser };
