import { IAddCompany } from "./interfaces";
import { HttpError } from "../utils";

const addCompany: IAddCompany = async (
  companyRepository,
  { name, createdBy }
) => {
  if (!name || !createdBy) {
    throw new HttpError("validation failed", 400);
  }

  try {
    return await companyRepository.add({
      name,
      createdBy,
    });
  } catch (err) {
    const error = new HttpError(
      err.message || "Unknown error creating company"
    );
    throw error;
  }
};

export { addCompany };
