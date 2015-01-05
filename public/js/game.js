var score = 0;
$("#score").text("SCORE: " + score);
$("body").keypress(hammer);
$("#start").click(main);

function main() {
  //execute sequence on fret preview
  score = 0;
  $("#score").text("SCORE: " + score);
  for (var i = 1; i < 10; i++) {
    for (var j = 0; j < song.tab.length; j++) {
      window.setTimeout(runSequence, 400 * i, i);
    }
    window.setTimeout(playAudio, 3600);
  }
}

function runSequence(id) {
  for (var j = 0; j < song.tab.length; j++) {
    window.setTimeout(showRow, 400 * j, id, song.tab[j]);
  }
}

function playAudio(){
  document.getElementById('audio-file').play();
}

function showRow(fret, tab) {
  for (var k = 0; k < tab.length; k++) {
    if (tab[k] === 1) {
      showFret("#string-" + fret + "-" + (k + 1), k + 1);
    } else {
      clearFret("#string-" + fret + "-" + (k + 1));
    }
  }

}

function showFret(stringId, stringNumber) {
  switch (stringNumber) {
    case 1:
      $(stringId).css("background-color", "green");
      break;
    case 2:
      $(stringId).css("background-color", "red");
      break;
    case 3:
      $(stringId).css("background-color", "yellow");
      break;
    case 4:
      $(stringId).css("background-color", "blue");
      break;
    case 5:
      $(stringId).css("background-color", "orange");
      break;
  }
}

function clearFret(stringId) {
  $(stringId).css("background-color", "#262626");
}

function hammer(event) {
  switch (event.keyCode) {
    case 65:
    case 97:
      if ($("#string-9-1").css("background-color") === "#008000") {
        score += 1000;
      } else {
        score -= 250;
      }
      $("#string-9-1").css("background-color", "white");
      break;
    case 83:
    case 115:
      if ($("#string-9-2").css("background-color") === "#ff0000") {
        score += 1000;
      } else {
        score -= 250;
      }
      $("#string-9-2").css("background-color", "white");
      break;
    case 68:
    case 100:
      if ($("#string-9-3").css("background-color") === "#ffff00") {
        score += 1000;
      } else {
        score -= 250;
      }
      $("#string-9-3").css("background-color", "white");
      break;
    case 70:
    case 102:
      if ($("#string-9-4").css("background-color") === "#0000ff") {
        score += 1000;
      } else {
        score -= 250;
      }
      $("#string-9-4").css("background-color", "white");
      break;
    case 71:
    case 103:
        debugger;
      if ($("#string-9-5").css("background-color") === "#ffa500") {
        score += 1000;
      } else {
        score -= 250;
      }
      $("#string-9-5").css("background-color", "white");
      break;
  }
  $("#score").text("SCORE: " + score);

  window.setTimeout(clearFret, 100, "#string-9-1");
  window.setTimeout(clearFret, 100, "#string-9-2");
  window.setTimeout(clearFret, 100, "#string-9-3");
  window.setTimeout(clearFret, 100, "#string-9-4");
  window.setTimeout(clearFret, 100, "#string-9-5");

}

//helper for rgb to hex found on stackoverflow.com
//http://stackoverflow.com/a/6177502/466321
$.cssHooks.backgroundColor = {
  get: function (elem) {
    if (elem.currentStyle) {
      var bg = elem.currentStyle["background-color"];
    } else if (window.getComputedStyle) {
      var bg = document.defaultView.getComputedStyle(elem, null).getPropertyValue("background-color");
    }
    if (bg.search("rgb") == -1) {
      return bg;
    } else {
      bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

      function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
      }
      return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
    }
  }
};

