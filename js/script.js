$(document).ready(function() {
    $('.slider').slick({
        fade: true,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: true,
        speed: 2000,
        cssEase: 'linear',
        asNavFor: '.description__slider',
        appendArrows: $('.arrows'),
        appendDots: $('.dots'),
        mobileFirst: true
    });

    $('.description__slider').slick({
        arrows: false,
        dots: false,
        vertical: true,
        slidesToShow: 1,
        verticalSwiping: true,
        asNavFor: '.slider',
        adaptiveHeight: true
    });

})