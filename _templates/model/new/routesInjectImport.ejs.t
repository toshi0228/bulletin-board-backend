---
to: src/routes/index.ts
unless_exists: true
inject: true
after: import { Router } from "express";
eof_last: false
---
import { <%= h.changeCase.camelCase(name)%>Routes } from "./routes.<%= h.changeCase.camelCase(name)%>";