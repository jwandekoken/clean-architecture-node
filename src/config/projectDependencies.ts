import { InitMongoDBService } from "../frameworks/persistance/mongo/MongoDbService";

const projectDependencies = {
  DatabaseService: {
    init: InitMongoDBService,
  },
};

export { projectDependencies };
