import { IUserEntityType } from "../modules/user/user.type";

interface IprotectionPersonalInfoProps {
  user: IUserEntityType;
}

// あるエンティティにネストされたユーザーデータの個人情報を削除する
export const protectionPersonalInfo = (
  entity: IprotectionPersonalInfoProps
) => {
  delete entity.user.id;
  delete entity.user.password;
  delete entity.user.email;
  delete entity.user.createdAt;
  delete entity.user.updatedAt;
  return entity;
};
