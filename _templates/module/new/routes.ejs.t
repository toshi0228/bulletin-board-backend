---
to: src/routes/routes.<%= h.changeCase.camelCase(name)%>.ts
unless_exists: true
---
import { Router } from "express";
import { authMiddleware } from "../middleware";
import {
  <%= h.changeCase.camelCase(name)%>Controller,
  create<%= h.changeCase.pascal(name)%>Validator,
  update<%= h.changeCase.pascal(name)%>Validator,
} from "../modules/<%= h.changeCase.camelCase(name)%>Controller/<%= h.changeCase.camelCase(name)%>Controller.module";

export const <%= h.changeCase.camelCase(name)%>Routes = Router();

<%= h.changeCase.camelCase(name)%>Routes.get("/", authMiddleware, <%= h.changeCase.camelCase(name)%>Controller.getList);
<%= h.changeCase.camelCase(name)%>Routes.get("/:id", authMiddleware, <%= h.changeCase.camelCase(name)%>Controller.getById);
<%= h.changeCase.camelCase(name)%>Routes.post("/create", authMiddleware, create<%= h.changeCase.pascal(name)%>Validator, <%= h.changeCase.camelCase(name)%>Controller.create);
<%= h.changeCase.camelCase(name)%>Routes.patch("/update/:id", authMiddleware, update<%= h.changeCase.pascal(name)%>Validator, <%= h.changeCase.camelCase(name)%>Controller.update);
<%= h.changeCase.camelCase(name)%>Routes.delete("/delete/:id", authMiddleware, <%= h.changeCase.camelCase(name)%>Controller.deleteById);