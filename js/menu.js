$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header__lang').click(function(event) {
        $('.header__lang__item').toggleClass('active');
    });

    $('.header__menu').click(function(event) {
        $('.header__menu,.header__menu__link').toggleClass('active');
    });

});