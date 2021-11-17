---
to: src/routes/index.ts
unless_exists: true
inject: true
after: router.use
eof_last: false
---
router.use("/<%= h.changeCase.snakeCase(name)%>", <%= h.changeCase.camelCase(name)%>Routes);
