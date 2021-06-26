export interface IUserType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginQueryType {
  email: string;
  password: string;
}

export interface IFindUserType {
  userId: number;
}
