var dotsElement = document.getElementById("dots");
var count = 1;

function doDots() {
  dotsElement.innerHTML = "";

  // put periods in count times
  for (var i=0; i<count; i++) {
    dotsElement.innerHTML += ".";
  }
}

setInterval(function() {
  count += 1;

  if (count == 4) {
    count = 1;
  }

  doDots();
}, 500);
