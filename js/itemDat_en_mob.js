// itemDat.length  -  колл-во всех солдат
// sitemDat[0].length  -  колл-во элементов у солдат
// 0 - имя рус, 1 - имя англ., 2 - тип вещи, 3 - ОЗ, 4 - атк, 5 - инт, 6 - защ, 7 - мзащ, 8 - навык, 9 - описание рус, 10 - описание англ., 11 - тип
function itemView (itemType) {
	ss='';
	var it_type = document.querySelectorAll('.it_type');
	for (var ii = 0; ii < it_type.length; ii++) {
		it_type[ii].chosen = false;
		if (it_type[ii].classList.contains('active_i')){it_type[ii].className = it_type[ii].className.replace(" active_i", "")}
	}
	var id = document.getElementById('item_data');
	id.innerHTML = '';
	if (itemType=='body' || itemType=='hat'){
		typeb = document.getElementById('typeb');
		typew = document.getElementById('typew');
		if (typeb.classList.contains('display_none')){
			typeb.className = typeb.className.replace("display_none", "display_inline_block")
		}
		if (typew.classList.contains('display_inline_block')){
			typew.className = typew.className.replace("display_inline_block", "display_none")
		}
	}
	if (itemType=='weapon'){
		typew = document.getElementById('typew');
		if (typew.classList.contains('display_none')){
			typew.className = typew.className.replace("display_none", "display_inline_block")
		}
		if (typeb.classList.contains('display_inline_block')){
			typeb.className = typeb.className.replace("display_inline_block", "display_none")
		}
	}
	if (itemType=='accessoir'){
		typew = document.getElementById('typew');
		if (typew.classList.contains('display_inline_block')){
			typew.className = typew.className.replace("display_inline_block", "display_none")
		}
		if (typeb.classList.contains('display_inline_block')){
			typeb.className = typeb.className.replace("display_inline_block", "display_none")
		}
	}
	//id.innerHTML = itemDat[111][8];
	var i;
	
	for (i=1;i<itemDat.length;i++){
		if (itemDat[i][2]==itemType){
			if (itemDat[i][3]!=''){var oz='<img src="images/sold_stats.png" height="23px" /><span style="font-size:20px;vertical-align:super;margin-right:2px;">HP: ' + itemDat[i][3] + '</span>'}else{var oz=''};
			if (itemDat[i][4]!=''){var atk='<img src="images/sold_stats.png" height="23px" /><span style="font-size:20px;vertical-align:super;margin-right:2px;">ATK: ' + itemDat[i][4] + '</span>'}else{var atk=''};
			if (itemDat[i][5]!=''){var intt='<img src="images/sold_stats.png" height="23px" /><span style="font-size:20px;vertical-align:super;margin-right:2px;">INT: ' + itemDat[i][5] + '</span>'}else{var intt=''};
			if (itemDat[i][6]!=''){var def='<img src="images/sold_stats.png" height="23px" /><span style="font-size:20px;vertical-align:super;margin-right:2px;">DEF: ' + itemDat[i][6] + '</span>'}else{var def=''};
			if (itemDat[i][7]!=''){var mdef='<img src="images/sold_stats.png" height="23px" /><span style="font-size:20px;vertical-align:super;margin-right:2px;">MDEF: ' + itemDat[i][7] + '</span>'}else{var mdef=''};
			if (itemDat[i][8]!=''){var crit='<img src="images/sold_stats.png" height="23px" /><span style="font-size:20px;vertical-align:super;margin-right:2px;">SKILL: ' + itemDat[i][8] + '</span>'}else{var crit=''};
			id.innerHTML += '<div class="all ' +itemDat[i][11]+ '" style="display:block;width:95%;height:auto;margin-bottom:5px;min-height:90px;"><div style="display:block;width:90px;float:left;"><img src="images/itemIcons/all/' + itemDat[i][0] + 
			'.png" height="70px" /></div><div style="display:block;width:310px;float:left;"><b style="font-size: 20px;margin-right: 100%;float:left;">' + itemDat[i][1]+'</b><br>' +
//			'<img src="images/Move_Walk.png" height="23px" /><span style="font-size:20px;vertical-align:super;margin: 0 10px;">' + soldDat[i][6] + 
//			'</span> <img src="images/Icon_Range.png" height="23px" /><span style="font-size:20px;vertical-align:super;margin: 0 10px;">' + soldDat[i][7] + 
//			'</span> <img src="images/icon.png" height="25px" />
			'<div style="display: block;float: left;padding-top: 4px;">'  + oz + ' ' + atk + ' ' + intt + ' ' + def + ' ' + mdef + ' ' + crit +
			'</div></div><br><br><div style="white-space: normal;"><span style="font-size:18px;font-style:italic;">' + itemDat[i][10]  + 
			'</div></div>';
		}
	}
}

