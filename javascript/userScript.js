$(document).ready(function(){
	$('.slider').slick({
    fade: true,
    autoplay : true,
    arrows: false,
    pauseOnHover : false
  	});
});

$(document).ready(function(){
	$('.qrPhotogallery').jMosaic();
});	

$(document).ready(function(){
	$('.containerTop').parallax({imageSrc: 'images/backgroundTop.jpg'});
});

// $(document).ready(function(){
// 	$(function() {
// 	  $('a[href*=#]:not([href=#])').click(function() {
// 	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
// 	      var target = $(this.hash);
// 	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
// 	      if (target.length) {
// 	        $('html,body').animate({
// 	          scrollTop: target.offset().top
// 	        }, 1000);
// 	        return false;
// 	      }
// 	    }
// 	  });
// 	});
// });