---
to: src/modules/<%= h.changeCase.camelCase(name)%>/<%= h.changeCase.camelCase(name)%>.validation.ts
unless_exists: true
---
import { check } from "express-validator";

// ====================================
// 新規登録のバリデーション
// ====================================
export const create<%= h.changeCase.pascal(name)%>Validator = [
  check("").not().isEmpty().withMessage("タイトルが空白です"),
  check("").isLength({ max: 140 }).withMessage("コンテンツは140文字以内です"),
];

// ====================================
// 編集のバリデーション
// ====================================
export const update<%= h.changeCase.pascal(name)%>Validator = [
  check("").not().isEmpty().withMessage("タイトルが空白です"),
  check("").isLength({ max: 140 }).withMessage("コンテンツは140文字以内です"),
];