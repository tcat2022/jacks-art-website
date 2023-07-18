function parallax() {
    var s = document.getElementById("scroller");
    var t = document.getElementById("img");
  var yPos = 0 + window.pageYOffset/4;  
  var yPos1 = 0 + window.pageYOffset/6;  
  s.style.top = 50 + yPos + "%"; 
  t.style.top = 0 + yPos1 + "%";

  console.log(t)
}

window.addEventListener("scroll", function(){
    parallax(); 

});