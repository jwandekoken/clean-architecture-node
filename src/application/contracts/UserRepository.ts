import { IUser } from "../../entities/User";

interface IUserRepository {
  add: (user: IUser) => Promise<IUser | Error>;
  // update: (user: IUser) => IUser;
  // delete: (userId: string) => IUser;
  // getById: (userId: string) => IUser;
}

export { IUserRepository };
