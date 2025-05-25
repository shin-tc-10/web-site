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
});