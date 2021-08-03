import mongoose from "mongoose";

const InitMongoDBService = (connString: string) => {
  return mongoose.connect(connString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export { InitMongoDBService };
