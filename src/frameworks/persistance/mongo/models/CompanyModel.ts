import mongoose from "mongoose";
import { ICompany } from "../../../../entities/Company";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model<ICompany>("Company", UserSchema);
export { Company };
