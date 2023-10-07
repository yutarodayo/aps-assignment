
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

// drawer
$(".js-hamburger").on("click", function (e) {
    e.preventDefault();
    $(".js-hamburger").toggleClass("is-active");
    $(".header").toggleClass("is-active");
    $(".sp-nav__wrapper").toggleClass("is-active");
    return false;
  });

  // /drawer

  //swiper
  const swiper = new Swiper(".swiper", {
    // 前後の矢印
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    loop: true,

    // スライドの表示枚数：768px未満の場合
  slidesPerView: 1.2,
  spaceBetween: 20,
  breakpoints: {
    450: {
      slidesPerView: 1.5,
    },

    // スライドの表示枚数：768px以上の場合
    600: {
      slidesPerView: 2,
    },
    
    750: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    //スライド間の余白を指定（px）。
    // CSSで margin を付けるとスライドの位置がずれていくことがあるため、こちらで指定するのが推奨。
    },
    
    1250: {
      slidesPerView: 3,
      spaceBetween: 40,
    },

    1440: {
      slidesPerView: 3.4,
      spaceBetween: 40,
    },

  },

  });

  // /swiper


  /*===================================================
  to top + スクロール検知
  ===================================================*/
// $(window).on("scroll", function() {
//   // トップから100px以上スクロールしたら
//   if (100 < $(this).scrollTop()) {
//     // is-showクラスをつける
//  $('.to_top').addClass( 'is_show' );
//   } else {
//     // 100pxを下回ったらis-showクラスを削除
//   $('.to_top').removeClass( 'is_show' );
//   }
// });
// ページトップボタン
$(function () {
  const to_top = $("#to_top");
  to_top.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      to_top.fadeIn();
    } else {
      to_top.fadeOut();
    }
  });
  to_top.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
  // フッター手前でストップ
  $(window).on("scroll", function () {
    let scrollHeight = $(document).height();
    let scrollPosition = $(window).height() + $(window).scrollTop();
    let footHeight = $("footer").innerHeight();
    if (scrollHeight - scrollPosition <= footHeight) {
 // ページトップボタンがフッター手前に来たらpositionとfixedからabsoluteに変更
      $("#to_top").css({
        position: "absolute",
        bottom: footHeight + 15,
      });
    } else {
      $("#to_top").css({
        position: "fixed",
        bottom: "15px",
      });
    }
  });
});

/*===================================================
/to top + スクロール検知
===================================================*/

/*===================================================
背景色⇒表示
===================================================*/
//要素の取得とスピードの設定
var box = $('.colorbox'),
    speed = 700;  
 
//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;
 
    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
　　　　　$(this).delay(200).animate({'width':'100%'},speed,function(){
                   image.css('opacity','1');
                   $(this).css({'left':'0' , 'right':'auto'});
                   $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
     });
});

var box = $('.colorbox_right'),
    speed = 700;  
 
//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;
 
    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
　　　　　$(this).delay(200).animate({'width':'100%'},speed,function(){
                   image.css('opacity','1');
                   $(this).css({'right':'0' , 'left':'auto'});
                   $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
     });
});


var box = $('.colorbox_top'),
    speed = 700;  
 
//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;
 
    image.css('opacity','0');
    color.css('height','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
　　　　　$(this).delay(200).animate({'height':'100%'},speed,function(){
                   image.css('opacity','1');
                   $(this).css({'bottom':'0' , 'top':'auto'});
                   $(this).animate({'height':'0%'},speed);
                })
            counter = 1;
          }
     });
});


/*===================================================
/背景色⇒表示
===================================================*/

});
