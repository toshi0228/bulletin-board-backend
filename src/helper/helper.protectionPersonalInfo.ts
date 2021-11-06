import { IUserEntityType } from "../modules/user/user.type";

interface IProtectionPersonalInfoProps {
  user: IUserEntityType;
  liked?: Partial<IUserEntityType>[];
}

// あるエンティティにネストされたユーザーデータの個人情報を削除する
export const protectionPersonalInfo = (entity: IProtectionPersonalInfoProps) => {
  delete entity.user.id;
  delete entity.user.password;
  delete entity.user.email;
  delete entity.user.createdAt;
  delete entity.user.updatedAt;

  if (entity.liked.length) {
    const result = entity.liked.map((user) => {
      return { id: user.id, name: user.name };
    });
    entity.liked = result;
  }

  return entity;
};
