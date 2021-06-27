import { BulletinBoard } from "../../entity/BulletinBoard";
import { bulletinBoardType } from "./bulletinBoard.type";
import UserRepository from "../user/user.repository";
import { User } from "../../entity/User";
import { decodedToken } from "../../helper";
import { bulletinBoardRoutes } from "../../routes";
import { protectionPersonalInfo } from "../../helper";

class BulletinBoardRepository {
  // =============================
  // 全てのポストデータを取得
  // =============================
  async findAll() {
    // bulletinBoardエンティティから、ユーザーのリレーションを取得
    let BulletinBoards = await BulletinBoard.find({
      relations: ["user"],
    });

    // 個人情報のemailとpassword等を削除する
    BulletinBoards.map((BulletinBoard) => {
      protectionPersonalInfo(BulletinBoard);
      return BulletinBoard;
    });

    return BulletinBoards;
  }

  // =============================
  // 新規保存
  // =============================
  async save(bulletinBoard: bulletinBoardType) {
    const newBulletinBoard = await BulletinBoard.create(bulletinBoard);
    const result = await newBulletinBoard.save();
    return result;
  }
}

export default new BulletinBoardRepository();
