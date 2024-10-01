// soldDat.length  -  колл-во всех солдат
// soldDat[0].length  -  колл-во элементов у солдат
// 0 - имя героя, 1 - англ имя героя, 2 - фракция, 3 - ранг, 4 - ковка, 5 - СП, 6 - часть

function heroesView () {
	var sd = document.getElementById('heroes_data_mob');
//	sd.innerHTML = '<table><tr><th>Имя героя</th><th>Бонд для ОЗ,ЗАЩ</th><th>Бонд для АТК/ИНТ</th><th>Нужен для бондов другим героям</th></tr>';
	sd.innerHTML = "";
	//sd.innerHTML = soldDat[111][8];
	var i;
	for (i=1;i<heroesDat.length;i++){
		fact = heroesDat[i][2].split(",");
		if (fact[0]!=""){
				f2 = "her";
				for (j=0;j<fact.length;j++){
					f2 += ' ' + fact[j];
				}
			} else {f2 = "her";}
		hreff = ('hero_mob.html?name='+ heroesDat[i][0]).replace(/ /g,"%20");
		if(heroesDat[i][0]=='Трансцендентный' || heroesDat[i][0]=='Повелительница ледяной бездны'){f = 'font-size:8px;'}else{f = 'font-size:9px;'}
		sd.innerHTML += '<div description="' + heroesDat[i][0] + '" class="' + f2 + ' ' + heroesDat[i][3] + ' ' + heroesDat[i][4] + ' ' + heroesDat[i][5] + ' ' + heroesDat[i][6] + '" style="display:block;height:80px;width:69px;float:left;"><div class="imgglow" style="display:block;"><a href="'+hreff+'"><img style="cursor:pointer;" height="60px" src="images/head/' + heroesDat[i][0] + '.png" title="' + heroesDat[i][0] + '"></a></div><div style="white-space:normal;' + f + 'width:60px;text-align:center;margin-top:-5px;">' + heroesDat[i][0] + '</div></div>';
//		}
	}
}
