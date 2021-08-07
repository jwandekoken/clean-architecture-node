import { IUser } from "../../entities/User";

interface IUserRepository {
  get: (userId: string) => Promise<IUser>;
  add: (user: IUser) => Promise<IUser>;
  update: (user: IUser) => Promise<IUser>;
  // delete: (userId: string) => IUser;
  // getById: (userId: string) => IUser;
}

export { IUserRepository };
