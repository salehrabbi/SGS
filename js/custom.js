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

//Text of those video form=======

var $title = ["2D Animation", "3D Animation", "Whiteboard"];
var $day = ["7", "8", "9"];
var $minute = ["0 - 1 minute", "0 - 2 minute", "0 - 3 minute"];
var $price = ["50000", "60000", "70000"];

//Class of those video form=======
var $class = [".video-detailes2 h3", ".video-detailes2 .day", ".video-detailes2 .minute", ".video-detailes2 .price"];

//change the text by use dropdown =================



$('.video-select-type').on('change', function () {
    var value = $(this).find(':selected').text();
    if (value == $title[0]) {
        $('.type-button-link-1').addClass("current");
        $('.type-button-link-2').removeClass("current");
        $('.type-button-link-3').removeClass("current");
        $($class[0]).text($title[0]);
        $($class[1]).text($day[0]);
        $($class[2]).text($minute[0]);
        $($class[3]).text($price[0]);
    } else if (value == $title[1]) {
        $('.type-button-link-1').removeClass("current");
        $('.type-button-link-2').addClass("current");
        $('.type-button-link-3').removeClass("current");
        $($class[0]).text($title[1]);
        $($class[1]).text($day[1]);
        $($class[2]).text($minute[1]);
        $($class[3]).text($price[1]);
    } else if (value == $title[2]) {
        $('.type-button-link-1').removeClass("current");
        $('.type-button-link-2').removeClass("current");
        $('.type-button-link-3').addClass("current");
        $($class[0]).text($title[2]);
        $($class[1]).text($day[2]);
        $($class[2]).text($minute[2]);
        $($class[3]).text($price[2]);
    }
});


//Text change of price and time==================
$($class[0]).text($title[0]);
$($class[1]).text($day[0]);
$($class[2]).text($minute[0]);
$($class[3]).text($price[0]);


$(".type-button-link-1").click(function () {
    $($class[0]).text($title[0]);
    $($class[1]).text($day[0]);
    $($class[2]).text($minute[0]);
    $($class[3]).text($price[0]);
});

$(".type-button-link-2").click(function () {
    $($class[0]).text($title[1]);
    $($class[1]).text($day[1]);
    $($class[2]).text($minute[1]);
    $($class[3]).text($price[1]);
});

$(".type-button-link-3").click(function () {
    $($class[0]).text($title[2]);
    $($class[1]).text($day[2]);
    $($class[2]).text($minute[2]);
    $($class[3]).text($price[2]);
});












//Text of those ecommerce form=======
var $title2 = ["Online Store", "MarketPlace"];
var $day2 = ["6", "8"];
var $minute2 = ["YES", "NO"];
var $price2 = ["50000", "60000"];

//Class of those ecommerce form=======
var $class2 = [".ecommerce-detailes h3", ".ecommerce-detailes .day", ".ecommerce-detailes .minute", ".ecommerce-detailes .price"];

//change the text by use dropdown =================



$('select').on('change', function () {
    var value = $(this).find(':selected').text();
    if (value == $title2[0]) {
        $('.type-button-link-1').addClass("current");
        $('.type-button-link-2').removeClass("current");
        $('.type-button-link-3').removeClass("current");
        $($class2[0]).text($title2[0]);
        $($class2[1]).text($day2[0]);
        $($class2[2]).text($minute2[0]);
        $($class2[3]).text($price2[0]);
    } else if (value == $title2[1]) {
        $('.type-button-link-1').removeClass("current");
        $('.type-button-link-2').addClass("current");
        $('.type-button-link-3').removeClass("current");
        $($class2[0]).text($title2[1]);
        $($class2[1]).text($day2[1]);
        $($class2[2]).text($minute2[1]);
        $($class2[3]).text($price2[1]);
    }
});


//Text change of price and time==================
$($class2[0]).text($title2[0]);
$($class2[1]).text($day2[0]);
$($class2[2]).text($minute2[0]);
$($class2[3]).text($price2[0]);

$(".type-button-link-1").click(function () {
    $($class2[0]).text($title2[0]);
    $($class2[1]).text($day2[0]);
    $($class2[2]).text($minute2[0]);
    $($class2[3]).text($price2[0]);
});

$(".type-button-link-2").click(function () {
    $($class2[0]).text($title2[1]);
    $($class2[1]).text($day2[1]);
    $($class2[2]).text($minute2[1]);
    $($class2[3]).text($price2[1]);
});








//Text of those ecommerce form=======
var $title3 = ["Android", "iOS", "Android & iOS"];
var $day3 = ["6", "8", "9"];
var $minute3 = ["YES", "NO", "YES"];
var $price3 = ["50000", "60000", "70000"];

//Class of those ecommerce form=======
var $class3 = [".app-detailes h3", ".app-detailes .day", ".app-detailes .minute", ".app-detailes .price"];

//change the text by use dropdown =================



$('select').on('change', function () {
    var value = $(this).find(':selected').text();
    if (value == $title3[0]) {
        $('.type-button-link-1').addClass("current");
        $('.type-button-link-2').removeClass("current");
        $('.type-button-link-3').removeClass("current");
        $($class3[0]).text($title3[0]);
        $($class3[1]).text($day3[0]);
        $($class3[2]).text($minute3[0]);
        $($class3[3]).text($price3[0]);
    } else if (value == $title3[1]) {
        $('.type-button-link-1').removeClass("current");
        $('.type-button-link-2').addClass("current");
        $('.type-button-link-3').removeClass("current");
        $($class3[0]).text($title3[1]);
        $($class3[1]).text($day3[1]);
        $($class3[2]).text($minute3[1]);
        $($class3[3]).text($price3[1]);
    } else if (value == $title3[2]) {
        $('.type-button-link-1').removeClass("current");
        $('.type-button-link-2').removeClass("current");
        $('.type-button-link-3').addClass("current");
        $($class3[0]).text($title3[2]);
        $($class3[1]).text($day3[2]);
        $($class3[2]).text($minute3[2]);
        $($class3[3]).text($price3[2]);
    }
});


//Text change of price and time==================
$($class3[0]).text($title3[0]);
$($class3[1]).text($day3[0]);
$($class3[2]).text($minute3[0]);
$($class3[3]).text($price3[0]);

$(".type-button-link-1").click(function () {
    $($class3[0]).text($title3[0]);
    $($class3[1]).text($day3[0]);
    $($class3[2]).text($minute3[0]);
    $($class3[3]).text($price3[0]);
});

$(".type-button-link-2").click(function () {
    $($class3[0]).text($title3[1]);
    $($class3[1]).text($day3[1]);
    $($class3[2]).text($minute3[1]);
    $($class3[3]).text($price3[1]);
});

$(".type-button-link-3").click(function () {
    $($class3[0]).text($title3[2]);
    $($class3[1]).text($day3[2]);
    $($class3[2]).text($minute3[2]);
    $($class3[3]).text($price3[2]);
});
