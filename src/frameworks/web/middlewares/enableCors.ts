import { Request, Response, NextFunction } from "express";

const enableCors = (req: Request, res: Response, next: NextFunction) => {
  const allowedOrigins = ["http://localhost:3000"];
  const origin = req.headers.origin;

  if (origin) {
    if (allowedOrigins.indexOf(origin) > -1) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    }

    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Authorization, Accept, Referer, User-Agent, sec-ch-ua, sec-ch-ua-mobile"
    );
  }

  next();
};

export { enableCors };
