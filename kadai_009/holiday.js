// 文字を定数で宣言・値の代入
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];
// 変数で初期値の設定
let index = 0;

// while文:勤労感謝の日になるまで繰り返す
while (holidays[index] !=='勤労感謝の日'){
    console.log(holidays[index]);
    index++;
}
// for文
for (let i =0; i<16; i++){
    console.log(holidays[i]);
}