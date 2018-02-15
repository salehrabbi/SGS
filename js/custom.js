$(document).ready(function () {

    // SlickNavMobileMenu
    $(".main-menu ul#main-menu").slicknav({
        allowParentLinks: true,
        prependTo: '.sgs-responsive-menu',
        label: ''
    });


});

jQuery(function () {
    jQuery("a.play").YouTubePopUp({
        autoplay: 1
    }); // Disable autoplay
});

$(document).ready(function () {
    $(".input").focus(function () {
        $(this).parent().addClass("focus")
    });
    $(".input").blur(function () {
        tmpval = $(this).val();
        if (tmpval == '') {
            $(this).parent().removeClass("focus")
        }
    });
});
$(document).ready(function () {
    $(".submit").hover(function () {
        $(this).parent().toggleClass("focus")
    });
});

$(document).ready(function () {
    $(".select-type").hover(function () {
        $(this).toggleClass("focus")
    });
});


//Active button of the title================

$('.type-button-link-1').click(function () {
    $(this).addClass("current");
    $('.type-button-link-2').removeClass("current");
    $('.type-button-link-3').removeClass("current");
});

$('.type-button-link-2').click(function () {
    $(this).addClass("current");
    $('.type-button-link-1').removeClass("current");
    $('.type-button-link-3').removeClass("current");
});

$('.type-button-link-3').click(function () {
    $(this).addClass("current");
    $('.type-button-link-1').removeClass("current");
    $('.type-button-link-2').removeClass("current");
});
//Change the dropdown value===========

$(".type-button-link-1").click(function () {
    $('.video-select-type').addClass("active-1")
    $('.video-select-type').removeClass("active-2")
    $('.test').removeClass("active-3")
    $('.active-1').val("the_title_value1");
});
$(".type-button-link-2").click(function () {
    $('.video-select-type').removeClass("active-1")
    $('.video-select-type').addClass("active-2")
    $('.test').removeClass("active-3")
    $('.active-2').val("the_title_value2");
});
$(".type-button-link-3").click(function () {
    $('.video-select-type').removeClass("active-1")
    $('.video-select-type').removeClass("active-2")
    $('.video-select-type').addClass("active-3")
    $('.active-3').val("the_title_value3");
});




//Text of those ecommerce form=======
var $title3 = [".title", ".title1", ".title2", ".title3"];
var $day3 = [".day", ".day1", ".day2", ".day3"];
var $minute3 = [".minute", ".minute1", ".minute2", ".minute3"];
var $price3 = [".price", ".price1", ".price2", ".price3"];



//change the text by use dropdown =================



$('select').on('change', function () {
    var value = $(this).find(':selected').val();
    if (value == 'the_title_value1') {
        $('.type-button-link-1').addClass("current");
        $('.type-button-link-2').removeClass("current");
        $('.type-button-link-3').removeClass("current");
        $($title3[0]).html($($title3[1]).text());
        $($day3[0]).html($($day3[1]).text());
        $($minute3[0]).html($($minute3[1]).text());
        $($price3[0]).html($($price3[1]).text());
    } else if (value == 'the_title_value2') {
        $('.type-button-link-1').removeClass("current");
        $('.type-button-link-2').addClass("current");
        $('.type-button-link-3').removeClass("current");
        $($title3[0]).html($($title3[2]).text());
        $($day3[0]).html($($day3[2]).text());
        $($minute3[0]).html($($minute3[2]).text());
        $($price3[0]).html($($price3[2]).text());
    } else if (value == 'the_title_value3') {
        $('.type-button-link-1').removeClass("current");
        $('.type-button-link-2').removeClass("current");
        $('.type-button-link-3').addClass("current");
         $($title3[0]).html($($title3[3]).text());
        $($day3[0]).html($($day3[3]).text());
        $($minute3[0]).html($($minute3[3]).text());
        $($price3[0]).html($($price3[3]).text());
    }
});


//Text change of price and time==================
$($title3[0]).html($($title3[1]).text());
$($day3[0]).html($($day3[1]).text());
$($minute3[0]).html($($minute3[1]).text());
$($price3[0]).html($($price3[1]).text());

$(document).ready(function () {
    $(".type-button-link-1").click(function () {
        $($title3[0]).html($($title3[1]).text());
        $($day3[0]).html($($day3[1]).text());
        $($minute3[0]).html($($minute3[1]).text());
        $($price3[0]).html($($price3[1]).text());
    });
    $(".type-button-link-2").click(function () {
        $($title3[0]).html($($title3[2]).text());
        $($day3[0]).html($($day3[2]).text());
        $($minute3[0]).html($($minute3[2]).text());
        $($price3[0]).html($($price3[2]).text());
    });
    $(".type-button-link-3").click(function () {
        $($title3[0]).html($($title3[3]).text());
        $($day3[0]).html($($day3[3]).text());
        $($minute3[0]).html($($minute3[3]).text());
        $($price3[0]).html($($price3[3]).text());
    });
});
