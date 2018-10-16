$(document).ready(function(){
    $('.drop_trigger1').click(function () {
        $('#drop1').toggle(555);
    });
    $('.drop_trigger2').click(function () {
        $('#drop2').toggle(555);
    });
    $('.slide_drop_trigger1').click(function () {
        $('#slide_drop1').toggle(555);
    });
    $('.slide_drop_trigger2').click(function () {
        $('#slide_drop2').toggle(555);
    });
    $('#open').click(function () {
       $('#slider').css('transform','translateX(0px)');
    });
    $('#close').click(function () {
        $('#slider').css('transform','translateX(-270px)');
    });
    $('.carousel.carousel-slider').carousel({
        indicators:true
    });
    $('.scrollspy').scrollSpy();
});