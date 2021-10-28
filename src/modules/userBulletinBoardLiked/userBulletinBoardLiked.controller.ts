import { RequestHandler } from "express";
import BulletinBoardRepository from "../bulletinBoard/bulletinBoard.repository";

class UserBulletinBoardLiked {
  async getById<RequestHandler>(req, res, next) {
    res.status.json("ok");
  }

  async getList<RequestHandler>(req, res, next) {
    res.status(200).json("ok");
  }

  // export const getListBulletinBoard: RequestHandler = async (req, res, next) => {
  //   const result = await BulletinBoardRepository.findAll();
  //   res.status(200).json(result);
  // };
  //
  //
}

export default new UserBulletinBoardLiked();
