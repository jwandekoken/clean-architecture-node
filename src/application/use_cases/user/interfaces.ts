import { IUserRepository } from "../../contracts/UserRepository";
import { IUser } from "../../../entities/User";

export type IAddUser = (
  userRepository: IUserRepository,
  userData: IUser
) => Promise<IUser>;
