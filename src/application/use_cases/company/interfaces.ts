import { ICompanyRepository } from "../../contracts/CompanyRepositoryContract";
import { ICompany } from "../../../entities/Company";

export type IAddCompany = (
  companyRepository: ICompanyRepository,
  companyData: ICompany
) => Promise<ICompany>;
