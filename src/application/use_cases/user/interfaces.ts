import { IUserRepository } from "../../contracts/UserRepositoryContract";
import { IUser } from "../../../entities/User";

export type IAddUser = (
  userRepository: IUserRepository,
  userData: IUser
) => Promise<IUser>;
