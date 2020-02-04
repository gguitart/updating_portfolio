var ProgressBar = require('progressbar.js');


// $("about-me").click(function() 
function aboutme() {
    // alert("about me selected!");
    $('html,body').animate({
        scrollTop: $("#about-me-area").offset().top
    },
        'slow');
};

function selectedWorks() {
    // alert("You chose selected works!");

    $('html,body').animate({
        scrollTop: $("#selectedWorks").offset().top
    },
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

function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
  }

bar.animate(1.0);



