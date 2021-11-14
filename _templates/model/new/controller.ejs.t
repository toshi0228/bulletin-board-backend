---
to: src/modules/<%= h.changeCase.camelCase(name)%>/<%= h.changeCase.camelCase(name)%>.controller.ts
unless_exists: true
---
import { Request, Response } from "express";
import <%= h.changeCase.camelCase(name)%>Repository from "./<%= h.changeCase.camelCase(name)%>.repository";
import {
  Get<%= h.changeCase.pascal(name) %>Response,
  Get<%= h.changeCase.pascal(name) %>ByIdResponse,
  Create<%= h.changeCase.pascal(name) %>Request,
  Create<%= h.changeCase.pascal(name) %>Response,
  Update<%= h.changeCase.pascal(name) %>Response,
  Update<%= h.changeCase.pascal(name) %>Request,
  Delete<%= h.changeCase.pascal(name) %>ByIdResponse,
  RootParams,
} from "./<%= h.changeCase.camelCase(name)%>.type"

class <%= h.changeCase.pascal(name)%>Controller {
  async getList(req: Request, res: Response<Get<%= h.changeCase.pascal(name) %>Response>) {
    const result = await <%= h.changeCase.camelCase(name) %>Repository.getList();
    res.status(200).json();
  }

  async getById(req: Request<RootParams>, res: Response<Get<%= h.changeCase.pascal(name) %>ByIdResponse>) {
    const result = await <%= h.changeCase.camelCase(name) %>Repository.getById(req.params.id);
    res.status(200).json();
  }

  async create(req: Request<RootParams, Create<%= h.changeCase.pascal(name) %>Response, Create<%= h.changeCase.pascal(name) %>Request>, res: Response<Create<%= h.changeCase.pascal(name) %>Response>) {
    const result = await <%= h.changeCase.camelCase(name) %>Repository.create(req.body);
    res.status(200).json();
  }

  async update(req: Request<RootParams, Update<%= h.changeCase.pascal(name) %>Response, Update<%= h.changeCase.pascal(name) %>Request>, res: Response<Update<%= h.changeCase.pascal(name) %>Response>) {
    const result = await <%= h.changeCase.camelCase(name) %>Repository.update(req.params.id, req.body);
    res.status(200).json();
  }

  async deleteById(req: Request<RootParams>, res: Response<Delete<%= h.changeCase.pascal(name) %>ByIdResponse>) {
    const result = await <%= h.changeCase.camelCase(name) %>Repository.deleteById(req.params.id);
    res.status(200).json();
  }
}


export default new <%= h.changeCase.pascal(name) %>Controller();

