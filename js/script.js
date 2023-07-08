// 메뉴 이미지 src 변환

var leftMenuImg = document.querySelector('.left_menu_img');
var rightMenuImg = document.querySelector('.right_menu_img');
var limg = document.getElementById("limg");
var rimg = document.getElementById("rimg");

function ChnImgOver(){
    limg.src = "assets/img/crank2.jpg";
}

function ChnImgOut(){
    limg.src = "assets/img/crank1.png";
}

leftMenuImg.addEventListener('mouseover', function() {
    ChnImgOver();
});

leftMenuImg.addEventListener('mouseout', function() {
    ChnImgOut();
});


// 확인
console.log(leftMenuImg);
console.log(img.src);
console.log('leftMenuImg');

// 메뉴 객체
var menuImg;
var menuScript;

var menu = {
    "img" : menuImg,
    "script" : menuScript
};