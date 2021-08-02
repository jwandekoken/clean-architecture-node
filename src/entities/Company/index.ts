import { CompanyProps } from "./interfaces";

class Company implements CompanyProps {
  public id: string;
  public name: string;

  constructor({ id, name }: CompanyProps) {
    this.id = id;
    this.name = name;
  }
}

export default Company;
