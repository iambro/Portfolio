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
$('.mobile-nav-icon').click(function() {
    var nav = $('.main-nav');
    var icon = $('.mobile-nav-icon i');
        
    nav.slideToggle(200);
    if (icon.hasClass('ion-md-menu')) {
        icon.addClass('ion-md-close');
        icon.removeClass('ion-md-menu');
    } else {
        icon.addClass('ion-md-menu');
        icon.removeClass('ion-md-close');
    }
}); 
