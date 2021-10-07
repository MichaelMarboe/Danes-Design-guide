//NOTE: set to DEFER

function copyText(hexCode) {
  navigator.clipboard.writeText(hexCode);
};

/*
  Color-event: Must be handled in for loop because .getElementsByClassName returns a htmlcollection and not an array (so .forEach won't work).
  Opacity used instead of backgroundColor to produce color change effect. This makes it possible to avoid having to save colors as variables.
  mouseenter and mouseleave event is only there to prevent holding mousedown, leaving object and then altering color permanently. 
*/

const colorSquares = document.getElementsByClassName("colorSquare");
const revealers = document.getElementsByClassName("revealer");

for (let i = 0; i < colorSquares.length; i++) {
  colorSquares[i].addEventListener("mouseup", function () {
    colorSquares[i].style.opacity = "1";
  });
  colorSquares[i].addEventListener("mousedown", function () {
    colorSquares[i].style.opacity = "0.5";
  });
  colorSquares[i].addEventListener("mouseenter", function () {
    colorSquares[i].style.opacity = "0.8";
  });
  colorSquares[i].addEventListener("mouseleave", function () {
    colorSquares[i].style.opacity = "1";
  });
}

for (let i = 0; i < revealers .length; i++) {
  revealers[i].addEventListener("mouseup", function () {
    revealers[i].style.opacity = "1";
  });
  revealers[i].addEventListener("mousedown", function () {
    revealers[i].style.opacity = "0.5";
  });
  revealers[i].addEventListener("mouseenter", function () {
    revealers[i].style.opacity = "0.8";
  });
  revealers[i].addEventListener("mouseleave", function () {
    revealers[i].style.opacity = "1";
  });
}

const revealContent = (category, speed) => {
  $(category).slideToggle(speed);
}