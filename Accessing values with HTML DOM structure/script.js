function myFunction() {
  var a = 33;
  document.getElementById("result").innerHTML = a * a;
  document.getElementById("demo").firstChild.nodeValue;
  document.getElementById("result1").innerHTML =
    document.getElementById("demo").childNodes[0].nodeValue;
}
