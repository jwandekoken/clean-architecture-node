import { IUserRepository } from "../../../../application/contracts/UserRepositoryContract";
import { User } from "../models/UserModel";

const UserRepository: IUserRepository = {
  get: async (userId) => {
    let user;
    try {
      user = await User.findById(userId);
    } catch (err) {
      const error = new Error(err.message || "Could not find user");
      throw error;
    }

    if (!user) {
      const error = new Error("Could not find user");
      throw error;
    }

    return user;
  },
  getByEmail: async (userEmail) => {
    let user;
    try {
      user = await User.findOne({ email: userEmail });
    } catch (err) {
      const error = new Error(err.message || "Could not find user");
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
  update: async ({ _id, name, email, password, companyRef }) => {
    let userFromDb;
    try {
      userFromDb = await User.findById(_id);
    } catch (err) {
      const error = new Error(err.message || "Could not find user to update");
      throw error;
    }

    if (!userFromDb) {
      const error = new Error("Could not find user to update");
      throw error;
    }

    userFromDb.name = name ? name : userFromDb.name;
    userFromDb.email = email ? email : userFromDb.email;
    userFromDb.password = password ? password : userFromDb.password;
    userFromDb.companyRef = companyRef ? companyRef : userFromDb.companyRef;

    let updatedUser;
    try {
      updatedUser = await userFromDb.save();
    } catch (err) {
      const error = new Error(err.message || "Could not update user");
      throw error;
    }

    if (!updatedUser) {
      const error = new Error("Could not update user");
      throw error;
    }

    return updatedUser;
  },
  delete: async (_id) => {
    let deletedUser;
    try {
      deletedUser = await User.findOneAndDelete({ _id });
    } catch (err) {
      const error = new Error(err.message || "Could not delete user");
      throw error;
    }

    if (!deletedUser) {
      const error = new Error("Could not delete user");
      throw error;
    }

    return deletedUser;
  },
};

export { UserRepository };
