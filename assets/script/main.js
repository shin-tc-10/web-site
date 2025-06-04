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
    $('.faq__accordion').on('click', function () {
        $(this).find('.faq__accordion-content').slideToggle(50);
        $(this).toggleClass('faq__accordion-open');
    });

    // スワイパー
    const swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        spaceBetween: 20,
    });
});