$(document).ready(function () {
    // スマホハンバーガーメニュークリックイベント
    $('.header__hamburger').click(function () {
        // ハンバーガーメニューを表示する
        $('.header__sp-nav').toggleClass('header__active');
    });
    // スマホハンバーガーメニュー内リンククリックイベント
    $('.sp-nav__item').click(() => {
        // ハンバーガーメニューを非表示にする
        $('.header__sp-nav').removeClass('header__active');
    })
    // よくあるご質問
 $('.faq__accordion-q').on('click', function () {
  const $trigger = $(this);
  const $icon = $trigger.find('.faq__accordion-icon');
  const $content = $trigger.next();
  const isExpanded = $trigger.attr('aria-expanded') === 'true';

  // アコーディオン切り替え
  $trigger.attr('aria-expanded', !isExpanded);
  $content.toggleClass('open');

  // 画像とサイズクラスの切り替え
  if (isExpanded) {
    // 閉じる → プラス画像に
    $icon
      .attr('src', '/assets/image/faq/faq_plus_sp.png')
      .removeClass('faq__icon--minus')
      .addClass('faq__icon--plus');
  } else {
    // 開く → マイナス画像に
    $icon
      .attr('src', '/assets/image/faq/faq_minus_sp.png')
      .removeClass('faq__icon--plus')
      .addClass('faq__icon--minus');
  }
});



    const swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        spaceBetween: 20,
    });

});