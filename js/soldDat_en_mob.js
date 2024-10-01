// soldDat.length  -  колл-во всех солдат
// soldDat[0].length  -  колл-во элементов у солдат
// 0 - имя рус, 1 - имя англ., 2 - ОЗ, 3 - атк, 4 - защ, 5 - мзащ, 6 - мобильность, 7 - дальность, 8 - описание рус, 9 - описание англ., 10 - класс войска, 11 - герои

function soldView (soldClas) {
	var sd = document.getElementById('sold_data');
	sd.innerHTML = '';
	//sd.innerHTML = soldDat[111][8];
	var i;
	for (i=1;i<soldDat.length;i++){
		if (soldDat[i][10]==soldClas){
			NA = new String(soldDat[i][1]);  //имя солдата по англ. без пробелов для функции показа героев
			heroes = soldDat[i][11].split(",");
			if (heroes[0]!=""){
				h2 = "";
				for (j=0;j<heroes.length;j++){
					hreff = ('hero_en_mob.html?name='+ heroes[j]).replace(/ /g,"%20");
					h2 += '<a href="'+hreff+'"><img style="margin-right:2px;margin-bottom:2px;cursor:pointer;" height="40px" src="images/head/' + heroes[j] + '.png" title="' + heroes[j] + '"></a>';
				}
			} else {h2 = "";}
			sd.innerHTML += '<div style="display:block;width:100%;height:auto;min-height:120px;margin-bottom:6px;"><div style="display:block;width:90px;float:left;"><img src="images/soldIcons/all/' + soldDat[i][0] +
			'.png" height="110px" /></div><div style="display:block;width:320px;float:left;"><b style="font-size: 18px;margin-right: 3px;vertical-align:super;">' + soldDat[i][1]+ 
			'</b> <img src="images/ходьба.png" height="20px" /><span style="font-size:18px;vertical-align:super;margin: 0 3px;">' + soldDat[i][6] + 
			'</span> <img src="images/Icon_Range.png" height="20px" /><span style="font-size:18px;vertical-align:super;margin: 0 3px;">' + soldDat[i][7] + 
			'</span> <img onclick=iconHeroOpen("' + NA.replace(/ /g,"") + '") src="images/icon.png" height="20px" /></div><br><br><div><span style="font-size:18px;vertical-align:super;margin-right:3px;">HP: ' + soldDat[i][2]  + 
			',</span><span style="font-size:18px;vertical-align:super;margin-right:3px;">ATK: ' + soldDat[i][3]  + 
			',</span><span style="font-size:18px;vertical-align:super;margin-right:3px;">DEF: ' + soldDat[i][4]  + 
			',</span><span style="font-size:18px;vertical-align:super;margin-right:3px;">MDEF: ' + soldDat[i][5]  + 
			'</span></div><div style="white-space: normal;"><span style="font-size:16px;font-style:italic;">' + soldDat[i][9]  + 
			'</div></div><div class="hero_face ' + NA.replace(/ /g,"")  + '">' + h2 + '</div>';
		}
	}
}

function iconHeroOpen(hero){
	tempOpen = document.getElementsByClassName(hero);
	if (tempOpen[0]){
		if (tempOpen[0].classList.contains('hero_face')){

			tempOpen[0].className = tempOpen[0].className.replace("hero_face", "hero_face_open")
		} else if (tempOpen[0].classList.contains('hero_face_open')){

			tempOpen[0].className = tempOpen[0].className.replace("hero_face_open", "hero_face")
		}
	}
}
