$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: '',
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true
	});

	$('.owl-prev').addClass('fa fa-chevron-left fa-2x');
	$('.owl-next').addClass('fa fa-chevron-right fa-2x');

	$(window).scroll(function(){
		var offset = 200;
		if($(window).scrollTop() > offset) {
			$('.features__item span').animate({
				opacity: 1.0
			},1000);
		}
	});

	$('.nav-toggle').click(function(){
		$('.header-nav').toggleClass('header-nav--mobile');
		$('.nav-toggle .fa-bars').toggle();
		$('.nav-toggle .fa-close').toggle();
		return false;
	});

	$('.header-nav a').click(function(){
		$('.header-nav').removeClass('header-nav--mobile');
		$('.nav-toggle .fa-close').toggle();
		$('.nav-toggle .fa-bars').toggle();
	});
});
