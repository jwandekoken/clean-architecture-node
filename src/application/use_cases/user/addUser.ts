import { IUser } from "../../../entities/User";
import { IUserRepository } from "../../contracts/UserRepository";

const addUser = async (
  UserRepository: IUserRepository,
  { name, email, password }: IUser
) => {
  // validate
  if (!name || !email || !password) {
    throw new Error("validation failed");
  }

  // check if student exist by email

  // create new student object

  let createdUser;
  try {
    createdUser = await UserRepository.add({
      name,
      email,
      password,
    });
  } catch (error) {
    console.log("error: ", error);
  }

  if (!createdUser) {
    return {
      error: "could not create user",
    };
  }

  return createdUser;
};

export { addUser };
