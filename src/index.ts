import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import { Router } from "express";
import * as bodyParser from "body-parser";
import { usersRoutes } from "./routes";
import * as cors from "cors";

createConnection()
  .then(async (connection) => {
    // create express app
    const app = express();

    app.use(bodyParser.json());

    // ミドルウェア
    app.use(cors());

    // ルーティング
    app.use("/user", usersRoutes);

    // start express server
    app.listen(3000);

    // insert new users for test
    // await connection.manager.save(
    //   connection.manager.create(User, {
    //     firstName: "Timber",
    //     lastName: "Saw",
    //     age: 27,
    //   })
    // );
    // await connection.manager.save(
    //   connection.manager.create(User, {
    //     firstName: "Phantom",
    //     lastName: "Assassin",
    //     age: 24,
    //   })
    // );
  })
  .catch((error) => console.log(error));
