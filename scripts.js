$(document).ready(function () {
    $('#gorilla').css('display', 'none', 'slow');
    $('#gorilla').fadeIn(1000);
    $('#book').css('display', 'none', 'slow');
    $('#book').fadeIn(2000);
    $('#science').css('display', 'none', 'slow');
    $('#science').fadeIn(4000);
    $('#tech').css('display', 'none', 'slow');
    $('#tech').fadeIn(6000);
    $('#ux').css('display', 'none');
    $('#ux').hide(500).fadeIn(8000);

});


// $(document).ready(function() {
//     $(".animsition").animsition({
//       inClass: 'fade-in-left',
//       outClass: 'fade-out-left',
//       inDuration: 1500,
//       outDuration: 800,
//       linkElement: '.animsition-link',
//       // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
//       loading: true,
//       loadingParentElement: 'body', //animsition wrapper element
//       loadingClass: 'animsition-loading',
//       loadingInner: '', // e.g '<img src="loading.svg" />'
//       timeout: false,
//       timeoutCountdown: 5000,
//       onLoadEvent: true,
//       browser: [ 'animation-duration', '-webkit-animation-duration'],
//       // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
//       // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
//       overlay : false,
//       overlayClass : 'animsition-overlay-slide',
//       overlayParentElement : 'body',
//       transition: function(url){ window.location.href = url; }
//     });
//   });