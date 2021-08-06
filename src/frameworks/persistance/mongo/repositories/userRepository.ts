import { IUserRepository } from "../../../../application/contracts/UserRepositoryContract";
import { User } from "../models/UserModel";

const UserRepository: IUserRepository = {
  get: async (userId) => {
    let user;
    try {
      user = await User.findById(userId);
    } catch (err) {
      const error = new Error(err.message || "Unknown error creating user");
      throw error;
    }

    if (!user) {
      const error = new Error("Could not find user");
      throw error;
    }

    return user;
  },
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
