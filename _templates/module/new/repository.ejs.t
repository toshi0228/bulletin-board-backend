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
  async getList() {
    const origin = await <%= h.changeCase.pascal(name) %>.find()
    return "";
  }

  async getById(id: string) {
    const origin = await <%= h.changeCase.pascal(name) %>.findOne({ id: parseInt(id) });
    return origin;
  }

  async create(param: Create<%= h.changeCase.pascal(name) %>Request) {
    const new<%= h.changeCase.pascal(name) %> = new <%= h.changeCase.pascal(name) %>();
    const new<%= h.changeCase.pascal(name) %>Param = await <%= h.changeCase.pascal(name) %>.create({ ...new<%= h.changeCase.pascal(name) %>, ...param });
    const result = await new<%= h.changeCase.pascal(name) %>Param.save();
    return result;
  }

  async update(id: string, param: Update<%= h.changeCase.pascal(name) %>Request) {
    const origin = await <%= h.changeCase.pascal(name) %>.findOne({
      id: parseInt(id),
    });

    const result = await this.create({ ...origin, ...param });
    return result;
  }


  async deleteById(id: string) {
    const origin = await <%= h.changeCase.pascal(name) %>.delete({ id: parseInt(id) });
    return origin;
  }
}

export default new <%= h.changeCase.pascal(name) %>Repository();

