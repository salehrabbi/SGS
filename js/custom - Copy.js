


//Text of those ecommerce form=======
var $title2 = ["Online Store", "MarketPlace"];
var $day2 = ["6", "8", "9"];
var $minute2 = ["YES", "NO", "YES"];
var $price2 = ["50000", "60000", "70000"];

//Class of those ecommerce form=======
var $class2 = [".ecommerce-detailes h3", ".ecommerce-detailes .day", ".ecommerce-detailes .minute", ".ecommerce-detailes .price"];

//change the text by use dropdown =================





var $title = ["2D Animation", "3D Animation", "Whiteboard"];
var $day = ["7", "8", "9"];
var $minute = ["0 - 1 minute", "0 - 2 minute", "0 - 3 minute"];
var $price = ["50000", "60000", "70000"];

//Class of those video form=======
var $class = [".detailes-video h3", ".detailes-video .day", ".detailes-video .minute", ".detailes-video .price"];

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