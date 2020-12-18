
var headerText = 'Computer Programmer';

var speed = 50;
var i = 0;

function writeHeader() {
    if (i < headerText.length) {
        $('#headerText').append(headerText.charAt(i));
        i++;
        setTimeout(writeHeader, speed);
    }
    setTimeout(writeFunction, 1000);
}

$('#details').fadeIn(3500);

/*
$(window).scroll(function(){
    console.log($(window).scrollTop());
    var scroll = $(window).scrollTop();
    if(scroll >= 2730) {
        console.log("Element1");
    }
    $(".section1").css("opacity", 1 - $(window).scrollTop() / 780);
    $(".section2").css("opacity", 2.75 - $(window).scrollTop() / 780);
    $(".section3").css("opacity", 3.75 - $(window).scrollTop() / 780);
    $(".section4").css("opacity", 5 - $(window).scrollTop() / 780);
    $(".section5").css("opacity", 6.25 - $(window).scrollTop() / 780);
    $(".section6").css("opacity", 7.25 - $(window).scrollTop() / 780);
    $(".section7").css("opacity", 8.25 - $(window).scrollTop() / 780);

  });
*/