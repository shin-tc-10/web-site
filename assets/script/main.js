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
    $('.faq__accordion-trigger').each(function() {
        // $(this).on('click', function() {
            const $button = $(this);
            const $content = $button.next();
            const isExpanded = $button.attr('aria-expanded') === 'true';
            $button.attr('aria-expanded', !isExpanded);
            $content.toggleClass('open');
        // });
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