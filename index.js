function myFunction(x) {
  var x = document.getElementById(`myDiv${x}`);
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
