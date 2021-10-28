import { BulletinBoard } from "../../entity/BulletinBoard";
import { bulletinBoardEditType, bulletinBoardCreateType } from "./bulletinBoard.type";
import { protectionPersonalInfo } from "../../helper";

class BulletinBoardRepository {
  // =============================
  // 全てのポストデータを取得
  // =============================
  async findAll() {
    // bulletinBoardエンティティから、ユーザーのリレーションを取得
    let BulletinBoards = await BulletinBoard.find({
      relations: ["user", "liked"],
      order: { id: "DESC" },
    });

    console.log(BulletinBoards[1]);

    // 個人情報のemailとpassword等を削除する
    BulletinBoards.map((BulletinBoard) => {
      protectionPersonalInfo(BulletinBoard);
      return BulletinBoard;
    });

    return BulletinBoards;
  }

  // =============================
  // idから投稿を取得する。
  // =============================
  async findOne(props: { id: number }) {
    let result = await BulletinBoard.find({ id: props.id });
    // let result = await BulletinBoard.find({ select: ["id"] });
    return result[0];
  }

  // =============================
  // idから投稿を編集する。
  // =============================
  async edit(bulletinBoard: bulletinBoardEditType) {
    const newBulletinBoard = bulletinBoard;
    const result = await BulletinBoard.find({
      id: Number(newBulletinBoard.id),
    });

    // データの更新
    result[0].title = newBulletinBoard.title;
    result[0].contents = newBulletinBoard.contents;
    result[0].userId = newBulletinBoard.userId;

    await BulletinBoard.save(result);
    return result;
  }

  // =============================
  // 新規保存
  // =============================
  async save(bulletinBoard: bulletinBoardCreateType) {
    const newBulletinBoard = await BulletinBoard.create(bulletinBoard);
    const result = await newBulletinBoard.save();
    return result;
  }

  async delete(param: { id: number }) {
    const deleteBulletinBoard = await BulletinBoard.delete({ id: param.id });
    return deleteBulletinBoard;
  }
}

export default new BulletinBoardRepository();
