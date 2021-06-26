import { verify } from "jsonwebtoken";

interface IdecodedTokenType {
  userId: number;
  iat: number;
  exp: number;
}

export const decodedToken = (token: string) => {
  const result = verify(
    token,
    process.env.JWT_SECRET,
    (error, decodedToken: IdecodedTokenType) => {
      if (error) return "エラー";
      const userId = decodedToken.userId;
      return userId;
    }
  );

  return result;
};
