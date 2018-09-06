//*** Scroll To ***//

jQuery(function($) {
    
    $.scrollTo(0);
    
    $('#A-link').click(function() { $.scrollTo($('#aboutme'), 500); })
    $('#B-link').click(function() { $.scrollTo($('#technologies'), 500); })
    $('#C-link').click(function() { $.scrollTo($('#projects'), 500); })
    $('#D-link').click(function() { $.scrollTo($('#contact'), 500); })   
    $('.scrollup').click(function() { $.scrollTo($('body'), 750); })   
}   
);

$(window).scroll(function() {
    
    if($(this).scrollTop()>300) $('.scrollup').fadeIn();
    else $('.scrollup').fadeOut();
}
);

$(document).ready(function() {
    var NavY = $('.name-box').offset().top;
    var stickyNav = function() {
        var ScrollY = $(window).scrollTop();
        
        if (ScrollY > NavY) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    };
    stickyNav();
    $(window).scroll(function(){
        stickyNav();
    });
});


/* Mobile navigation */
$('.mobile-nav-icon, .main-nav a').click(function(element){
        var nav = $('.main-nav');
        var icon = $('.mobile-nav-icon i');

        //Gets the class name of the element that triggered the event
        var clicked = element.target.className;

        //Opens and closes the menu
        if ($(window).width() < 768){
            nav.slideToggle(200);
        }

        //Changes icon states of the menu button
        if (icon.hasClass('ion-md-menu')) {
            icon.addClass('ion-md-close');
            icon.removeClass('ion-md-menu');
        } else {
            icon.addClass('ion-md-menu');
            icon.removeClass('ion-md-close');
        }
    });


    $(window).resize(function(){
        var nav = $('.main-nav');
        var icon = $('.mobile-nav-icon i');

        if ($(window).width() > 767){
            nav.css("display", "flex");
            icon.addClass('ion-md-close');
            icon.removeClass('ion-md-menu');
        } else {
            nav.css("display", "none");
            icon.addClass('ion-md-menu');
            icon.removeClass('ion-md-close');
        }

    });