import crypto from "crypto";

export class HttpError extends Error {
  statusCode?: number;

  constructor(msg: string, statusCode?: number) {
    super(msg);
    if (statusCode) {
      this.statusCode = statusCode;
    }
  }
}

export const hashStr = (str: string) => {
  if (!process.env.H4SH1NGS3CR37) {
    throw new Error("Error loading env vars");
  }

  return crypto
    .createHmac("sha256", process.env.H4SH1NGS3CR37)
    .update(str)
    .digest("hex");
};
