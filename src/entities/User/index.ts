import { UserProps } from "./interfaces";

class User implements UserProps {
  public id: string;
  public name: string;
  public email: string;
  public password: string;
  public companyRef: string;

  constructor({ id, name, email, password, companyRef }: UserProps) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.companyRef = companyRef;
  }
}

export default User;
