function move() {
  var elem = document.getElementById("navBar");
  var elem2 = document.getElementById("support");
  var elem3 = document.getElementById("sup");
  var width = 10;
  var id = setInterval(frame, 60);
  function frame() {
    if (width >= 100 && width2 >= 100 && width3 >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem3.style.width = width + "%";
      elem2.style.width = width + "%";
      elem.style.width = width + "%";
      elem2.innerHTML = width + "%";
      elem.innerHTML = width + "%";
    }
  }
}

move();
