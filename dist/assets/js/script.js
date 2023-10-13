"use strict";

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  /*===================================================
  loading-animation
  ===================================================*/
  var mainContent = $(".main-content");
  var loadingAnimation = $(".loading-animation__wrapper");
  var leftImage = $(".loading-animation__left");
  var rightImage = $(".loading-animation__right");
  var title = $(".loading__content");
  $(document).ready(function () {
    mainContent.css("display", "none");
    title.css("opacity", "1");
    /*===================================================
    
    ===================================================*/
    setTimeout(function () {
      title.css("opacity", "0");
    }, 1000);
    setTimeout(function () {
      leftImage.css("animation", "slideUpLeft 2s forwards");
      monitorLeftImageMovement();
    }, 2000);
    var initialOffset = $('.loading-animation__left').offset().top;
    function monitorLeftImageMovement() {
      var currentOffset = $('.loading-animation__left').offset().top;
      if (initialOffset - currentOffset >= 60) {
        $(".loading-animation__right").css("animation", "slideUpRight 2s forwards");
      } else {
        // 条件が満たされていない場合、次のアニメーションフレームで継続的にチェックします。
        requestAnimationFrame(monitorLeftImageMovement);
      }
    }

    // setTimeout(function() {
    //   rightImage.css("animation", "slideUpRight 2s forwards");
    // }, 2200);  // 1秒遅延で右画像のアニメーションを開始

    // フラッシュとタイトルのフェードイン後の処理

    setTimeout(function () {
      // アニメーション要素をフェードアウト
      loadingAnimation.fadeOut(1500);
    }, 5500);
    setTimeout(function () {
      // 通常ページのコンテンツをフェードイン
      mainContent.fadeIn(1000);
    }, 7000);
  });

  /*===================================================
  /loading-animation
  ===================================================*/

  /*===================================================
  drawer
  ===================================================*/
  $(".js-hamburger").on("click", function (e) {
    e.preventDefault();
    $(".js-hamburger").toggleClass("is-active");
    $(".header").toggleClass("is-active");
    $(".drawer__wrapper").toggleClass("is-active");
    $(".drawer__background").toggleClass("is-active");
    return false;
  });

  /*===================================================
  /drawer
  ===================================================*/

  /*===================================================
  swiper main-view
  ===================================================*/
  var mvswiper = new Swiper(".main-view__swiper", {
    loop: true,
    // スライドの表示枚数：768px未満の場合
    slidesPerView: 1,
    spaceBetween: 0
  });

  /*===================================================
  /swiper main-view
  ===================================================*/

  /*===================================================
  swiper__campaign
  ===================================================*/
  var swiper = new Swiper(".campaign__swiper", {
    // 前後の矢印
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    loop: true,
    // スライドの表示枚数：768px未満の場合
    slidesPerView: 1.2,
    spaceBetween: 20,
    breakpoints: {
      450: {
        slidesPerView: 1.5
      },
      // スライドの表示枚数：768px以上の場合
      600: {
        slidesPerView: 2
      },
      750: {
        slidesPerView: 2.5,
        spaceBetween: 40
        //スライド間の余白を指定（px）。
        // CSSで margin を付けるとスライドの位置がずれていくことがあるため、こちらで指定するのが推奨。
      },

      1250: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1440: {
        slidesPerView: 3.4,
        spaceBetween: 40
      }
    }
  });

  /*===================================================
  /swiper__campaign
  ===================================================*/

  /*===================================================
  to top + スクロール検知
  ===================================================*/

  $(function () {
    var to_top = $("#to_top");
    to_top.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        to_top.fadeIn();
      } else {
        to_top.fadeOut();
      }
    });
    to_top.click(function () {
      $("body,html").animate({
        scrollTop: 0
      }, 500);
      return false;
    });
    // フッター手前でストップ
    $(window).on("scroll", function () {
      var scrollHeight = $(document).height();
      var scrollPosition = $(window).height() + $(window).scrollTop();
      var footHeight = $("footer").innerHeight();
      if (scrollHeight - scrollPosition <= footHeight) {
        // ページトップボタンがフッター手前に来たらpositionとfixedからabsoluteに変更
        $("#to_top").css({
          position: "absolute",
          bottom: footHeight + 15
        });
      } else {
        $("#to_top").css({
          position: "fixed",
          bottom: "15px"
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
  //右から左

  //要素の取得とスピードの設定
  var boxtoleft = $('.colorbox'),
    speed = 700;

  //.colorboxの付いた全ての要素に対して下記の処理を行う
  boxtoleft.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($('.color')),
      image = $(this).find('img');
    var counter = 0;
    image.css('opacity', '0');
    color.css('width', '0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function () {
      if (counter == 0) {
        $(this).delay(200).animate({
          'width': '100%'
        }, speed, function () {
          image.css('opacity', '1');
          $(this).css({
            'left': '0',
            'right': 'auto'
          });
          $(this).animate({
            'width': '0%'
          }, speed);
        });
        counter = 1;
      }
    });
  });

  //左から右

  var boxtoright = $('.colorbox_right'),
    speed = 700;

  //.colorboxの付いた全ての要素に対して下記の処理を行う
  boxtoright.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($('.color')),
      image = $(this).find('img');
    var counter = 0;
    image.css('opacity', '0');
    color.css('width', '0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function () {
      if (counter == 0) {
        $(this).delay(200).animate({
          'width': '100%'
        }, speed, function () {
          image.css('opacity', '1');
          $(this).css({
            'right': '0',
            'left': 'auto'
          });
          $(this).animate({
            'width': '0%'
          }, speed);
        });
        counter = 1;
      }
    });
  });

  //上から下

  var boxtobottom = $('.colorbox_top'),
    speed = 700;

  //.colorboxの付いた全ての要素に対して下記の処理を行う
  boxtobottom.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($('.color')),
      image = $(this).find('img');
    var counter = 0;
    image.css('opacity', '0');
    color.css('height', '0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function () {
      if (counter == 0) {
        $(this).delay(200).animate({
          'height': '100%'
        }, speed, function () {
          image.css('opacity', '1');
          $(this).css({
            'bottom': '0',
            'top': 'auto'
          });
          $(this).animate({
            'height': '0%'
          }, speed);
        });
        counter = 1;
      }
    });
  });

  /*===================================================
  /背景色⇒表示
  ===================================================*/
});