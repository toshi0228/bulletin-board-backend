import { BulletinBoard } from "../../entity/BulletinBoard";
import { Like } from "../../entity/Like";
import { bulletinBoardEditType, bulletinBoardCreateType } from "./bulletinBoard.type";
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
  // idから投稿を編集する。
  // =============================
  async update(articleId: number, param: bulletinBoardEditType) {
    const origin = await BulletinBoard.findOne({
      id: articleId,
    });

    const result = await this.save({ ...origin, ...param });
    return result;
  }
  // =============================
  // いいね作成
  // =============================
  async createLike(param: { bulletinBoardId: number; userId: number }) {
    const newLike = new Like();
    const newLikeParam = await Like.create({ ...newLike, ...param });
    const result = await newLikeParam.save();
    return result;
  }

  // =============================
  // いいね削除
  // =============================
  async deleteLike(id: string) {
    const deleteLike = await Like.delete(id);
    return deleteLike;
  }
}

export default new BulletinBoardRepository();
