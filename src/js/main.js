var $ = require('jquery');
var foundation = require('foundation');

$(document).foundation();

$(window).bind("load", function () {
    var footer = $("#footer");
    var pos = footer.position();
    var height = $(window).height();

    $('#footer').css('visibility', 'visible');
    height = height - pos.top;
    height = height - footer.height();
    if (height > 0) {
        footer.css({
            'margin-top': height + 'px'
        });
    }
});
