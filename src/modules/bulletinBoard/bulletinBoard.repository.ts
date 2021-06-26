import { BulletinBoard } from "../../entity/BulletinBoard";
import { bulletinBoardType } from "./bulletinBoard.type";
import UserRepository from "../user/user.repository";

class BulletinBoardRepository {
  // BulletinBoardObj = new BulletinBoard();

  // =============================
  // ユーザの取得
  // =============================
  async findAll() {
    // const result = await User.findOne({ email });

    // const result = await BulletinBoard.find({
    //   where: {
    //     userId: 1,
    //   },
    // });

    let result = await BulletinBoard.find();

    const userId = Number(result[0].userId);
    const user = await UserRepository.findUser(userId);

    console.log(user);

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
