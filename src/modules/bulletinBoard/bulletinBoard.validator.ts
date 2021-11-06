import { check } from "express-validator";

// ====================================
// 新規登録のバリデーション
// ====================================
export const createBulletinBoardValidator = [
  check("title").not().isEmpty().withMessage("タイトルが空白です"),
  check("contents").not().isEmpty().withMessage("コンテンツが空白です"),
  check("contents").isLength({ max: 140 }).withMessage("コンテンツは140文字以内です"),
];

// ====================================
// 編集のバリデーション
// ====================================
export const editBulletinBoardValidator = [
  check("title").not().isEmpty().withMessage("タイトルが空白です"),
  check("contents").not().isEmpty().withMessage("コンテンツが空白です"),
  check("contents").isLength({ max: 140 }).withMessage("コンテンツは140文字以内です"),
];
