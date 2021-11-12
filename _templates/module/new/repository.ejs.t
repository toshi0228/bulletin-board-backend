---
to: src/modules/<%= h.changeCase.lower(name)%>/<%= h.changeCase.lower(name)%>.repository.ts
unless_exists: true
---
import { <%= h.changeCase.pascal(name) %> } from "../../entity/<%= h.changeCase.pascal(name) %>";
import {
  Create<%= h.changeCase.pascal(name) %>Response,
  Create<%= h.changeCase.pascal(name) %>Request,
  Get<%= h.changeCase.pascal(name) %>Response,
  Get<%= h.changeCase.pascal(name) %>ByIdResponse,
  Update<%= h.changeCase.pascal(name) %>Response,
  Update<%= h.changeCase.pascal(name) %>Request,
  Delete<%= h.changeCase.pascal(name) %>ByIdResponse,
} from "./<%= h.changeCase.lower(name)%>.type"

class <%= h.changeCase.pascal(name)%>Repository {
  async findAll() {
    const origin = await <%= h.changeCase.pascal(name) %>.findOne()
    return "";
  }

  async findOne(id: string) {
    const origin = await <%= h.changeCase.pascal(name) %>.findOne({ id: parseInt(id) });
    return "";
  }

  async save(param: Create<%= h.changeCase.pascal(name) %>Request) {
    const new<%= h.changeCase.pascal(name) %> = new <%= h.changeCase.pascal(name) %>();
    const new<%= h.changeCase.pascal(name) %>Param = await <%= h.changeCase.pascal(name) %>.create({ ...new<%= h.changeCase.pascal(name) %>, ...param });
    const result = await new<%= h.changeCase.pascal(name) %>Param.save();
    return "";
  }

  async edit(param: Update<%= h.changeCase.pascal(name) %>Request) {
    return "";
  }

  async delete(id: string) {
    const origin = await <%= h.changeCase.pascal(name) %>.delete({ id: parseInt(id) });
    return "";
  }
}

export default new <%= h.changeCase.pascal(name) %>Repository();

