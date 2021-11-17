---
to: src/modules/<%= h.changeCase.camelCase(name)%>/<%= h.changeCase.camelCase(name)%>.service.ts
unless_exists: true
---
import { <%= h.changeCase.pascal(name) %> } from "../../entity/<%= h.changeCase.pascal(name) %>";
import {
  Get<%= h.changeCase.pascal(name) %>Response,
  Get<%= h.changeCase.pascal(name) %>ByIdResponse,
  Create<%= h.changeCase.pascal(name) %>Response,
  Update<%= h.changeCase.pascal(name) %>Response,
  Delete<%= h.changeCase.pascal(name) %>ByIdResponse,
} from "./<%= h.changeCase.camelCase(name)%>.type"

// =============================
// DB操作をした結果を加工
// =============================
class <%= h.changeCase.pascal(name)%>Service {
  getList(param: <%= h.changeCase.pascal(name) %>[]): Get<%= h.changeCase.pascal(name) %>Response {
    return param;
  }

  getById(param: <%= h.changeCase.pascal(name) %>): Get<%= h.changeCase.pascal(name) %>ByIdResponse {
    return param;
  }

  create(param: <%= h.changeCase.pascal(name) %>): Create<%= h.changeCase.pascal(name) %>Response  {
    return param;
  }

  update(param: Create<%= h.changeCase.pascal(name) %>Response): Update<%= h.changeCase.pascal(name) %>Response {
    return param;
  }

  deleteById(id: string): Delete<%= h.changeCase.pascal(name) %>ByIdResponse {
    return { id };
  }
}

export default new <%= h.changeCase.pascal(name) %>Service();

