var ProgressBar = require('progressbar.js');


// $("about-me").click(function() 
function aboutme() { 
    // alert("about me selected!");
    $('html,body').animate({
        scrollTop: $("#about-me-area").offset().top},
        'slow');
};

function selectedWorks() { 
    // alert("You chose selected works!");

    $('html,body').animate({
        scrollTop: $("#selectedWorks").offset().top},
        'slow');
};

function hideContent() {
    $("#content").hide();
};

var bar = new ProgressBar.Circle(container, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
  });
  
  bar.animate(1.0);



