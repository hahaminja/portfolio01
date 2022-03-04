$(document).ready(function(){

    $(".top-btn").click(function(){
        $("html,body").animate({scrollTop : 0}, 500)
    })
});

$(window).scroll(function(){
    var $scrollTop = $(this).scrollTop();

    if($scrollTop >= 800){
        $(".top-btn").addClass("active")
    } else{$(".top-btn").removeClass("active")}

});