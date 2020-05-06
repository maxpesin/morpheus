// JS TYPEWRITER
// ----------------------------------------------
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 100) || 500;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  /*if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }*/
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  this.el.innerHTML = '<span>'+this.txt+'</span>';

  var that = this;
  var delta = 100;

  //if (this.isDeleting) { delta /= 2; }

  /*if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 100;
  }
*/
  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  /*var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 4pxm solid #32CD32; }";
  document.body.appendChild(css);*/
};

// VIDEO FUNCTIONS
// ----------------------------------------------
var blue = document.getElementById('blueVid');
var vidContainer = document.getElementById('vidContainer');
var red = document.getElementById('redVid');
var stop = document.getElementById('stop');
var player 

function bluePill() {
  vidContainer.style.display = 'block';
  blue.style.display = 'block';
  blue.src = "https://www.youtube.com/embed/i1tpNboYFJs?enablejsapi=1&version=3&playerapiid=blueVid&rel=0&autoplay=1&showinfo=0";
  player = blue;
  }
function redPill() {
  vidContainer.style.display = 'block';
  red.style.display = 'block';
  red.src = 'https://www.youtube.com/embed/lAQ8Z3tDLhY?enablejsapi=1&version=3&playerapiid=redVid&rel=0&autoplay=1&showinfo=0';
  player = red;
  }

function closeVideo() {
  vidContainer.style.display = 'none';
  player.style.display = 'none';
  player.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
};
