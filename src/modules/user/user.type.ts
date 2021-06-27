export interface IUserEntityType {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

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
