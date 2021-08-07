import { IAddUser } from "./interfaces";
import { HttpError } from "../utils";

const addUser: IAddUser = async (
  UserRepository,
  { name, email, password, companyRef }
) => {
  if (!name || !email || !password) {
    throw new HttpError("validation failed", 400);
  }

  // check if student exist by email

  // create new student object

  try {
    return await UserRepository.add({
      name,
      email,
      password,
    });
  } catch (err) {
    const error = new HttpError(err.message || "Unknown error creating user");
    throw error;
  }
};

export { addUser };
