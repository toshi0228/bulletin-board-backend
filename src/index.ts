import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { usersRoutes, bulletinBoardRoutes } from "./routes";
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
    app.use("/bulletin-board", bulletinBoardRoutes);

    // start express server
    app.listen(3000, () => console.log("ポート3000で接続, http://localhost:3000"));

    // insert new users for test
    // await connection.manager.save(
    //   connection.manager.create(UserBulletinBoardLiked, {
    //     user_id: 49,
    //     bulletinBoard_id: 40,
    //     isLiked: true,
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
