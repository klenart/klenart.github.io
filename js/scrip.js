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

$(window).load(function() {
	require('js/jquery.stellar.js', function() {
		$(window).stellar();
	});
	
	require('js/jquery.nicescroll.js', function() {	
		$("html").niceScroll({
			cursorcolor:"rgba(30,30,30,.5)",
			zindex:999,
			scrollspeed:100,
			mousescrollstep:50,
			cursorborder:"0px solid #fff",
		});
	});
});