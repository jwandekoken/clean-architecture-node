export type Status = "Running" | "Alerting" | "Stopped";

export interface IAsset {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  model: string;
  ownerId: string;
  status: Status;
  healthLevel: number;
}
