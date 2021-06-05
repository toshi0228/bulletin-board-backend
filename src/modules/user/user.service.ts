import { IUserType } from "./user.type";

// ====================================
// 新規登録のバリデーション
// ====================================
export const createUserValidator = (user: IUserType): string[] => {
  const { email, password, confirmPassword } = user;
  let error = [];

  if (!email) {
    error.push("メールアドレスを入力してください");
  }

  if (!password) {
    error.push("パスワードを入力してください");
  }

  if (password !== confirmPassword) {
    error.push("パスワードと確認用のパスワードが違います");
  }

  return error;
};

// ====================================
// ログインのバリデーション
// ====================================
export const loginValidator = (email, password) => {
  let error = [];
  if (!email) {
    error.push("ログインができません");
  }

  if (!password) {
    error.push("ログインができません");
  }
  return error;
};
