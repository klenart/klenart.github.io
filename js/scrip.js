function require(script) {
    $.ajax({
        url: script,
        dataType: "script",
        async: false,
        success: function () {
            // all good...
        },
        error: function () {
            throw new Error("Could not load script " + script);
        }
    });
}

$(window).load(function() {
	require('js/jquery.stellar.js');
    $(window).stellar();
});

$(window).load(

  function() { 

    $("html").niceScroll({
        cursorcolor:"rgba(30,30,30,.5)",
        zindex:999,
        scrollspeed:100,
        mousescrollstep:50,
        cursorborder:"0px solid #fff",
    });
      

  }

);




