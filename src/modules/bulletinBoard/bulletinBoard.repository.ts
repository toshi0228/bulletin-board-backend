import { BulletinBoard } from "../../entity/BulletinBoard";

class BulletinBoardRepository {
  BulletinBoard = new BulletinBoard();

  async save(bulletinBoard: BulletinBoard) {
    const newUser = await BulletinBoard.create(bulletinBoard);
    console.log("newUser", newUser);
  }
}

export default new BulletinBoard();
