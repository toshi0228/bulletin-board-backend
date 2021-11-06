import { BulletinBoard } from "../../entity/BulletinBoard";
import { User } from "../../entity/User";
import { bulletinBoardEditType, bulletinBoardCreateType } from "./bulletinBoard.type";
import { protectionPersonalInfo } from "../../helper";
import user from "../../routes/user";

class BulletinBoardRepository {
  // =============================
  // 全てのポストデータを取得
  // =============================
  async findAll() {
    // bulletinBoardエンティティから、ユーザーのリレーションを取得
    let BulletinBoards = await BulletinBoard.find({
      relations: ["user", "likes"],
      order: { id: "DESC" },
    });

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
    const result = await BulletinBoard.findOne({ id: props.id });
    return result;
  }

  // =============================
  // idから投稿を編集する。
  // =============================
  async edit(param: bulletinBoardEditType) {
    const result = await BulletinBoard.find({
      id: Number(param.id),
    });

    await BulletinBoard.save({ ...result, ...param });
    return result;
  }

  // =============================
  // 新規保存
  // =============================
  async save(param: bulletinBoardCreateType) {
    const newArticle = new BulletinBoard();
    const newBulletinBoard = await BulletinBoard.create({ ...newArticle, ...param });
    const result = await newBulletinBoard.save();
    return result;
  }

  async delete(param: { id: number }) {
    const deleteBulletinBoard = await BulletinBoard.delete({ id: param.id });
    return deleteBulletinBoard;
  }

  // =============================
  // いいね作成
  // =============================
  async createLike(param: { bulletinBoardId: number; userId: number }) {
    const bulletinBoard = await BulletinBoard.findOne(param.bulletinBoardId, { relations: ["likes"] });
    const user = await User.findOne(param.userId);

    bulletinBoard.likes = [...bulletinBoard.likes, user];
    await bulletinBoard.save();

    // 個人情報のemailとpassword等を削除する;
    const likesUsers = bulletinBoard.likes.map((user) => {
      return { userId: user.id, name: user.name };
    });

    return likesUsers;
  }

  // =============================
  // いいね削除
  // =============================
  async deleteLike(param: { bulletinBoardId: number; userId: number }) {
    const bulletinBoard = await BulletinBoard.findOne(param.bulletinBoardId, { relations: ["likes"] });
    const deleteUser = await User.findOne(param.userId);

    const newLikesUsers = bulletinBoard.likes.filter((likesUser) => {
      return likesUser.id !== deleteUser.id;
    });

    bulletinBoard.likes = newLikesUsers;
    await bulletinBoard.save();

    // 個人情報のemailとpassword等を削除する;
    const deletedLikesUsers = newLikesUsers.map((user) => {
      return { userId: user.id, name: user.name };
    });

    return deletedLikesUsers;
  }
}

export default new BulletinBoardRepository();
