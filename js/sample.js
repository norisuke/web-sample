var images = ["img0.jpg", "img1.jpg", "img2.jpg",
"img3.jpg"];
// イメージをランダムに取り出す
var tImg = images[Math.floor(Math.random() * 4)];		
// イメージエレメントを取得
var myImage = document.getElementById("myImage");
// src属性にイメージを設定
myImage.src = "images/" + tImg;