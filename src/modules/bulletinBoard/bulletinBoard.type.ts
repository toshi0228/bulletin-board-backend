export interface bulletinBoardType {
  title: string;
  contents: string;
  userId: number;
}

export interface bulletinBoardCreateType {
  title: string;
  contents: string;
  userId: number;
}

export interface bulletinBoardEditType {
  id: string;
  title: string;
  contents: string;
  userId: number;
}
