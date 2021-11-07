---
to: src/modules/<%= h.changeCase.lower(name)%>/<%= h.changeCase.lower(name)%>.repository.ts
unless_exists: true
---
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
    return "";
  }

  async findOne(id: string) {
    return "";
  }

  async save(param: Create<%= h.changeCase.pascal(name) %>Request) {
    return "";
  }

  async edit(param: Update<%= h.changeCase.pascal(name) %>Request) {
    return "";
  }

  async delete(id: string) {
    return "";
  }
}

export default new <%= h.changeCase.pascal(name) %>Repository();

