---
to: src/modules/<%= h.changeCase.camelCase(name)%>/<%= h.changeCase.camelCase(name)%>.type.ts
unless_exists: true
---

export interface Get<%= h.changeCase.pascal(name) %>Response {}[]

export interface Get<%= h.changeCase.pascal(name) %>ByIdResponse {}

export interface Create<%= h.changeCase.pascal(name) %>Request {}

export interface Create<%= h.changeCase.pascal(name) %>Response {}

export interface Update<%= h.changeCase.pascal(name) %>Request {}

export interface Update<%= h.changeCase.pascal(name) %>Response {}

export interface Delete<%= h.changeCase.pascal(name) %>ByIdResponse {}

