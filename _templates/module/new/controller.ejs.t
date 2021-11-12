---
to: src/modules/<%= h.changeCase.lower(name)%>/<%= h.changeCase.lower(name)%>.controller.ts
unless_exists: true
---
import { Request, Response } from "express";
import <%= h.changeCase.pascal(name)%>Repository from "./<%= h.changeCase.lower(name)%>.repository";
import {
  Create<%= h.changeCase.pascal(name) %>Response,
  Create<%= h.changeCase.pascal(name) %>Request,
  Get<%= h.changeCase.pascal(name) %>Response,
  Get<%= h.changeCase.pascal(name) %>ByIdResponse,
  Update<%= h.changeCase.pascal(name) %>Response,
  Update<%= h.changeCase.pascal(name) %>Request,
  Delete<%= h.changeCase.pascal(name) %>ByIdResponse,
} from "./<%= h.changeCase.lower(name)%>.type"

class <%= h.changeCase.pascal(name)%>Controller {
  async getList(req: Request, res: Response<Get<%= h.changeCase.pascal(name) %>Response>) {
    const result = await <%= h.changeCase.pascal(name) %>Repository.getList();
    res.status(200).json();
  }

  async getById(req: Request, res: Response<Get<%= h.changeCase.pascal(name) %>ByIdResponse>) {
    const result = await <%= h.changeCase.pascal(name) %>Repository.getById(req.params.id);
    res.status(200).json();
  }

  async create(req: Request<any, Create<%= h.changeCase.pascal(name) %>Response, Create<%= h.changeCase.pascal(name) %>Request>, res: Response<Create<%= h.changeCase.pascal(name) %>Response>) {
    const result = await <%= h.changeCase.pascal(name) %>Repository.create(req.body);
    res.status(200).json();
  }

  async update(req: Request<any, Update<%= h.changeCase.pascal(name) %>Response, Update<%= h.changeCase.pascal(name) %>Request>, res: Response<Update<%= h.changeCase.pascal(name) %>Response>) {
    const result = await <%= h.changeCase.pascal(name) %>Repository.update(req.params.id, req.body);
    res.status(200).json();
  }

  async deleteById(req: Request, res: Response<Delete<%= h.changeCase.pascal(name) %>ByIdResponse>) {
    const result = await <%= h.changeCase.pascal(name) %>Repository.deleteById(req.params.id);
    res.status(200).json();
  }
}


export default new <%= h.changeCase.pascal(name) %>Controller();

