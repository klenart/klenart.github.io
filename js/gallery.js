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
		infinite: true,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 550,
				settings: "unslick"
			}
		]
	});
});