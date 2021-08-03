import { IUserRepository } from "../../../../application/contracts/UserRepository";
import { IUser } from "../../../../entities/User";
import { User } from "../models/UserModel";

const UserRepository: IUserRepository = {
  add: (user) => {
    const newUser = new User(user);

    return newUser
      .save()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  },
};

export { UserRepository };
