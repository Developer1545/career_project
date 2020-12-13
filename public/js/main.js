var headerText = 'Computer Programmer';
var interest = "Why I'm interested:";
var functionText = "class";
var functionName = " author {";
var theSecondPart = "constructor";
var constructorsUse = "(name, school) {";
var thisPartOne = "this";
var thisPartTwo = ".name = name;";
var thisPartThree = "this";
var thisPartFour = ".school = school;";
var newPerson = "let";
var salary = "$84,550";
var newPerson2 = " person = ";
var newPerson3 = "new";
var newPerson4 = " author();";
var speed = 50;
var i = 0;
var j = 0;
var k = 0;
var h = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var s = 0;
var g = 0;
var f = 0;
var t = 0;
var v = 0;
var y = 0;
var z = 0;

function writeHeader() {
    if (i < headerText.length) {
        $('#headerText').append(headerText.charAt(i));
        i++;
        setTimeout(writeHeader, speed);
    }
    setTimeout(writeFunction, 1000);
}

function writeFunction() {
    speed = 200;
    if ( j < functionText.length) {
        $('#function').append(functionText.charAt(j));
        j++;
        setTimeout(writeFunction, speed);
    }
    setTimeout(writeName, 450);
}

function writeName() {
    $('#function').append('<text id="theName" style="color:grey"></text>');

    speed = 200;
    if ( k < functionName.length) {
        $('#theName').append(functionName.charAt(k));
        k++;
        setTimeout(writeName, speed);
    }
    setTimeout(writeConst, 550);
}
function writeConst() {
    speed = 200;
    if ( h < theSecondPart.length) {
        $('#theConstructor').append(theSecondPart.charAt(h));
        h++;
        setTimeout(writeConst, speed);
    }
    setTimeout(writeConstructors, 550);

}
function writeConstructors(){
    speed = 200;
    $('#theConstructor').append('<text id="otherDetails" style="color:grey"></text>');
    if ( a < constructorsUse.length) {
        $('#otherDetails').append(constructorsUse.charAt(a));
        a++;
        setTimeout(writeConstructors, speed);
    }
    setTimeout(writeThis1, 550);
}
function writeThis1(){
    speed = 200;
    //$('#theConstructor').append('<text id="otherDetails" style="color:grey"></text>');
    if ( b < thisPartOne.length) {
        $('#thisdetails').append(thisPartOne.charAt(b));
        b++;
        setTimeout(writeThis1, speed);
    }
    setTimeout(writeThis2, 550);
}
function writeThis2(){
    speed = 1000;
    $('#thisdetails').append('<text id="otherDetailsThis" style="color:grey"></text>');
    if ( c < thisPartTwo.length) {
        $('#otherDetailsThis').append(thisPartTwo.charAt(c));
        c++;
        setTimeout(writeThis1, speed);
    }
    setTimeout(writeThis3,1000);
}
function writeThis3(){
    speed = 200;
    //$('#theConstructor').append('<text id="otherDetails" style="color:grey"></text>');
    if ( g < thisPartThree.length) {
        $('#thisdetails2').append(thisPartThree.charAt(g));
        g++;
        setTimeout(writeThis3, speed);
    }
    setTimeout(writeThis4, 550);
}
function writeThis4(){
    speed = 1000;
    $('#thisdetails2').append('<text id="otherDetailsThis1" style="color:grey"></text>');
    if ( f < thisPartFour.length) {
        $('#otherDetailsThis1').append(thisPartFour.charAt(f));
        f++;
        setTimeout(writeThis4, speed);
    }
    setTimeout(writebracket1,1000);
}
var count = 0;
function writebracket1(){
   count += 1;
    if(count == 2) {
        $('#bracket2').fadeIn();

    } else {
        $('#bracket1').fadeIn();

    }
    setTimeout(newPersonInit, 1000);
}
function newPersonInit() {
    speed = 1000;
    //$('#thisdetails2').append('<text id="otherDetailsThis1" style="color:grey"></text>');
    if ( z < newPerson.length) {
        $('#initNewPerson').append(newPerson.charAt(z));
        z++;
        setTimeout(newPersonInit, speed);
    }
    setTimeout(newPersonInit2,1000);
}
function newPersonInit2() {
    speed = 1000;
    $('#initNewPerson').append('<text id="newPersonOther" style="color:grey"></text>');
    if ( y < newPerson2.length) {
        $('#newPersonOther').append(newPerson2.charAt(y));
        y++;
        setTimeout(newPersonInit2, speed);
    }
    setTimeout(newPersonInit3,1000);
}
function newPersonInit3() {
    speed = 1000;
    $('#initNewPerson').append('<text id="backtoblue" style="color:blue"></text>');
    if ( v < newPerson2.length) {
        $('#backtoblue').append(newPerson3.charAt(v));
        v++;
        setTimeout(newPersonInit3, speed);
    }
    setTimeout(newPersonInit4,1000);
}
function newPersonInit4() {
    speed = 1000;
    $('#initNewPerson').append('<text id="finalSegment" style="color:grey"></text>');
    if ( t < newPerson4.length) {
        $('#finalSegment').append(newPerson4.charAt(t));
        t++;
        setTimeout(newPersonInit4, speed);
    }
    //setTimeout(newPersonInit3,1000);
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