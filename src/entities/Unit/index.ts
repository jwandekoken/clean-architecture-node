import { UnitProps } from "./interfaces";

class Unit implements UnitProps {
  public id: string;
  public name: string;
  public companyRef: string;

  constructor({ id, name, companyRef }: UnitProps) {
    this.id = id;
    this.name = name;
    this.companyRef = companyRef;
  }
}

export default Unit;
