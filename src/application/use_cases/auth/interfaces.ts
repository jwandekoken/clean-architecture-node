import { IUserRepository } from "../../contracts/UserRepositoryContract";

export type IGenerateToken = (
  userRepository: IUserRepository,
  userData: { email: string; password: string }
) => Promise<string>;
