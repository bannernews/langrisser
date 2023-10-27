var filterCont = document.getElementById("left_filter");
var fC = filterCont.getElementsByClassName("filt");
for (var i = 0; i < fC.length; i++) {
  fC[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active_f");
		if (current[0]){current[0].className = current[0].className.replace(" active_f", "")};
    this.className += " active_f";
  });
}


/* var dis = filterCont.getElementsByClassName("disable_all");
for (var i2 = 0; i2 < dis.length; i2++) {
  dis[i2].addEventListener("click", function(){
    var current2 = document.getElementsByClassName("active_f");
		if (current2[0]){current2[0].className = current2[0].className.replace(" active_f", "")};
  });
} */



var iC = filterCont.getElementsByClassName("filt_i");
for (var i2 = 0; i2 < iC.length; i2++) {
  iC[i2].addEventListener("click", function(){
    var current2 = document.getElementsByClassName("active_item");
		if (current2[0]){current2[0].className = current2[0].className.replace(" active_item", "")};
		if (this.classList.contains('weapony')){
			document.getElementById("weaponi").src="images/itemIcons/weapon_active.png";
			document.getElementById("bodyi").src="images/item_type/body.png";
			document.getElementById("hati").src="images/item_type/head.png";
			document.getElementById("acci").src="images/item_type/accessoir.png";
		};
		if (this.classList.contains('bodyy')){
			document.getElementById("weaponi").src="images/item_type/weapon.png";
			document.getElementById("bodyi").src="images/itemIcons/body_active.png";
			document.getElementById("hati").src="images/item_type/head.png";
			document.getElementById("acci").src="images/item_type/accessoir.png";
		};
		if (this.classList.contains('haty')){
			document.getElementById("weaponi").src="images/item_type/weapon.png";
			document.getElementById("bodyi").src="images/item_type/body.png";
			document.getElementById("hati").src="images/itemIcons/hat_active.png";
			document.getElementById("acci").src="images/item_type/accessoir.png";
		};
		if (this.classList.contains('accy')){
			document.getElementById("weaponi").src="images/item_type/weapon.png";
			document.getElementById("bodyi").src="images/item_type/body.png";
			document.getElementById("hati").src="images/item_type/head.png";
			document.getElementById("acci").src="images/itemIcons/acc_active.png";
		};
    this.className += " active_item";
  });
}


var filt_h = document.querySelectorAll('.filt_h'); // кнопки - фильтры
var her = document.getElementById('heroes_data'); // иконки героев
var chast = document.querySelectorAll('.chast');
var ff='';
for (var i = 0; i < filt_h.length; i++) {
	filt_h[i].chosen = false; // Изначально все показаны
	filt_h[i].addEventListener('click', function() {
		if (this.classList.contains('active_h')){this.className = this.className.replace(" active_h", "")}else{
		this.className += " active_h"}
		
//		console.log(this.title);
		this.chosen = !this.chosen; // Значение переключается, как у обычных чекбоксов
		if(ff.indexOf('.')==0){
			rep = '.' + this.title;
//			ff +=',';
		}else{
			rep = '.' + this.title;
		}
		
		if(!this.chosen){ff=ff.replace(rep, '')} else {ff += '.' + this.title;}
		this.classList.toggle('checked');
		
		console.log(ff);
		var hers = her.querySelectorAll('.her'); 
		for (h=0;h<hers.length;h++){hers[h].style.display = 'none'}
		if (ff!==''){
			var item = her.querySelectorAll(ff); 
			for( var u = 0; u < item.length; u++ ){
				item[u].style.display = 'block';
			}
		}
		else{
			for (h=0;h<hers.length;h++){hers[h].style.display = 'block'}
		}
  });
}