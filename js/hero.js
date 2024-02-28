var forgeCont = document.getElementById("forge_div");
var h_forge_icon = document.getElementById("forge_icon");

var iC = forgeCont.getElementsByClassName("f_i");
for (var i2 = 0; i2 < iC.length; i2++) {
  iC[i2].addEventListener("click", function(){
    var current2 = document.getElementsByClassName("f_act");
		if (current2[0]){current2[0].className = current2[0].className.replace(" f_act", "")};
		if (this.classList.contains('f_wea')){
			var or1 = 330;
			var or2 = 216;
			var or3 = 120;
			var bes1 = 130;
			var bes2 = 56;
			var bes3 = 18;
			document.getElementById("f_w1").src="images/forge/"+fbase[0]+"_2.png";
			if (document.getElementById("f_w2")){
				document.getElementById("f_w2").src="images/forge/"+fbase[1]+".png";
				or1 = 165;
				or2 = 108;
				or3 = 60;
				bes1 = 65;
				bes2 = 28;
				bes3 = 9;
			}
			document.getElementById("f_b1").src="images/forge/бр_"+dataTable[hero_number][25]+".png";
			document.getElementById("f_h1").src="images/forge/шл_"+dataTable[hero_number][25]+".png";
			document.getElementById("f_a1").src="images/forge/акс.png";
			h_forge_icon.innerHTML = '('+fbase[0]+')<br><img src="images/forge/'+fbase[0]+'1.png" height="40px">x'+or1+'   <img src="images/forge/'+fbase[0]+'2.png" height="40px">x'+or2+'   <img src="images/forge/'+fbase[0]+'3.png" height="40px">x'+or3+'<br><img src="images/forge/best1.png" height="40px">x'+bes1+' <img src="images/forge/best2.png" height="40px">x'+bes2+' <img src="images/forge/best3.png" height="40px">x'+bes3;
		};
		if (this.classList.contains('f_wea2')){
			document.getElementById("f_w1").src="images/forge/"+fbase[0]+".png";
			document.getElementById("f_w2").src="images/forge/"+fbase[1]+"_2.png";
			document.getElementById("f_b1").src="images/forge/бр_"+dataTable[hero_number][25]+".png";
			document.getElementById("f_h1").src="images/forge/шл_"+dataTable[hero_number][25]+".png";
			document.getElementById("f_a1").src="images/forge/акс.png";
			h_forge_icon.innerHTML = '('+fbase[1]+')<br><img src="images/forge/'+fbase[1]+'1.png" height="40px">x165   <img src="images/forge/'+fbase[1]+'2.png" height="40px">x108   <img src="images/forge/'+fbase[1]+'3.png" height="40px">x60<br><img src="images/forge/best1.png" height="40px">x65 <img src="images/forge/best2.png" height="40px">x28 <img src="images/forge/best3.png" height="40px">x9';
		};
		if (this.classList.contains('f_body')){
			document.getElementById("f_w1").src="images/forge/"+fbase[0]+".png";
			if (document.getElementById("f_w2")){
				document.getElementById("f_w2").src="images/forge/"+fbase[1]+".png";
			}
			document.getElementById("f_b1").src="images/forge/бр_"+dataTable[hero_number][25]+"_2.png";
			document.getElementById("f_h1").src="images/forge/шл_"+dataTable[hero_number][25]+".png";
			document.getElementById("f_a1").src="images/forge/акс.png";
			h_forge_icon.innerHTML = '('+dataTable[hero_number][25]+' броня)<br><img src="images/forge/'+dataTable[hero_number][25]+'_броня1.png" height="40px">x165   <img src="images/forge/'+dataTable[hero_number][25]+'_броня2.png" height="40px">x108   <img src="images/forge/'+dataTable[hero_number][25]+'_броня3.png" height="40px">x60<br><img src="images/forge/best1.png" height="40px">x65 <img src="images/forge/best2.png" height="40px">x28 <img src="images/forge/best3.png" height="40px">x9';
		};
		if (this.classList.contains('f_hat')){
			document.getElementById("f_w1").src="images/forge/"+fbase[0]+".png";
			if (document.getElementById("f_w2")){
				document.getElementById("f_w2").src="images/forge/"+fbase[1]+".png";
			}
			document.getElementById("f_b1").src="images/forge/бр_"+dataTable[hero_number][25]+".png";
			document.getElementById("f_h1").src="images/forge/шл_"+dataTable[hero_number][25]+"_2.png";
			document.getElementById("f_a1").src="images/forge/акс.png";
			h_forge_icon.innerHTML = '('+dataTable[hero_number][25]+' шапка)<br><img src="images/forge/'+dataTable[hero_number][25]+'_шлем1.png" height="40px">x165   <img src="images/forge/'+dataTable[hero_number][25]+'_шлем2.png" height="40px">x108   <img src="images/forge/'+dataTable[hero_number][25]+'_шлем3.png" height="40px">x60<br><img src="images/forge/best1.png" height="40px">x65 <img src="images/forge/best2.png" height="40px">x28 <img src="images/forge/best3.png" height="40px">x9';
		};
		if (this.classList.contains('f_acc')){
			document.getElementById("f_w1").src="images/forge/"+fbase[0]+".png";
			if (document.getElementById("f_w2")){
				document.getElementById("f_w2").src="images/forge/"+fbase[1]+".png";
			}
			document.getElementById("f_b1").src="images/forge/бр_"+dataTable[hero_number][25]+".png";
			document.getElementById("f_h1").src="images/forge/шл_"+dataTable[hero_number][25]+".png";
			document.getElementById("f_a1").src="images/forge/акс_2.png";
			h_forge_icon.innerHTML = '(аксессуар)<br><img src="images/forge/акс1.png" height="40px">x165   <img src="images/forge/акс2.png" height="40px">x108   <img src="images/forge/акс3.png" height="40px">x60<br><img src="images/forge/best1.png" height="40px">x65 <img src="images/forge/best2.png" height="40px">x28 <img src="images/forge/best3.png" height="40px">x9';
		};
		
    this.className += " f_act";
  });
}