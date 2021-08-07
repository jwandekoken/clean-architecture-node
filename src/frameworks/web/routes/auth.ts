// import express from "express";
// import { UserRepository } from "../../../frameworks/persistance/mongo/repositories/userRepository";

// const authRoutes = express.Router();

// // Create new user
// authRoutes.post("/login", async (req, res, next) => {
//   const { email, password } = req.body;

//   let createdUser;
//   try {
//     createdUser = await addUser(UserRepository, {
//       name,
//       email,
//       password,
//       companyRef,
//     });
//   } catch (error) {
//     return next(error);
//   }

//   return res.json({
//     user: createdUser,
//   });
// });

// export { authRoutes };
