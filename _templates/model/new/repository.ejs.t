---
to: src/modules/<%= h.changeCase.camelCase(name)%>/<%= h.changeCase.camelCase(name)%>.repository.ts
unless_exists: true
---
import { <%= h.changeCase.pascal(name) %> } from "../../entity/<%= h.changeCase.pascal(name) %>";
import <%= h.changeCase.camelCase(name)%>Service from "./<%= h.changeCase.camelCase(name)%>.service";
import {
  Get<%= h.changeCase.pascal(name) %>Response,
  Get<%= h.changeCase.pascal(name) %>ByIdResponse,
  Create<%= h.changeCase.pascal(name) %>Request,
  Create<%= h.changeCase.pascal(name) %>Response,
  Update<%= h.changeCase.pascal(name) %>Request,
  Update<%= h.changeCase.pascal(name) %>Response,
  Delete<%= h.changeCase.pascal(name) %>ByIdResponse,
} from "./<%= h.changeCase.camelCase(name)%>.type"

// =============================
// DBの操作の処理
// =============================
class <%= h.changeCase.pascal(name)%>Repository {
  async getList() {
    const origin = await <%= h.changeCase.pascal(name) %>.find()
    const result = <%= h.changeCase.camelCase(name)%>Service.getList(origin);
    return result;
  }

  async getById(id: string) {
    const origin = await <%= h.changeCase.pascal(name) %>.findOne({ id: parseInt(id) });
    const result = <%= h.changeCase.camelCase(name)%>Service.getById(origin);
    return result;
  }

  async create(param: Create<%= h.changeCase.pascal(name) %>Request) {
    const new<%= h.changeCase.pascal(name) %> = new <%= h.changeCase.pascal(name) %>();
    const new<%= h.changeCase.pascal(name) %>Param = await <%= h.changeCase.pascal(name) %>.create({ ...new<%= h.changeCase.pascal(name) %>, ...param });
    const origin = await new<%= h.changeCase.pascal(name) %>Param.save();
    const result = <%= h.changeCase.camelCase(name)%>Service.create(origin);
    return result;
  }

  async update(id: string, param: Update<%= h.changeCase.pascal(name) %>Request) {
    const origin = await <%= h.changeCase.pascal(name) %>.findOne({
      id: parseInt(id),
    });
    const res = await this.create({ ...origin, ...param });
    const result = <%= h.changeCase.camelCase(name)%>Service.update(res);
    return result;
  }

  async deleteById(id: string) {
    const origin = await <%= h.changeCase.pascal(name) %>.delete({ id: parseInt(id) });
    const result = <%= h.changeCase.camelCase(name)%>Service.deleteById(origin);
    return result;
  }
}

export default new <%= h.changeCase.pascal(name) %>Repository();

