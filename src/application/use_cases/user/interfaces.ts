import { IUserRepository } from "../../contracts/UserRepositoryContract";
import { IUser } from "../../../entities/User";

export type IAddUser = (
  userRepository: IUserRepository,
  userData: IUser
) => Promise<IUser>;

export type IGetUser = (
  userRepository: IUserRepository,
  userId: string
) => Promise<IUser>;

export type IUpdateUser = (
  userRepository: IUserRepository,
  userData: IUser
) => Promise<IUser>;
