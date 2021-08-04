import { IAddUser } from "./interfaces";

const addUser: IAddUser = async (UserRepository, { name, email, password }) => {
  // validate
  if (!name || !email || !password) {
    throw new Error("validation failed");
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
    const error = new Error(err.message || "Unknown error creating user");
    throw error;
  }
};

export { addUser };
