$(document).ready(function($) {
	console.log($('.slick'));
	 $('.slick').slick({
		dots: true,
		centerMode: true,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 3,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					centerMode: true,
					slidesToShow: 1
				}
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: true,
				centerMode: true,
				slidesToShow: 0
			  }
			}
		]
	});
});