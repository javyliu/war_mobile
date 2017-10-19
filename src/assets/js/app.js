import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';
// import videojs from 'video.js';


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
    // var myPlayer = videojs('my_video');
    // videojs("my_video").ready(function() {
    //     // var myPlayer = this;
    //     // myPlayer.play();
    //     console.log("asdfasdf");
    // });
    resize();

});

$(window).resize(resize);