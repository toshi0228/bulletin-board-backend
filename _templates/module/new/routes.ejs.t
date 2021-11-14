---
to: src/routes/routes.<%= h.changeCase.camelCase(name)%>.ts
unless_exists: true
---
import { Router } from "express";
import { <%= h.changeCase.camelCase(name)%>Controller } from "../modules/<%= h.changeCase.camelCase(name)%>Controller/<%= h.changeCase.camelCase(name)%>Controller.module";
import { authMiddleware } from "../middleware";
import {
  create<%= h.changeCase.pascal(name)%>Validator,
  edit<%= h.changeCase.pascal(name)%>Validator,
} from "../modules/bulletinBoard/bulletinBoard.validator";

export const bulletinBoardRoutes = Router();

bulletinBoardRoutes.get("/", authMiddleware, <%= h.changeCase.camelCase(name)%>Controller.getList);
bulletinBoardRoutes.get("/:id", authMiddleware, <%= h.changeCase.camelCase(name)%>Controller.getById);
bulletinBoardRoutes.post("/create", authMiddleware, create<%= h.changeCase.pascal(name)%>Validator, <%= h.changeCase.camelCase(name)%>Controller.create);
bulletinBoardRoutes.patch("/update/:id", authMiddleware, update<%= h.changeCase.pascal(name)%>Validator, <%= h.changeCase.camelCase(name)%>Controller.update);
bulletinBoardRoutes.delete("/delete/:id", authMiddleware, <%= h.changeCase.camelCase(name)%>Controller.deleteById);