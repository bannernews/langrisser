var filterCont = document.getElementById("left_filter");
var fC = filterCont.getElementsByClassName("filt");
for (var i = 0; i < fC.length; i++) {
  fC[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active_f");
		if (current[0]){current[0].className = current[0].className.replace(" active_f", "")};
    this.className += " active_f";
  });
}



var dis = filterCont.getElementsByClassName("disable_all");
for (var i2 = 0; i2 < dis.length; i2++) {
  dis[i2].addEventListener("click", function(){
    var current2 = document.getElementsByClassName("active_f");
		if (current2[0]){current2[0].className = current2[0].className.replace(" active_f", "")};
  });
}