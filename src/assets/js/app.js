import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';


// $(document).foundation();
function resize() {
    var h = $(window).height();
    var w = $(window).width();
    var rate = w / h;
    // console.log(rate);
    if (rate < 1.78) {
        $("video").width(h * 1.8);
    } else {
        $("video").width(w);
    }
}
$(function() {
    // console.log("video loaded");

    // var _videoHeight = $("video").height();
    // 
    // $(".mask img").height(_videoHeight);
    // $("video").on("load", function() {
    //     console.log("video loaded");
    // })
    resize();

});

$(window).resize(resize);