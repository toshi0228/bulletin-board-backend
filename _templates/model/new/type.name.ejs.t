---
to: src/modules/<%= h.changeCase.camelCase(name)%>/<%= h.changeCase.camelCase(name)%>.type.ts
unless_exists: true
---

export type Get<%= h.changeCase.pascal(name) %>Response = Get<%= h.changeCase.pascal(name) %>ByIdResponse[];

export interface Get<%= h.changeCase.pascal(name) %>ByIdResponse {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Create<%= h.changeCase.pascal(name) %>Request {}

export interface Create<%= h.changeCase.pascal(name) %>Response {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Update<%= h.changeCase.pascal(name) %>Request {}

export interface Update<%= h.changeCase.pascal(name) %>Response {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Delete<%= h.changeCase.pascal(name) %>ByIdResponse {
  id: string;
}

export interface RootParams {
  id?: string;
}
