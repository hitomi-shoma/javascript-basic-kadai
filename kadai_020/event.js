// btnのIdの取得と定数への代入
const btn = document.getElementById('btn');

// ボタンがクリックされたら表示を変更
btn.addEventListener('click',() => {
const text = document.getElementById('text');
text.textContent ="ボタンがクリックされました";
console.log('text')
});