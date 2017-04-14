function require(script, successCallback) {
    $.ajax({
        url: script,
        dataType: "script",
        success: successCallback,
        error: function () {
            throw new Error("Could not load script " + script);
        }
    });
}

var galleryTable = $('#recent-image-gallery');
var images = ["Land-1.jpg", "Land-2.jpg", "Land-3.jpg", "Land-4.jpg", "Land-5.jpg", "Macro-1.jpg"];
images = images.map(function(img) {
	return "Images/" + img;
});

function chooseRandom(choices, count) {
	
	for (i = choices.length - 1; i > 1; i--) {
		var rand = Math.floor(Math.random()*i);
		var temp = choices[i];
		choices[i] = choices[rand];
		choices[rand] = temp;
	}
	
	return choices.slice(0, count);
}

function calcRowWidth() {
	var width = $(window).width(),
		imgWidth = $('.thumbnail')[0].width;
	return Math.min(Math.floor(width/imgWidth), 3); // Don't want too many abreast - may change this later
}

var currentRowWidth;

function rearrangeGallery() {
	var rowWidth = calcRowWidth();
	if (rowWidth == currentRowWidth) return; // Don't want to bother with this other stuff if there's nothing to change
	currentRowWidth = rowWidth;
	
	// If it's too narrow, we don't want a huge stack of images
	var columnHeight = rowWidth == 1 ? 3 : images.length/rowWidth;
	
	var displayImages = chooseRandom(images, columnHeight * rowWidth);
	var imgTable = $('#recent-image-gallery');
	imgTable.empty();
	
	var currentImg = 0;
	for (var i = 0; i < columnHeight; i++) {
		imgTable.append('<tr></tr>');
		var row = imgTable.children().last();
		for (var k = 0; k < rowWidth; k++) {
			row.append('<td><div class="zoom_img"><img src="' + displayImages[currentImg++] + '" class="thumbnail"></img></div></td>');
		}
	}
}

$(document).ready(function($) {
	if (!/Mobi/.test(navigator.userAgent)) {
		// Stellar only really works on the desktop
		require('js/jquery.stellar.js', function() {
			$.stellar();
		});
	} else {
		// Workaround for weird image stretching on iOS
		// Doesn't play nice with Stellar, but that doesn't work on mobile anyways
		$('[id^="wall_"]').removeClass(function(index, className) {
			return (className.match(/wall_\d/) || []).join(' ');
		});
		$("#wall_1").backstretch("Images/Back-aqua.jpg");
		$("#wall_2").backstretch("Images/Back-Jelly.jpg");
		$("#wall_3").backstretch("Images/Back-Macro.jpg");
		$("#wall_4").backstretch("Images/Back-Land.jpg");
		
		$('#anchors').remove(); // Don't need the anchor link nav on mobile
	}
	
	currentRowWidth = 3; // Always starts off this way
	
	require('js/jquery.nicescroll.js', function() {	
		$("html").niceScroll({
			cursorcolor:"rgba(30,30,30,.5)",
			zindex:999,
			scrollspeed:100,
			mousescrollstep:50,
			cursorborder:"0px solid #fff",
		});
	});
	
	rearrangeGallery();
});

$(window).resize(function($) {
	rearrangeGallery();
});