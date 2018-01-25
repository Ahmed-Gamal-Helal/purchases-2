$(function(){
    'use strict';
    $("nav-tabs ul li, ul.navbar-nav li").click(function (){
        $(this).addClass('active').siblings().removeClass('active');
    });
    // Button toggle
    $('.show-form').on('click', function() {
        $('.side-adv .form-side').toggle();
    });

    // Non-form
    $('#non-form').click(function(event){
        event.preventDefault();
        $('.non-form').toggle();
    });

    // Smooth Scrolling
    $('.aboutScroll').click(function () {
        $('html, body').animate({
            scrollTop: $('#aboutScroll').offset().top-40
        }, 1500);
    });
    $('.supportScroll').click(function () {
        $('html, body').animate({
            scrollTop: $('#supportScroll').offset().top-60
        }, 1500);
    });
});


  