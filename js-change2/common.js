//押したボタンのcolorをboxの背景色にする
function changeColor(color){
  document.querySelector('.box').style.backgroundColor = color;
}



//カウンタの初期値を設定
var countUpValue = 0;

//カウントアップする関数 countUp の定義
function countUp(){
    //カウンタに 1 を加算
    countUpValue++;
    //カウンタの値を HTML 内の counter に表示
    document.getElementById("counter").innerHTML=countUpValue;
}

//更新ボタン設定
function Button(){
  location.reload();
}
