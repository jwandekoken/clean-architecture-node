import { ICompany } from "../../entities/Company";

interface ICompanyRepository {
  // get: (companyId: string) => Promise<ICompany>;
  add: (company: ICompany) => Promise<ICompany>;
  // update: (company: ICompany) => Promise<ICompany>;
  // delete: (companyId: string) => Promise<ICompany>;
}

export { ICompanyRepository };
