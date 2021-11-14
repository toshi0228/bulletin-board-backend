---
to: src/modules/<%= h.changeCase.camelCase(name)%>/<%= h.changeCase.camelCase(name)%>.module.ts
unless_exists: true
---

export { default as <%= h.changeCase.pascal(name)%>Controller  } from "./<%= h.changeCase.camelCase(name)%>.controller";
export { default as <%= h.changeCase.pascal(name)%>Repository  } from "./<%= h.changeCase.camelCase(name)%>.repository";
export * from "./<%= h.changeCase.pascal(name)%>.validation";