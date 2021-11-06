import { IUserEntityType } from "../modules/user/user.type";

interface IProtectionPersonalInfoProps {
  user: IUserEntityType;
  likes?: Partial<IUserEntityType>[];
}

// あるエンティティにネストされたユーザーデータの個人情報を削除する
export const protectionPersonalInfo = (entity: IProtectionPersonalInfoProps) => {
  delete entity.user.id;
  delete entity.user.password;
  delete entity.user.email;
  delete entity.user.createdAt;
  delete entity.user.updatedAt;

  if (entity.likes.length) {
    const result = entity.likes.map((user) => {
      return { id: user.id, name: user.name };
    });
    entity.likes = result;
  }

  return entity;
};
