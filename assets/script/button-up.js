$(document).ready(function() { 
  var button = $('#button-up');	
  $(window).scroll (function () {
    if ($(this).scrollTop () > 500) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
});	 
button.on('click', function(){
$('body, html').animate({
scrollTop: 0 }, 1000);
return false;
});		 
});