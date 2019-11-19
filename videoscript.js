$(document).ready(function() {       
    $('.vid').each(function(i, obj) {
        $(this).on("mouseover", function() { hoverVideo(i); });
        $(this).on("mouseout", function() { hideVideo(i); });
    });
});



    function hoverVideo(i) {  
            $('.vid')[i].play(); 
    }

    function hideVideo(i) {
            $('.vid').get(0).pause(); 
            $('.vid').currentTime=0;
            $('.vid').load();
    }

    