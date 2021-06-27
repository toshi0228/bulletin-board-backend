import { RequestHandler, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../modules/user/user.module";

interface IdecodedTokenType {
  userId: number;
  iat: number;
  exp: number;
}

const notAuthorized = (res: Response) => {
  return res.status(401).send({ error: "認証エラーです" });
};

export const authMiddleware: RequestHandler = (req, res, next) => {
  const token = req.headers.authorization;

  verify(
    token,
    process.env.JWT_SECRET,
    async (error, decodedToken: IdecodedTokenType) => {
      if (error) {
        return notAuthorized(res);
      } else {
        const result = await UserRepository.findUser(decodedToken.userId);
        if (!result) return notAuthorized(res);
      }
    }
  );

  next();
};
