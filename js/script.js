//==========
//ナビメニュー
//==========
    var navContainerWidth = $(".navContainer").outerWidth();
    $(".navContainer").css("left",-navContainerWidth);
$(".button").on("click",function(){
  //非表示
  if($(this).hasClass("active")){
    $(".button-top").css("animation","button-top-back 1s forwards");
    $(".button-bottom").css("animation"," button-bottom-back 1s forwards");
    $(this).removeClass("active");
    $(".navContainer").fadeOut(400);
  }
  //表示
  else{
    $(".button-top").css("animation","button-top 1s forwards");
    $(".button-bottom").css("animation"," button-bottom 1s forwards");
    $(this).addClass("active");
    $(".navContainer").fadeIn(500).animate({"left":0},{duration:2000,queue:false})
  }
});

//=========
//スクロール
//=========
//ナビゲーションバー
$(".navbar a[href^='#']").on("click",function(){
  var speed = 2000;
  var href = $(this).attr("href");
  var position = $(href).offset().top;
  $("html,body").animate({scrollTop:position},"slow","swing");
});
//topへ戻る
$(".backButton").on("click",function(){
  $("html,body").animate({scrollTop:0},"fast","swing");
})


//=========
//canvas
//=========
var headerWidth = $("header").outerWidth();
var headerHeight = $("header").outerHeight();
$("canvas").css("width",headerWidth).css("height",headerHeight);




