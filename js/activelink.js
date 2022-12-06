$(".header__menu__link").on("click", function() {
    $(".header__menu__link").removeClass("active");
    $(this).addClass("active");
});