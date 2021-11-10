// 日本時間に変換させる
export const convertJST = (): Date => {
  let date = new Date();
  date.setTime(date.getTime() + 1000 * 60 * 60 * 9); // JSTに変換
  return date;
};
