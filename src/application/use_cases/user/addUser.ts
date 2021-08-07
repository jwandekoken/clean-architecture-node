import { IAddUser } from "./interfaces";
import { HttpError, hashStr } from "../utils";

const addUser: IAddUser = async (
  UserRepository,
  { name, email, password, companyRef }
) => {
  if (!name || !email || !password) {
    throw new HttpError("validation failed", 400);
  }

  let hashedPassword;
  try {
    hashedPassword = hashStr(password);
  } catch (err) {
    const error = new HttpError(
      err.message || "Unkown error hashing user password"
    );
    throw error;
  }

  if (!hashedPassword) {
    throw new HttpError("Unkown error hashing user password");
  }

  // check if student exist by email

  // create new student object

  try {
    return await UserRepository.add({
      name,
      email,
      password: hashedPassword,
    });
  } catch (err) {
    const error = new HttpError(err.message || "Unknown error creating user");
    throw error;
  }
};

export { addUser };
