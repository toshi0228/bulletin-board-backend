import { BulletinBoard } from "../../entity/BulletinBoard";
import { bulletinBoardType } from "./bulletinBoard.type";

class BulletinBoardRepository {
  // BulletinBoardObj = new BulletinBoard();

  async save(bulletinBoard: bulletinBoardType) {
    const newBulletinBoard = await BulletinBoard.create(bulletinBoard);
    newBulletinBoard.save();

    // const newUser = await User.create(user);
    console.log("newUser", newBulletinBoard);
    // newBulletinBoard
  }
}

export default new BulletinBoardRepository();
