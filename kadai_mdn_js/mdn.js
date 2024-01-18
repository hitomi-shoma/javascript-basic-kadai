const today = new Date();
// 定義
const date = () => {
  console.log(today.getFullYear() + "年");
  console.log((today.getMonth() + 1) + "月");
  console.log(today.getDate() + "日");
}
// 呼び出し・出力
date();