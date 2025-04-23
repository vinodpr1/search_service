import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { PORT } from "./config/serverConfig";

const startServer = () => {
  const app = express();
  app.use(cors())
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log(`Server has Started on PORT No after changing docker j h ${PORT}`);
  });
};

startServer();
