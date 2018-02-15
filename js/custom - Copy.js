


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
