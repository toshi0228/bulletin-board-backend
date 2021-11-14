---
to: src/modules/<%= h.changeCase.camelCase(name)%>/<%= h.changeCase.camelCase(name)%>.service.ts
unless_exists: true
---
import { <%= h.changeCase.pascal(name) %> } from "../../entity/<%= h.changeCase.pascal(name) %>";
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
// DB操作をした結果を加工
// =============================
class <%= h.changeCase.pascal(name)%>Service {
  async getList(param) {
    return param;
  }

  async getById(param) {
    return param;
  }

  async create(param) {
    return param;
  }

  async update(param) {
    return param;
  }

  async deleteById(param) {
    return param;
  }
}

export default new <%= h.changeCase.pascal(name) %>Service();

