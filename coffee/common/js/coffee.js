$(document).ready(function(){
    var timer;
    $('#sub_gnb').mouseenter(function(){
        timer = setTimeout(function(){
            $(".sub_gnb_coffee").not(':animated').slideDown(250)
        }, 100);
    })
    $("#sub_gnb").mouseleave(function(){
        clearTimeout(timer);
        $(".sub_gnb_coffee").slideUp(250)
    });
});