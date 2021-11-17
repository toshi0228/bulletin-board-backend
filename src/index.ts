import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";

import * as cors from "cors";

createConnection()
  .then(async (connection) => {
    // create express app
    const app = express();

    app.use(bodyParser.json());

    // ミドルウェア
    app.use(cors());

    // ルーティング
    app.use("/", routes);

    // start express server
    app.listen(3000, () => console.log("ポート3000で接続, http://localhost:3000"));
  })
  .catch((error) => console.log(error));
