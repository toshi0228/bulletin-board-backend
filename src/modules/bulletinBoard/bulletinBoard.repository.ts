import { BulletinBoard } from "../../entity/BulletinBoard";
import { bulletinBoardType } from "./bulletinBoard.type";
import UserRepository from "../user/user.repository";
import { User } from "../../entity/User";

class BulletinBoardRepository {
  // =============================
  // ユーザの取得
  // =============================
  async findAll() {
    const id = 1;
    let result = await BulletinBoard.find({
      relations: ["user", "user.bulletinBoards"],
      // where: {
      //   userId: "1",
      // },
      // join: {
      //   alias: "user",
      //   leftJoinAndSelect: {
      //     user: "BulletinBoard.user",
      //   },
      // },
      // loadRelationIds: { relations: ["user"] },
      // join: { alias: "user", leftJoinAndSelect: { user: "user" } },
    });
    console.log({ result });

    // const result = await BulletinBoard.find({
    //   where: {
    //     userId: 1,
    //   },
    // });

    // const userId = Number(result[0].userId);
    // const user = await UserRepository.findUser(userId);
    // console.log(user);
    // console.log({ result });

    // console.log(result[0].user);

    return result;
  }

  // 新規保存
  async save(bulletinBoard: bulletinBoardType) {
    const newBulletinBoard = await BulletinBoard.create(bulletinBoard);
    const result = await newBulletinBoard.save();
    return result;
  }
}

export default new BulletinBoardRepository();
