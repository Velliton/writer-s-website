$(".header__menu__link").on("click", function() {
    $(".header__menu__link").removeClass("active");
    $(this).addClass("active");
});

$(".header__lang__item").on("click", function() {
    $(".header__lang__item").removeClass("active");
    $(this).addClass("active");
});