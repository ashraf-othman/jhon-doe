/*global $, jQuery, window, document*/
$(document).ready(function () {
    "use strict";
    $('.carousel').carousel({
        interval: 5000
    });

    // Show Color Option Div When Click A Gear
    $('.gear-check').on('click', function () {
        $('.color-option').fadeToggle();
    });

    // Change Theme Color On Click
    var colorLi = $('.color-option ul li'),
        scrollButton = $('#scroll-top');
    colorLi
        .eq(0).css('backgroundColor', '#E41b17').end()
        .eq(1).css('backgroundColor', '#e89418').end()
        .eq(2).css('backgroundColor', '#33b9ad').end()
        .eq(3).css('backgroundColor', '#3f51b5');
    
    colorLi.click(function () {
        $('link[href*="theme"]').attr("href", $(this).attr("datavalue"));
    });

    // Start Scroll Top 
    // console.log(scrollButton);
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });
    // click button scroll Top
    scrollButton.click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
    });
});

// Screen Looding

$(window).load(function () {
    "use strict";
	$('body').css('overflow', 'auto');
	$('.overlayloading .spinner').fadeOut(2000,
        function () {
            $(this).parent().fadeOut(3000,
				function () {
					$(this).remove();
				});
		});
});