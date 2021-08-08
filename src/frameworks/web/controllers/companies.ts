import { Request, Response, NextFunction } from "express";
import { CompanyRepository } from "../../persistance/mongo/repositories/companyRepository";
import { HttpError } from "../../../application/use_cases/utils";
import { addCompany } from "../../../application/use_cases/company/addCompany";

const companyController = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;

    if (!req.user._id) {
      const error = new HttpError("Error creating company", 401);
      return next(error);
    }

    let createdCompany;
    try {
      createdCompany = await addCompany(CompanyRepository, {
        name,
        createdBy: req.user._id,
      });
    } catch (error) {
      return next(error);
    }

    return res.json({
      company: createdCompany,
    });
  },
  // getById: async (req: Request, res: Response, next: NextFunction) => {
  //   const userId = req.params.id;

  //   let user;
  //   try {
  //     user = await getUser(UserRepository, userId);
  //   } catch (error) {
  //     return next(error);
  //   }

  //   res.json({
  //     user,
  //   });
  // },
  // update: async (req: Request, res: Response, next: NextFunction) => {
  //   const { _id, name, email, password, companyRef } = req.body;

  //   // validate if user is allowed
  //   if (req.user._id !== _id) {
  //     const error = new HttpError("Access denied", 401);
  //     return next(error);
  //   }

  //   let updatedUser;
  //   try {
  //     updatedUser = await updateUser(UserRepository, {
  //       _id,
  //       name,
  //       email,
  //       password,
  //       companyRef,
  //     });
  //   } catch (error) {
  //     return next(error);
  //   }

  //   return res.json({
  //     user: updatedUser,
  //   });
  // },
  // delete: async (req: Request, res: Response, next: NextFunction) => {
  //   const userId = req.params.id;

  //   let deletedUser;
  //   try {
  //     deletedUser = await deleteUser(UserRepository, userId);
  //   } catch (error) {
  //     return next(error);
  //   }

  //   return res.json({
  //     deletedUser,
  //   });
  // },
};

export { companyController };
