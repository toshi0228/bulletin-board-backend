---
to: src/modules/<%= h.changeCase.lower(name)%>/<%= h.changeCase.lower(name)%>.module.ts
unless_exists: true
---

export { default as <%= h.changeCase.pascal(name)%>Controller  } from "./<%= h.changeCase.lower(name)%>.controller";