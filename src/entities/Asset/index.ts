import { AssetProps, Status } from "./interfaces";

class Asset implements AssetProps {
  public id: string;
  public imageUrl: string;
  public name: string;
  public description: string;
  public model: string;
  public ownerId: string;
  public status: Status;
  public healthLevel: number;

  constructor({
    id,
    imageUrl,
    name,
    description,
    model,
    ownerId,
    status,
    healthLevel,
  }: AssetProps) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.name = name;
    this.description = description;
    this.model = model;
    this.ownerId = ownerId;
    this.status = status;
    this.healthLevel = healthLevel;
  }
}

export default Asset;
