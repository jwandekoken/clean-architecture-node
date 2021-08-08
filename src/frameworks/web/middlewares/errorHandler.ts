import type { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log("Error from errorHandler: ", err);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    error: {
      statusCode: statusCode,
      message: err.message || "Sorry, unkown error",
    },
  });
};

export { errorHandler };
