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

//Display block form ================
$(".type-button a").click(function () {
    $('.video-form').addClass("show-form")
});




//change the text by use dropdown =================



$('select').on('change', function () {
    var value = $(this).find(':selected').text();
    if (value == '2D Animation') {
        $(this).parent().closest('.row').addClass('primary');
        $(this).parent().closest('.row').removeClass('secondary optional');
        $(".detailes-video h3").text("2D Animation");
        $(".detailes-video .day").text("7");
        $(".detailes-video .minute").text("0 - 1 minute");
        $(".detailes-video .price").text("50,000");
    } else if (value == '3D Animation') {
        $(this).parent().closest('.row').addClass('secondary');
        $(this).parent().closest('.row').removeClass('primary optional');
        $(".detailes-video h3").text("3D Animation");
        $(".detailes-video .day").text("8");
        $(".detailes-video .minute").text("0 - 2 minute");
        $(".detailes-video .price").text("60,000");
    } else if (value == 'Whiteboard') {
        $(this).parent().closest('.row').addClass('optional');
        $(this).parent().closest('.row').removeClass('primary secondary');
        $(".detailes-video h3").text("Whiteboard");
        $(".detailes-video .day").text("9");
        $(".detailes-video .minute").text("0 - 3 minute");
        $(".detailes-video .price").text("70,000");
    }
});








//Text change of price and time==================

$(".type-button-link-1").click(function () {
    $(".detailes-video h3").text("2D Animation");
    $(".detailes-video .day").text("7");
    $(".detailes-video .minute").text("0 - 1 minute");
    $(".detailes-video .price").text("50,000");
});

$(".type-button-link-2").click(function () {
    $(".detailes-video h3").text("3D Animation");
    $(".detailes-video .day").text("8");
    $(".detailes-video .minute").text("0 - 2 minute");
    $(".detailes-video .price").text("60,000");
});

$(".type-button-link-3").click(function () {
    $(".detailes-video h3").text("Whiteboard");
    $(".detailes-video .day").text("9");
    $(".detailes-video .minute").text("0 - 3 minute");
    $(".detailes-video .price").text("70,000");
});
