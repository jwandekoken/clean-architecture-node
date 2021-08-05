import { IUserRepository } from "../../../../application/contracts/UserRepositoryContract";
import { User } from "../models/UserModel";

const UserRepository: IUserRepository = {
  add: async (user) => {
    const newUser = new User(user);
    try {
      return await newUser.save();
    } catch (err) {
      const error = new Error(err.message || "Unknown error creating user");
      throw error;
    }
  },
};

export { UserRepository };
