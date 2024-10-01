// PerspersItemDat.length  -  колл-во всех солдат
// PerspersItemDat[0].length  -  колл-во элементов у солдат
// 0 - имя героя рус, 1 - имя героя англ, 2 - имя рус, 3 - имя англ., 4 - тип вещи, 5 - ОЗ, 6 - атк, 7 - инт, 8 - защ, 9 - мзащ, 10 - навык, 11 - описание рус, 12 - описание англ.


function persItemView (itemType) {
	var id = document.getElementById('item_data');
	id.innerHTML = '';
	//id.innerHTML = persItemDat[111][8];
	var i;
	for (i=1;i<persItemDat.length;i++){
		if (persItemDat[i][4]==itemType){
			if (persItemDat[i][5]!=''){var oz='<img src="images/sold_stats.png" height="23px" /><span style="font-size:20px;vertical-align:super;margin-right:10px;">ОЗ: ' + persItemDat[i][5] + '</span>'}else{var oz=''};
			if (persItemDat[i][6]!=''){var atk='<img src="images/sold_stats.png" height="23px" /><span style="font-size:20px;vertical-align:super;margin-right:10px;">АТК: ' + persItemDat[i][6] + '</span>'}else{var atk=''};
			if (persItemDat[i][7]!=''){var intt='<img src="images/sold_stats.png" height="23px" /><span style="font-size:20px;vertical-align:super;margin-right:10px;">ИНТ: ' + persItemDat[i][7] + '</span>'}else{var intt=''};
			if (persItemDat[i][8]!=''){var def='<img src="images/sold_stats.png" height="23px" /><span style="font-size:20px;vertical-align:super;margin-right:10px;">ЗАЩ: ' + persItemDat[i][8] + '</span>'}else{var def=''};
			if (persItemDat[i][9]!=''){var mdef='<img src="images/sold_stats.png" height="23px" /><span style="font-size:20px;vertical-align:super;margin-right:10px;">МЗАЩ: ' + persItemDat[i][9] + '</span>'}else{var mdef=''};
			if (persItemDat[i][10]!=''){var crit='<img src="images/sold_stats.png" height="23px" /><span style="font-size:20px;vertical-align:super;margin-right:10px;">НАВЫК: ' + persItemDat[i][10] + '</span>'}else{var crit=''};
			if (persItemDat[i][0]=='Ашемар'){descr ='<span style="font-size:16px;font-style:italic;">'}else{descr ='<span style="font-size:18px;font-style:italic;">'};
			hreff = ('hero_mob.html?name='+ persItemDat[i][0]).replace(/ /g,"%20");
			id.innerHTML += '<div style="display:block;width:95%;height:auto;margin-bottom:10px;"><div style="display:block;width:110px;float:left;position:relative;"><img style="position:absolute;" src="images/itemIcons/all/' + persItemDat[i][0] + 
			'.png" height="70px" /><a href="'+hreff+'"><img style="position:absolute;top:43px;right:19px;" title="' + persItemDat[i][0] + '" src="images/head_circle/' + persItemDat[i][0] + '.png" height="40px"  /></a></div><div style="display:block;width:310px;float:left;margin-left:90px;"><b style="font-size: 18px;margin-right: 100%;float:left;">' + persItemDat[i][2]+'</b>' +
//			'<img src="images/Move_Walk.png" height="23px" /><span style="font-size:20px;vertical-align:super;margin: 0 10px;">' + soldDat[i][6] + 
//			'</span> <img src="images/Icon_Range.png" height="23px" /><span style="font-size:20px;vertical-align:super;margin: 0 10px;">' + soldDat[i][7] + 
//			'</span> <img src="images/icon.png" height="25px" />
			'<div style="display: block;float: left;padding-top: 4px;">'  + oz + ' ' + atk + ' ' + intt + ' ' + def + ' ' + mdef + ' ' + crit +
			'</div></div><br><br><div style="white-space: normal;margin-top:44px;">' + descr + persItemDat[i][11]  + 
			'</div></div>';
		}
	}
}
