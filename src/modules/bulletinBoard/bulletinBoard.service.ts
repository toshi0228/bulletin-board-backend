// =============================
// DB操作をした結果を加工
// =============================

class BulletinBoardService {
  getList(param) {
    param.map((item) => {
      item.user = {
        id: item.user.id,
        name: item.user.name,
        email: item.user.email,
      };
      return item;
    });

    return param;
  }

  getById(param) {
    return param;
  }

  create(param) {
    return param;
  }

  update(param) {
    return param;
  }

  deleteById(param) {
    return param;
  }
}

export default new BulletinBoardService();
