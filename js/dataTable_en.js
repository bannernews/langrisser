let params = (new URL(document.location)).searchParams;  //получаем имя героя с адресной строки
var heroName = params.get("name");

langu = document.getElementById('langu');
langu.href = "hero.html?name="+heroName;

mobswap = document.getElementById('mobswap');
mobswap.href = "hero_en_mob.html?name="+heroName;

if (heroName == 'Метью'){
	document.location.href = "work_en.html";
}
if (heroName == 'Яркий призыватель'){
	document.location.href = "ChrisLLR_en.html";
}
var hero_number = heroList.indexOf(heroName)+1;  //Узнаем номер строки героя
hero_en = heroList_en[hero_number-1];
	var titleName = document.getElementById('title_name');
	var title_1 = document.getElementById('title');
	titleName.innerHTML = hero_en;
	title_1.innerHTML = hero_en;

var frak = document.getElementById('picture');
skins = dataTable[hero_number][26].split(",");
frak.innerHTML += '<div id="frak_main" class="slider chibi1s0" style="display:block;width:800px;height:520px;margin:0 auto;"></div>';

var chb0 = document.getElementById("frak_main");

for (i=0;i<skins.length;i++){
	chb0.innerHTML += '<div style="display:block;width:100%;height:520px;text-align:center;position:relative;"><img style="margin:0 auto;" src="images/heroes/heroes_list/'+ heroName +'/Original/'+skins[i]+'.png" height="500px" /><img style="position:absolute;top:485px;left:600px;" src="images/skin_source/'+skins[i].charAt(0)+'.png"></div>';
}
frak.innerHTML += '<img src="images/hero_phone_light.png" height="570px" style="position:absolute;top: -35px;left: 377px;"/>';

var frak2 = document.getElementById('h_frac');
frak_temp = dataTable[hero_number][1].split(",");
frak2.innerHTML +='<img style="margin-left:10px;margin-bottom:10px;" src="images/point.png" height="30px" />';
if (dataTable[hero_number][5]==''){} else {
	frak2.innerHTML +='<img style="margin-left:10px;margin-bottom:10px;" src="images/hero_filter/chapter/'+dataTable[hero_number][5]+'.png" height="30px" />';
	frak2.innerHTML +='<img style="margin-left:10px;margin-bottom:10px;" src="images/glow.png" height="30px" />';
}
for (i=0;i<frak_temp.length;i++){
	frak2.innerHTML += '<img style="margin-left:10px;" src="images/hero_filter/factions/' + frak_temp[i] + '.png" height="50px" />   ';
}
frak2.innerHTML +='<img style="margin-left:10px;margin-bottom:10px;" src="images/point.png" height="30px" />';

var tal_pic = document.getElementById('tal_pic');
tal_pic.innerHTML += '<img src="images/heroes/talent/' + dataTable[hero_number][0] + '.png" height="100px" /><br>';
tal_pic.innerHTML += '<img src="images/hero_filter/range/' + dataTable[hero_number][2] + '.png" height="25px" />   ';

var talant = document.getElementById('talant_text');
talant.innerHTML = '<span style="display:inline-block;margin-bottom:10px;">Talent: <b>'+dataTable[hero_number][6]+'</b></span><br>'+dataTable[hero_number][7];

var sp_talant = document.getElementById('talant_sp');
if (dataTable[hero_number][4]!=='SP'){
	sp_talant.style.display='none';
} else {
	var talSP_pic = document.getElementById('talSP_pic');
	talSP_pic.innerHTML += '<img src="images/heroes/talent/' + dataTable[hero_number][0] + 'SP.png" height="100px" /><br>';
	talSP_pic.innerHTML += '<img src="images/hero_filter/range/SP.png" height="25px" />   ';

	var talantSP = document.getElementById('talantSP_text');
	talantSP.innerHTML = '<span style="display:inline-block;margin-bottom:10px;">Talent: <b>'+SPtalent[dataTable[hero_number][48]-1][3]+'</b></span><br>'+SPtalent[dataTable[hero_number][48]-1][2];
	//								Доделать СП столбец описания
}

if (dataTable[hero_number][8]==''){
	var pers_item = document.getElementById('pers_item');
	pers_item.style.display='none';
} else {
	var pers_pic = document.getElementById('pers_pic');
	var pers_text = document.getElementById('pers_text');
	pers_pic.innerHTML = '<img src="images/itemIcons/all/' + dataTable[hero_number][0] + '.png" height="100px" />';
	pers_text.innerHTML = '<b style="margin-right:8px;">'+dataTable[hero_number][8]+'</b><img src="images/item_type/' + dataTable[hero_number][9] + '.png" height="20px" /><br>';
	if (dataTable[hero_number][10]!=''){var oz='HP '+dataTable[hero_number][10]+'  '}else{var oz =''};
	if (dataTable[hero_number][11]!=''){var atk='ATK '+dataTable[hero_number][11]+'  '}else{var atk =''};
	if (dataTable[hero_number][12]!=''){var inte='INT '+dataTable[hero_number][12]+'  '}else{var inte =''};
	if (dataTable[hero_number][13]!=''){var def='DEF '+dataTable[hero_number][13]+'  '}else{var def =''};
	if (dataTable[hero_number][14]!=''){var mdef='MDEF '+dataTable[hero_number][14]+'  '}else{var mdef =''};
	if (dataTable[hero_number][15]!=''){var skil='SKILL '+dataTable[hero_number][15]+'  '}else{var skil =''};
	pers_text.innerHTML += oz+atk+inte+def+mdef+skil+'<br>'+dataTable[hero_number][16];
}

if (dataTable[hero_number][3]==''){
	var h_forge = document.getElementById('h_forge');
	h_forge.style.display='none';
} else {
	var forge_pic = document.getElementById('forge_pic');
	var forge_text = document.getElementById('forge_text');
	forge_pic.innerHTML = '<img src="images/forge.png" height="100px" />';
	forge_text.innerHTML = dataTable[hero_number][17];
}

h_forge_pic = document.getElementById("h_forge_pic");
h_forge_pic.innerHTML = '<div id="forge_div" style="width:100%;display:block;text-align:center;position:relative;"><img id="forge_base" src="images/forge/forge_1.png" height="290px"/><br><span id="forge_icon">(Forge / Path of the Law)<br>Click on the icon for details</span></div>';
var fbase = dataTable[hero_number][24].split(",");
var h_forge_div = document.getElementById("forge_div");
var h_forge_base = document.getElementById("forge_base");
var h_forge_icon = document.getElementById("forge_icon");
if (fbase.length == 1){
	h_forge_base.src = "images/forge/forge_1.png";
	h_forge_div.innerHTML += '<img id="f_w1" class="f_i f_wea" style="position:absolute;top: 5px;left: 61px" src="images/forge/'+fbase+'_2.png" height="85px">';
	h_forge_div.innerHTML += '<img id="f_b1" class="f_i f_body" style="position:absolute;top: 5px;left: 248px" src="images/forge/бр_'+dataTable[hero_number][25]+'.png" height="85px">';
	h_forge_div.innerHTML += '<img id="f_h1" class="f_i f_hat" style="position:absolute;top: 191px;left: 62px" src="images/forge/шл_'+dataTable[hero_number][25]+'.png" height="85px">';
	h_forge_div.innerHTML += '<img id="f_a1" class="f_i f_acc" style="position:absolute;top: 190px;left: 248px" src="images/forge/акс.png" height="85px">';
	if (dataTable[hero_number][3]!==''){
		h_forge_div.innerHTML += '<img style="position:absolute;top: 107px;left: 161px" src="images/forge/forge.png" height="65px">';
	}
//	h_forge_icon.innerHTML = '('+fbase+')<br><img src="images/forge/'+fbase+'1.png" height="40px">x330   <img src="images/forge/'+fbase+'2.png" height="40px">x216   <img src="images/forge/'+fbase+'3.png" height="40px">x120<br><img src="images/forge/best1.png" height="40px">x130 <img src="images/forge/best2.png" height="40px">x28 <img src="images/forge/best3.png" height="40px">x9';
} else {
	h_forge_base.src = "images/forge/forge_2.png";
	h_forge_div.innerHTML += '<img id="f_w1" class="f_i f_wea" style="position:absolute;top: 34px;left: 56px" src="images/forge/'+fbase[0]+'_2.png" height="85px">';
	h_forge_div.innerHTML += '<img id="f_w2" class="f_i f_wea2"style="position:absolute;top: 2px;left: 121px" src="images/forge/'+fbase[1]+'.png" height="65px">';
	h_forge_div.innerHTML += '<img id="f_b1" class="f_i f_body" style="position:absolute;top: 15px;left: 250px" src="images/forge/бр_'+dataTable[hero_number][25]+'.png" height="85px">';
	h_forge_div.innerHTML += '<img id="f_h1" class="f_i f_hat" style="position:absolute;top: 193px;left: 72px" src="images/forge/шл_'+dataTable[hero_number][25]+'.png" height="85px">';
	h_forge_div.innerHTML += '<img id="f_a1" class="f_i f_acc" style="position:absolute;top: 193px;left: 250px" src="images/forge/акс.png" height="85px">';
	if (dataTable[hero_number][3]!==''){
		h_forge_div.innerHTML += '<img style="position:absolute;top: 113px;left: 167px" src="images/forge/forge.png" height="65px">';
	}
//	h_forge_icon.innerHTML = '('+fbase[0]+')<br><img src="images/forge/'+fbase[0]+'1.png" height="40px">x165   <img src="images/forge/'+fbase[0]+'2.png" height="40px">x108   <img src="images/forge/'+fbase[0]+'3.png" height="40px">x60<br><img src="images/forge/best1.png" height="40px">x130 <img src="images/forge/best2.png" height="40px">x28 <img src="images/forge/best3.png" height="40px">x9';
}

var sold_pic = document.getElementById('sold_pic');
var sold_text = document.getElementById('sold_text');
sold_pic.innerHTML = '<img onclick=iconSoldOpen() src="images/sold_icon.png" height="100px" style="cursor:pointer;"/>';
sold_text.innerHTML = '<span style="display:inline-block;margin-bottom:10px;">Soldiers bonus: </span><br>';
sold_text.innerHTML += '<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">HP: '+dataTable[hero_number][18]+'%</span><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">ATK: '+dataTable[hero_number][19]+'%</span><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">DEF: '+dataTable[hero_number][20]+'%</span><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">MDEF: '+dataTable[hero_number][21]+'%</span>';

var h_sold_view = document.getElementById("h_sold_view");
var solds = dataTable[hero_number][22].split(",");
var soldsSP = dataTable[hero_number][23];
for (i=0;i<solds.length;i++){
	h_sold_view.innerHTML += '<img src="images/soldIcons/all/' + solds[i] + '.png" height="140px" />';
}
if (soldsSP!==''){
	h_sold_view.innerHTML += '<img src="images/soldIcons/all/' + soldsSP + '.png" height="140px" />';
}


function iconSoldOpen(){
	tempOpen = document.getElementById("h_sold_view");
	if (tempOpen){
		if (tempOpen.classList.contains('display_none')){
			tempOpen.className = tempOpen.className.replace("display_none", "display_block");
			sold_pic.innerHTML = '<img onclick=iconSoldOpen() src="images/sold_icon2.png" height="100px" style="cursor:pointer;"/>';
		} else if (tempOpen.classList.contains('display_block')){
			tempOpen.className = tempOpen.className.replace("display_block", "display_none");
			sold_pic.innerHTML = '<img onclick=iconSoldOpen() src="images/sold_icon.png" height="100px" style="cursor:pointer;"/>';
		}
	}
}


chb = dataTable[hero_number][27].split(",");
var h_info3 = document.getElementById("h_info3");
if (chb.length==2){
	var chb1 = document.getElementById("chb1");
	var chb2 = document.getElementById("chb2");
	var ch1 = document.getElementById("ch1");
	var ch2 = document.getElementById("ch2");
	var coz1 = document.getElementById("coz1");
	var coz2 = document.getElementById("coz2");
	var catk1 = document.getElementById("catk1");
	var catk2 = document.getElementById("catk2");
	var cint1 = document.getElementById("cint1");
	var cint2 = document.getElementById("cint2");
	var cdef1 = document.getElementById("cdef1");
	var cdef2 = document.getElementById("cdef2");
	var cmdef1 = document.getElementById("cmdef1");
	var cmdef2 = document.getElementById("cmdef2");
	var cskill1 = document.getElementById("cskill1");
	var cskill2 = document.getElementById("cskill2");
	var che41 = document.getElementById("che41");
	var che42 = document.getElementById("che42");
	var che71 = document.getElementById("che71");
	var che72 = document.getElementById("che72");
	var uzi_l = document.getElementById("uzi_l");
	var uzi_dr = document.getElementById("uzi_dr");
	var chibiskin = dataTable[hero_number][26].split(",");
	var chibi1skin = [];
	var chibi2skin = [];
	if (dataTable[hero_number][47]==''){
		chibi1skin[0]='0'+classStats[chb[0]-1][14]+'.png';
		chibi2skin[0]='0'+classStats[chb[1]-1][14]+'.png';
		for (i=1;i<chibiskin.length;i++){
			chibi1skin[i] = chibiskin[i]+classStats[chb[0]-1][15]+'.png';
			chibi2skin[i] = chibiskin[i]+classStats[chb[1]-1][15]+'.png';
		}
	} else {
		if(dataTable[hero_number][27].split(",").length == 2 && dataTable[hero_number][47]!==''){
			chibi1skin[0]='0'+classStats[chb[0]-1][14]+'.png';
			chibi1skin[1]='0'+classStats[chb[0]-1][14]+'.png';
			chibi2skin[0]=classStats[chb[1]-1][14]+'.png';
			chibi2skin[1]=classStats[chb[1]-1][14]+'.png';
		} else {
			chibi1skin[0]='0'+classStats[chb[0]-1][14]+'.png';
			chibi1skin[1]='0'+classStats[chb[0]-1][14]+'.png';
			chibi2skin[0]='0'+classStats[chb[1]-1][14]+'.png';
			chibi2skin[1]='0'+classStats[chb[1]-1][14]+'.png';
		}
		for (i=2;i<chibiskin.length;i++){
			chibi1skin[i] = chibiskin[i]+classStats[chb[0]-1][15]+'.png';
			chibi2skin[i] = chibiskin[i]+classStats[chb[1]-1][15]+'.png';
		}
	}
	chb1.innerHTML = '<div id="ch1sl" class="chibi1sl" style="display:block;width:335px;height:200px;"></div>';
	var ch1sl = document.getElementById("ch1sl");
	for (i=0;i<chibi1skin.length;i++){
		ch1sl.innerHTML += '<div style="position:relative;height:200px;width:343px;"><img style="position:absolute;top:0;left:70px;" src="images/moon.png" height="190px" /><img style="position:absolute;top:0;left:82px;" src="images/heroes/heroes_list/'+ heroName +'/Chibi/'+chibi1skin[i]+'" height="180px" /><img style="position:absolute;top:0;left:210px;" src="images/classes/'+classStats[chb[0]-1][2]+'.png" height="60px" /></div>';
	}
	chb2.innerHTML = '<div id="ch1s2" class="chibi1s2" style="display:block;width:335px;height:200px;"></div>';
	var ch1s2 = document.getElementById("ch1s2");
	for (i=0;i<chibi2skin.length;i++){
		ch1s2.innerHTML += '<div style="position:relative;height:200px;width:343px;"><img style="position:absolute;top:0;left:70px;" src="images/moon.png" height="190px" /><img style="position:absolute;top:0;left:82px;" src="images/heroes/heroes_list/'+ heroName +'/Chibi/'+chibi2skin[i]+'" height="180px" /><img style="position:absolute;top:0;left:210px;" src="images/classes/'+classStats[chb[1]-1][2]+'.png" height="60px" /></div>';
	}
	ch1.innerHTML = '<img src="images/Icon_Range.png" height="25px" /> '+classStats[chb[0]-1][9]+' <img src="images/'+classStats[chb[0]-1][11]+'.png" height="25px" /> '+classStats[chb[0]-1][10];
	ch2.innerHTML = '<img src="images/Icon_Range.png" height="25px" /> '+classStats[chb[1]-1][9]+' <img src="images/'+classStats[chb[1]-1][11]+'.png" height="25px" /> '+classStats[chb[1]-1][10];
	if (Number(classStats[chb[0]-1][3])>Number(classStats[chb[1]-1][3])){ozA='#16ff66'}else{ozA='black'};if (Number(classStats[chb[0]-1][3])<Number(classStats[chb[1]-1][3])){ozB='#16ff66'}else{ozB='black'};
	if (Number(classStats[chb[0]-1][4])>Number(classStats[chb[1]-1][4])){atkA='#16ff66'}else{atkA='black'};if (Number(classStats[chb[0]-1][4])<Number(classStats[chb[1]-1][4])){atkB='#16ff66'}else{atkB='black'};
	if (Number(classStats[chb[0]-1][5])>Number(classStats[chb[1]-1][5])){intA='#16ff66'}else{intA='black'};if (Number(classStats[chb[0]-1][5])<Number(classStats[chb[1]-1][5])){intB='#16ff66'}else{intB='black'};
	if (Number(classStats[chb[0]-1][6])>Number(classStats[chb[1]-1][6])){defA='#16ff66'}else{defA='black'};if (Number(classStats[chb[0]-1][6])<Number(classStats[chb[1]-1][6])){defB='#16ff66'}else{defB='black'};
	if (Number(classStats[chb[0]-1][7])>Number(classStats[chb[1]-1][7])){mdefA='#16ff66'}else{mdefA='black'};if (Number(classStats[chb[0]-1][7])<Number(classStats[chb[1]-1][7])){mdefB='#16ff66'}else{mdefB='black'};
	if (Number(classStats[chb[0]-1][8])>Number(classStats[chb[1]-1][8])){skillA='#16ff66'}else{skillA='black'};if (Number(classStats[chb[0]-1][8])<Number(classStats[chb[1]-1][8])){skillB='#16ff66'}else{skillB='black'};
	coz1.innerHTML = '<span style="color:'+ozA+';">'+classStats[chb[0]-1][3]+'</span>';
	coz2.innerHTML = '<span style="color:'+ozB+';">'+classStats[chb[1]-1][3]+'</span>';
	catk1.innerHTML = '<span style="color:'+atkA+';">'+classStats[chb[0]-1][4]+'</span>';
	catk2.innerHTML = '<span style="color:'+atkB+';">'+classStats[chb[1]-1][4]+'</span>';
	cint1.innerHTML = '<span style="color:'+intA+';">'+classStats[chb[0]-1][5]+'</span>';
	cint2.innerHTML = '<span style="color:'+intB+';">'+classStats[chb[1]-1][5]+'</span>';
	cdef1.innerHTML = '<span style="color:'+defA+';">'+classStats[chb[0]-1][6]+'</span>';
	cdef2.innerHTML = '<span style="color:'+defB+';">'+classStats[chb[1]-1][6]+'</span>';
	cmdef1.innerHTML = '<span style="color:'+mdefA+';">'+classStats[chb[0]-1][7]+'</span>';
	cmdef2.innerHTML = '<span style="color:'+mdefB+';">'+classStats[chb[1]-1][7]+'</span>';
	cskill1.innerHTML = '<span style="color:'+skillA+';">'+classStats[chb[0]-1][8]+'</span>';
	cskill2.innerHTML = '<span style="color:'+skillB+';">'+classStats[chb[1]-1][8]+'</span>';
	che41.innerHTML = '<span>'+classStats[chb[0]-1][12]+'</span>';
	che42.innerHTML = '<span>'+classStats[chb[1]-1][12]+'</span>';
	che71.innerHTML = '<span>'+classStats[chb[0]-1][13]+'</span>';
	che72.innerHTML = '<span>'+classStats[chb[1]-1][13]+'</span>';
	uzi_l.style["vertical-align"] = "top";
	uzi_dr.style["vertical-align"] = "top";
	uzi_l.innerHTML = '<span style="display:block;width:170px;height:auto;margin:0 auto;margin-top:25px;white-space:pre-wrap;margin-bottom:10px;">Personal bonds</span>';
	var imgbonddef = new Image();
	imgbonddef.src = 'images/head_circle/'+dataTable[hero_number][28]+'.png';
	imgbonddef.onload = function(){
		uzi_l.innerHTML += '<span style="display:block;width:170px;height:170px;margin:0 auto;">DEF<br><a href="hero_en.html?name='+(dataTable[hero_number][28]).replace(/ /g,"%20")+'"><img style="cursor:pointer;margin-top:5px;" src="images/head_circle/'+dataTable[hero_number][28]+'.png" height="144px" /></a></span>';
	};
	imgbonddef.onerror = function(){
		uzi_l.innerHTML += '';
	};
	var imgbondatk = new Image();
	imgbondatk.src = 'images/head_circle/'+dataTable[hero_number][29]+'.png';
	imgbondatk.onload = function(){
		uzi_l.innerHTML += '<span style="display:block;width:170px;height:170px;margin:0 auto;margin-top:8px;">ATK<br><a href="hero_en.html?name='+(dataTable[hero_number][29]).replace(/ /g,"%20")+'"><img style="cursor:pointer;margin-top:5px;" src="images/head_circle/'+dataTable[hero_number][29]+'.png" height="144px" /></a></span>';
	};
	imgbondatk.onerror = function(){
		uzi_l.innerHTML += '';
	};
	drdef = dataTable[hero_number][30].split(",")
	dratk = dataTable[hero_number][31].split(",")
	bond_dr_sum = drdef.length + dratk.length;
	if (bond_dr_sum>=6){widthu="70px";}else{widthu="92px";}
	uzi_dr.innerHTML = '<span style="display:block;width:170px;height:100%;margin:0 auto;margin-top:25px;white-space:pre-wrap;margin-bottom:16px;">Bonds for other</span>';
	if (dataTable[hero_number][30]!==''){
		uzi_dr.innerHTML += '<span style="display:block;width:215px;height:auto;margin:0 auto;white-space:pre-wrap;">DEF<br></span>';
		for (i=0;i<drdef.length;i++){
			uzi_dr.innerHTML += '<a href="hero_en.html?name='+(drdef[i]).replace(/ /g,"%20")+'"><img style="cursor:pointer;margin-left:5px;" src="images/head_circle/'+drdef[i]+'.png" height="'+widthu+'" /></a>';
		}
	}
	uzi_dr.innerHTML += '<br><br>';
	if (dataTable[hero_number][31]!==''){
		uzi_dr.innerHTML += '<span style="display:block;width:215px;height:auto;margin:0 auto;white-space:pre-wrap;">ATK<br></span>';
		for (i=0;i<dratk.length;i++){
			uzi_dr.innerHTML += '<a href="hero_en.html?name='+(dratk[i]).replace(/ /g,"%20")+'"><img style="cursor:pointer;margin-left:5px;" src="images/head_circle/'+dratk[i]+'.png" height="'+widthu+'" /></a>';
		}
	}
	
} else if (chb.length==1){
	h_info3.innerHTML = '<table border="0" style="width:100%;"><tr><td id="uzi_l1" rowspan="9" style="width:18%;background-image:url(images/uzi_l.png);background-repeat:no-repeat;background-size:contain;">Personal bonds</td><td id="chb1" style="height:20px;position:relative;" rowspan="6"></td><td style="font-size:20px;height:20px;">HP</td><td style="width:27%;height:20px;"><span>'+classStats[chb[0]-1][3]+'</span></td><td id="uzi_dr1" rowspan="9" style="width:18%;background-image:url(images/uzi_dr.png);background-repeat:no-repeat;background-size:contain;white-space:pre-wrap;">Bonds for other</td></tr><tr style="font-size:20px;"><td style="height:20px;">ATK</td><td style="height:20px;"><span>'+classStats[chb[0]-1][4]+'</span></td></tr><tr style="font-size:20px;"><td style="height:20px;">INT</td><td style="height:20px;"><span>'+classStats[chb[0]-1][5]+'</span></td></tr><tr style="font-size:20px;"><td style="height:20px;">DEF</td><td style="height:20px;"><span>'+classStats[chb[0]-1][6]+'</span></td></tr><tr style="font-size:20px;"><td style="height:20px;">MDEF</td><td style="height:20px;"><span>'+classStats[chb[0]-1][7]+'</span></td></tr><tr style="font-size:20px;"><td style="height:20px;">SKILL</td><td style="height:20px;"><span>'+classStats[chb[0]-1][8]+'</span></td></tr><tr><td colspan="3"><img src="images/shadow.png" width="100%" height="20px" /></td></tr><tr><td style="height:20px;font-size:20px;"><img src="images/Icon_Range.png" height="25px" /> '+classStats[chb[0]-1][9]+' <img src="images/'+classStats[chb[0]-1][11]+'.png" height="25px" /> '+classStats[chb[0]-1][10]+' </td><td style="height:50px;"><img src="images/heart.png" height="40px" /><br>Level 4</td><td style="height:50px;white-space:break-spaces;vertical-align:middle;"><span>'+classStats[chb[0]-1][12]+'</span></td></tr><tr><td></td><td style="height:50px;"><img src="images/heart.png" height="40px" /><br>Level 7</td><td style="height:50px;white-space:break-spaces;vertical-align:middle;"><span>'+classStats[chb[0]-1][13]+'</span></td></tr></table>';
	var chb1 = document.getElementById("chb1");
	var chibiskin = dataTable[hero_number][26].split(",");
	var chibi1skin = [];
	chibi1skin[0]='0'+classStats[chb[0]-1][14]+'.png';
	for (i=1;i<chibiskin.length;i++){
		chibi1skin[i] = chibiskin[i]+classStats[chb[0]-1][15]+'.png';
	}
	chb1.innerHTML = '<div id="ch1sl" class="chibi1sl" style="display:block;width:335px;height:200px;"></div>';
	var ch1sl = document.getElementById("ch1sl");
	for (i=0;i<chibi1skin.length;i++){
		ch1sl.innerHTML += '<div style="position:relative;height:200px;width:343px;"><img style="position:absolute;top:0;left:90px;" src="images/moon.png" height="190px" /><img style="position:absolute;top:0;left:80px;" src="images/heroes/heroes_list/'+ heroName +'/Chibi/'+chibi1skin[i]+'" height="180px" /><img style="position:absolute;top:0;left:230px;" src="images/classes/'+classStats[chb[0]-1][2]+'.png" height="60px" /></div>';
	}
	var uzi_l1 = document.getElementById("uzi_l1");
	var uzi_dr1 = document.getElementById("uzi_dr1");
	uzi_l1.style["vertical-align"] = "top";
	uzi_dr1.style["vertical-align"] = "top";
	uzi_l1.innerHTML = '<span style="display:block;width:170px;height:auto;margin:0 auto;margin-top:10px;white-space:pre-wrap;margin-bottom:12px;">Personal bonds</span>';
	
	var imgbonddef = new Image();
	imgbonddef.src = 'images/head_circle/'+dataTable[hero_number][28]+'.png';
	imgbonddef.onload = function(){
		uzi_l1.innerHTML += '<span style="display:block;width:170px;height:150px;margin:0 auto;">DEF<br><a href="hero_en.html?name='+(dataTable[hero_number][28]).replace(/ /g,"%20")+'"><img style="cursor:pointer;margin-top:6px;" src="images/head_circle/'+dataTable[hero_number][28]+'.png" height="120px" /></a></span>';
	}
	imgbonddef.onerror = function(){
		uzi_l1.innerHTML += '';
	};
		
	var imgbondatk = new Image();
	imgbondatk.src = 'images/head_circle/'+dataTable[hero_number][29]+'.png';
	imgbondatk.onload = function(){
		uzi_l1.innerHTML += '<span style="display:block;width:170px;height:150px;margin:0 auto;margin-top:6px;">ATK<br><a href="hero_en.html?name='+(dataTable[hero_number][29]).replace(/ /g,"%20")+'"><img style="cursor:pointer;margin-top:6px;" src="images/head_circle/'+dataTable[hero_number][29]+'.png" height="120px" /></a></span>';
	}
	imgbondatk.onerror = function(){
		uzi_l1.innerHTML += '';
	};
	drdef = dataTable[hero_number][30].split(",")
	dratk = dataTable[hero_number][31].split(",")
	bond_dr_sum = drdef.length + dratk.length;
	if (bond_dr_sum>=6){widthu="65px";}else{widthu="80px";}
	uzi_dr1.innerHTML = '<span style="display:block;width:170px;height:100%;margin:0 auto;margin-top:10px;white-space:pre-wrap;">Bonds for other</span><br>';
	if (dataTable[hero_number][30]!==''){
		uzi_dr1.innerHTML += '<span style="display:block;width:215px;height:auto;margin:0 auto;white-space:pre-wrap;">DEF<br></span>';
		for (i=0;i<drdef.length;i++){
			uzi_dr1.innerHTML += '<a href="hero_en.html?name='+(drdef[i]).replace(/ /g,"%20")+'"><img style="cursor:pointer;margin-left:5px;" src="images/head_circle/'+drdef[i]+'.png" height="'+widthu+'" /></a>';
		}
	}
	uzi_dr1.innerHTML += '<br><br>';
	if (dataTable[hero_number][31]!==''){
		uzi_dr1.innerHTML += '<span style="display:block;width:215px;height:auto;margin:0 auto;white-space:pre-wrap;">ATK<br></span>';
		for (i=0;i<dratk.length;i++){
			uzi_dr1.innerHTML += '<a href="hero_en.html?name='+(dratk[i]).replace(/ /g,"%20")+'"<img style="cursor:pointer;margin-left:5px;" src="images/head_circle/'+dratk[i]+'.png" height="'+widthu+'" /></a>';
		}
	}
} else if (chb.length==3){
	
	if (Number(classStats[chb[0]-1][3])>Number(classStats[chb[1]-1][3])){ozA='#16ff66'}else{ozA='black'};if (Number(classStats[chb[0]-1][3])<Number(classStats[chb[1]-1][3])){ozB='#16ff66'}else{ozB='black'};
	if (Number(classStats[chb[0]-1][4])>Number(classStats[chb[1]-1][4])){atkA='#16ff66'}else{atkA='black'};if (Number(classStats[chb[0]-1][4])<Number(classStats[chb[1]-1][4])){atkB='#16ff66'}else{atkB='black'};
	if (Number(classStats[chb[0]-1][5])>Number(classStats[chb[1]-1][5])){intA='#16ff66'}else{intA='black'};if (Number(classStats[chb[0]-1][5])<Number(classStats[chb[1]-1][5])){intB='#16ff66'}else{intB='black'};
	if (Number(classStats[chb[0]-1][6])>Number(classStats[chb[1]-1][6])){defA='#16ff66'}else{defA='black'};if (Number(classStats[chb[0]-1][6])<Number(classStats[chb[1]-1][6])){defB='#16ff66'}else{defB='black'};
	if (Number(classStats[chb[0]-1][7])>Number(classStats[chb[1]-1][7])){mdefA='#16ff66'}else{mdefA='black'};if (Number(classStats[chb[0]-1][7])<Number(classStats[chb[1]-1][7])){mdefB='#16ff66'}else{mdefB='black'};
	if (Number(classStats[chb[0]-1][8])>Number(classStats[chb[1]-1][8])){skillA='#16ff66'}else{skillA='black'};if (Number(classStats[chb[0]-1][8])<Number(classStats[chb[1]-1][8])){skillB='#16ff66'}else{skillB='black'};
	h_info3.innerHTML = '<table border="0" style="width:100%;"><tr><td style="width:20%;height:190px;border:0;"></td><td id="chb1" style="width:27%;height:190px;position:relative;"></td><td style="height:190px;"></td><td id="chb2" style="width:27%;height:190px;position:relative;"></td></tr><tr><td id="uzi_l3" rowspan="11" style="background-image:url(images/uzi_l.png);background-repeat:no-repeat;">Personal bonds</td><td style="height:20px;font-size:20px;"><img src="images/Icon_Range.png" height="25px" /> '+classStats[chb[0]-1][9]+' <img src="images/'+classStats[chb[0]-1][11]+'.png" height="25px" /> '+classStats[chb[0]-1][10]+'</td><td style="height:20px;"></td><td id="ch2" style="height:20px;font-size:20px;"><img src="images/Icon_Range.png" height="25px" /> '+classStats[chb[1]-1][9]+' <img src="images/'+classStats[chb[1]-1][11]+'.png" height="25px" /> '+classStats[chb[1]-1][10]+'</td></tr><tr style="font-size:20px;"><td style="height:20px;"><span style="color:'+ozA+';">'+classStats[chb[0]-1][3]+'</span></td><td style="height:20px;">HP</td><td style="height:20px;"><span style="color:'+ozB+';">'+classStats[chb[1]-1][3]+'</span></td></tr><tr style="font-size:20px;"><td style="height:20px;"><span style="color:'+atkA+';">'+classStats[chb[0]-1][4]+'</span></td><td style="height:20px;">ATK</td><td style="height:20px;"><span style="color:'+atkB+';">'+classStats[chb[1]-1][4]+'</span></td></tr><tr style="font-size:20px;"><td style="height:20px;"><span style="color:'+intA+';">'+classStats[chb[0]-1][5]+'</span></td><td style="height:20px;">INT</td><td style="height:20px;"><span style="color:'+intB+';">'+classStats[chb[1]-1][5]+'</span></td></tr><tr style="font-size:20px;"><td style="height:20px;"><span style="color:'+defA+';">'+classStats[chb[0]-1][6]+'</span></td><td style="height:20px;">DEF</td><td style="height:20px;"><span style="color:'+defB+';">'+classStats[chb[1]-1][6]+'</span></td></tr><tr style="font-size:20px;"><td style="height:20px;"><span style="color:'+mdefA+';">'+classStats[chb[0]-1][7]+'</span></td><td style="height:20px;">MDEF</td><td style="height:20px;"><span style="color:'+mdefB+';">'+classStats[chb[1]-1][7]+'</span></td></tr><tr style="font-size:20px;"><td style="width:24%;height:20px;"><span style="color:'+skillA+';">'+classStats[chb[0]-1][8]+'</span></td><td style="width:4%;height:20px;">SKILL</td><td style="width:24%;height:20px;"><span style="color:'+skillB+';">'+classStats[chb[1]-1][8]+'</span></td></tr><tr><td colspan="3"><img src="images/shadow.png" width="100%" height="20px" /></td></tr><tr><td style="height:50px;white-space:break-spaces;padding:0 10px;vertical-align:middle;"><span>'+classStats[chb[0]-1][12]+'</span></td><td style="height:50px;"><img src="images/heart.png" height="40px" /><br>Level 4</td><td style="height:50px;white-space:break-spaces;padding:0 10px;vertical-align:middle;"><span>'+classStats[chb[1]-1][12]+'</span></td></tr><tr><td style="height:50px;white-space:break-spaces;padding:0 10px;vertical-align:middle;"><span>'+classStats[chb[0]-1][13]+'</span></td><td style="height:50px;"><img src="images/heart.png" height="40px" /><br>Level 7</td><td style="height:50px;white-space:break-spaces;padding:0 10px;vertical-align:middle;"><span>'+classStats[chb[1]-1][13]+'</span></td></tr><tr><td style="height:20px;" colspan="4"></td></tr></table><br>';
	
	if (dataTable[hero_number][47]!==''){SPclass='/SP/'}else{SPclass=''}
	var chb1 = document.getElementById("chb1");
	var chb2 = document.getElementById("chb2");
	var chibiskin = dataTable[hero_number][26].split(",");
	var chibi1skin = [];
	var chibi2skin = [];
	if (dataTable[hero_number][47]==''){
		chibi1skin[0]='0'+classStats[chb[0]-1][14]+'.png';
		chibi2skin[0]='0'+classStats[chb[1]-1][14]+'.png';
		for (i=1;i<chibiskin.length;i++){
			chibi1skin[i] = chibiskin[i]+classStats[chb[0]-1][15]+'.png';
			chibi2skin[i] = chibiskin[i]+classStats[chb[1]-1][15]+'.png';
		}
	} else {
		chibi1skin[0]='0'+classStats[chb[0]-1][14]+'.png';
		chibi1skin[1]='0'+classStats[chb[0]-1][14]+'.png';
		chibi2skin[0]='0'+classStats[chb[1]-1][14]+'.png';
		chibi2skin[1]='0'+classStats[chb[1]-1][14]+'.png';
		for (i=2;i<chibiskin.length;i++){
			chibi1skin[i] = chibiskin[i]+classStats[chb[0]-1][15]+'.png';
			chibi2skin[i] = chibiskin[i]+classStats[chb[1]-1][15]+'.png';
		}
	}
	chb1.innerHTML = '<div id="ch1sl" class="chibi1sl" style="display:block;width:468px;height:200px;"></div>';
	var ch1sl = document.getElementById("ch1sl");
	for (i=0;i<chibi1skin.length;i++){
		ch1sl.innerHTML += '<div style="position:relative;height:200px;width:468px;"><img style="position:absolute;top:0;left:145px;" src="images/moon.png" height="190px" /><img style="position:absolute;top:0;left:157px;" src="images/heroes/heroes_list/'+ heroName +'/Chibi/'+chibi1skin[i]+'" height="180px" /><img style="position:absolute;top:0;left:285px;" src="images/classes/'+classStats[chb[0]-1][2]+'.png" height="60px" /></div>';
	}
	chb2.innerHTML = '<div id="ch1s2" class="chibi1s2" style="display:block;width:468px;height:200px;"></div>';
	var ch1s2 = document.getElementById("ch1s2");
	for (i=0;i<chibi2skin.length;i++){
		ch1s2.innerHTML += '<div style="position:relative;height:200px;width:468px;"><img style="position:absolute;top:0;left:145px;" src="images/moon.png" height="190px" /><img style="position:absolute;top:0;left:157px;" src="images/heroes/heroes_list/'+ heroName +'/Chibi/'+chibi2skin[i]+'" height="180px" /><img style="position:absolute;top:0;left:285px;" src="images/classes/'+classStats[chb[1]-1][2]+'.png" height="60px" /></div>';
	}
	
	h_info3.innerHTML += '<table border="0" style="width:100%;"><tr><td id="uzi_dr3" rowspan="10" style="width:18%;background-image:url(images/uzi_l.png);background-repeat:no-repeat;white-space:pre-wrap;">Bonds for other</td><td id="chb3" style="width:27%;height:20px;position:relative;" rowspan="6"></td><td style="font-size:20px;width:10%;height:20px;">HP</td><td style="font-size:20px;width:27%;height:20px;"><span>'+classStats[chb[2]-1][3]+'</span></td></tr><tr style="font-size:20px;"><td style="height:20px;">ATK</td><td style="height:20px;"><span>'+classStats[chb[2]-1][4]+'</span></td></tr><tr style="font-size:20px;"><td style="height:20px;">INT</td><td style="height:20px;"><span>'+classStats[chb[2]-1][5]+'</span></td></tr><tr style="font-size:20px;"><td style="height:20px;">DEF</td><td style="height:20px;"><span>'+classStats[chb[2]-1][6]+'</span></td></tr><tr style="font-size:20px;"><td style="height:20px;">MDEF</td><td style="height:20px;"><span>'+classStats[chb[2]-1][7]+'</span></td></tr><tr style="font-size:20px;"><td style="height:20px;">SKILL</td><td style="height:20px;"><span>'+classStats[chb[2]-1][8]+'</span></td></tr><tr><td colspan="3"><img src="images/shadow.png" width="100%" height="20px" /></td></tr><tr><td style="height:20px;font-size:20px;"><img src="images/Icon_Range.png" height="25px" /> '+classStats[chb[2]-1][9]+' <img src="images/'+classStats[chb[2]-1][11]+'.png" height="25px" /> '+classStats[chb[2]-1][10]+'</td><td style="height:50px;"><img src="images/heart.png" height="40px" /><br>Level 4</td><td style="height:50px;white-space:break-spaces;vertical-align:middle;"><span>'+classStats[chb[2]-1][12]+'</span></td></tr><tr><td></td><td style="height:50px;"><img src="images/heart.png" height="40px" /><br>Level 7</td><td style="height:50px;white-space:break-spaces;vertical-align:middle;"><span>'+classStats[chb[2]-1][13]+'</span></td></tr><tr><td style="height:60px;" colspan="4"></td></tr></table>';
	
	var chb3 = document.getElementById("chb3");
//	var chibiskin = dataTable[hero_number][26].split(",");
	var chibi3skin = [];
	if (dataTable[hero_number][47]==''){
		chibi3skin[0]=classStats[chb[2]-1][14]+'.png';
		for (i=1;i<chibiskin.length;i++){
			chibi3skin[i] = chibiskin[i]+classStats[chb[2]-1][15]+'.png';
		}
	} else {
		chibi3skin[0]=classStats[chb[2]-1][14]+'.png';
		chibi3skin[1]=classStats[chb[2]-1][14]+'.png';
		for (i=2;i<chibiskin.length;i++){
			chibi3skin[i] = chibiskin[i]+classStats[chb[2]-1][15]+'.png';
		}
	}
	chb3.innerHTML = '<div id="ch1s3" class="chibi1s3" style="display:block;width:436px;height:214px;"></div>';
	var ch1s3 = document.getElementById("ch1s3");
	for (i=0;i<chibi3skin.length;i++){
		ch1s3.innerHTML += '<div style="position:relative;height:214px;width:436px;"><img style="position:absolute;top:0;left:145px;" src="images/moon.png" height="190px" /><img style="position:absolute;top:0;left:157px;" src="images/heroes/heroes_list/'+ heroName +'/Chibi/'+chibi3skin[i]+'" height="180px" /><img style="position:absolute;top:0;left:285px;" src="images/classes/'+SPclass+classStats[chb[2]-1][2]+'.png" height="60px" /></div>';
	}
	
//	<img style="position:absolute;top:0;left:120px;" src="images/moon.png" height="190px" /><img style="position:absolute;top:0;left:120px;" src="images/heroes/heroes_list/'+ heroName +'/Chibi/'+classStats[chb[2]-1][14]+'.png" height="180px" /><img style="position:absolute;top:0;left:260px;" src="images/classes/'+classStats[chb[2]-1][2]+'.png" height="60px" />
	
	var uzi_l3 = document.getElementById("uzi_l3");
	var uzi_dr3 = document.getElementById("uzi_dr3");
	uzi_l3.style["vertical-align"] = "top";
	uzi_dr3.style["vertical-align"] = "top";
	uzi_l3.innerHTML = '<span style="display:block;width:170px;height:auto;margin:0 auto;margin-top:15px;white-space:pre-wrap;margin-bottom:12px;">Personal bonds</span>';
	uzi_l3.innerHTML += '<span style="display:block;width:170px;height:150px;margin:10px auto;">DEF<br><a href="hero_en.html?name='+(dataTable[hero_number][28]).replace(/ /g,"%20")+'"><img style="cursor:pointer;margin-top:6px;" src="images/head_circle/'+dataTable[hero_number][28]+'.png" height="134px" /></a></span>';
	uzi_l3.innerHTML += '<span style="display:block;width:170px;height:150px;margin:10px auto;margin-top:17px;">ATK<br><a href="hero_en.html?name='+(dataTable[hero_number][29]).replace(/ /g,"%20")+'"><img style="cursor:pointer;margin-top:6px;" src="images/head_circle/'+dataTable[hero_number][29]+'.png" height="134px" /></a></span>';
	drdef = dataTable[hero_number][30].split(",")
	dratk = dataTable[hero_number][31].split(",")
	bond_dr_sum = drdef.length + dratk.length;
	if (bond_dr_sum>=6){widthu="70px";}else{widthu="95px";}
	uzi_dr3.innerHTML = '<span style="display:block;width:170px;height:100%;margin:0 auto;margin-top:10px;white-space:pre-wrap;">Bonds for other</span><br>';
	if (dataTable[hero_number][30]!==''){
		uzi_dr3.innerHTML += '<span style="display:block;width:215px;height:auto;margin:0 auto;white-space:pre-wrap;">DEF<br></span>';
		for (i=0;i<drdef.length;i++){
			uzi_dr3.innerHTML += '<a href="hero_en.html?name='+(drdef[i]).replace(/ /g,"%20")+'"><img style="cursor:pointer;margin-left:5px;" src="images/head_circle/'+drdef[i]+'.png" height="'+widthu+'" /></a>';
		}
	}
	uzi_dr3.innerHTML += '<br>';
	if (dataTable[hero_number][31]!==''){
		uzi_dr3.innerHTML += '<span style="display:block;width:215px;height:auto;margin:0 auto;white-space:pre-wrap;">ATK<br></span>';
		for (i=0;i<dratk.length;i++){
			uzi_dr3.innerHTML += '<a href="hero_en.html?name='+(dratk[i]).replace(/ /g,"%20")+'"><img style="cursor:pointer;margin-left:5px;" style="margin:4px 4px;" src="images/head_circle/'+dratk[i]+'.png" height="'+widthu+'" /></a>';
		}
	}
}

//3C
if (dataTable[hero_number][46]!==''){
	var prob_icon = document.getElementById("prob");
	var c3_pic = document.getElementById("c3_pic");
	var c3_text = document.getElementById("c3_text");
	var c3_hero_pic = document.getElementById("c3_hero_pic");
	var c3_desc = document.getElementById("c3_desc");
	prob_icon.innerHTML='<img src="images/prob_icon.png" height="40px" />';
	kon = persSkills[(dataTable[hero_number][46]-1)][6];
	if (kon>5){kon=5};
	c3_pic.innerHTML='<span style="position:relative;width:100%;display:block;height:100px;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/personal/'+persSkills[(dataTable[hero_number][46]-1)][1]+'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:16px;" src="images/'+persSkills[(dataTable[hero_number][46]-1)][2]+'c.png" height="16px" /></span>';
	c3_text.innerHTML = '<b>'+persSkills[(dataTable[hero_number][46]-1)][0]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="display:inline-block;width:155px;vertical-align:super;margin-right:30px;">'+skill_type[persSkills[(dataTable[hero_number][46]-1)][3]]+'</span><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Cooldown: '+persSkills[(dataTable[hero_number][46]-1)][6]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="display:inline-block;width:155px;vertical-align:super;margin-right:30px;">Range: '+persSkills[(dataTable[hero_number][46]-1)][4]+'</span><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Span: '+persSkills[(dataTable[hero_number][46]-1)][5]+'</span>';
	c3_desc.innerHTML = persSkills[(dataTable[hero_number][46]-1)][7];
	c3_hero_pic.innerHTML = '<img src="images/heroes/heroes_list/'+ heroName +'/3C/3C.png" height="400px" />';
} else {
	var prob_none = document.getElementById("h_info4");
	prob_none.innerHTML = '';
}

var cl00 = document.getElementById("cl00");
var cl10 = document.getElementById("cl10");
var cl11 = document.getElementById("cl11");
var cl12 = document.getElementById("cl12");
var cl20 = document.getElementById("cl20");
var cl21 = document.getElementById("cl21");
var cl22 = document.getElementById("cl22");
var glminus = document.getElementById("glminus");
var glminus2 = document.getElementById("glminus2");
//00
cl00.innerHTML = '<div style="display:block;width:100%;height:176px;position:relative;"><img style="position:absolute;left:575px;top:-13px;" src="images/under_job.png" height="176px;" /><img style="position:absolute;margin:0 auto;top:3px;" src="images/heroes/job/'+heroName+'/00.png" height="105px" /></div>';
if ((dataTable[hero_number][32].split(",").length == dataTable[hero_number][33].split(",").length) || (dataTable[hero_number][32].split(",").length == 2)){dop00='<img id="sha0" style="float:left;margin: 10px 0;" src="images/shadow_all.png" width="100%" height="10px" />';dop01 = '';}else{dop00='';dop01='<img id="sha0" style="float:left;margin: 10px 0;" src="images/shadow_all.png" width="100%" height="10px" />';}
if (dataTable[hero_number][32]!==''){
	pers00 = dataTable[hero_number][32].split(",");
	for (i=0;i<pers00.length;i++){
		if (persSkills[(pers00[i]-1)][2]=='1'){cc='33px';}else{cc='24px';}
		cl00.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/personal/'+ persSkills[pers00[i]-1][1] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+persSkills[(pers00[i]-1)][2]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+persSkills[pers00[i]-1][0]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;display:inline-block;width:156px;">'+skill_type[persSkills[pers00[i]-1][3]]+'</span><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Cooldown: '+persSkills[pers00[i]-1][6]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;display:inline-block;width:156px;">Range: '+persSkills[pers00[i]-1][4]+'</span><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Span: '+persSkills[pers00[i]-1][5]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+persSkills[pers00[i]-1][7]+'</div><br>';
		cl00.innerHTML += dop00;
		dop00='';
	}
}
if (dataTable[hero_number][33]!==''){
	pers002 = dataTable[hero_number][33].split(",");
	for (i=0;i<pers002.length;i++){
		if (commonSkills[(pers002[i]-1)][1]=='1'){cc='33px';}else{cc='24px';}
		cl00.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/common/'+ commonSkills[pers002[i]-1][0] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+commonSkills[(pers002[i]-1)][1]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+commonSkills[pers002[i]-1][7]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;display:inline-block;width:156px;">'+commonSkills[pers002[i]-1][2]+'</span><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Cooldown: '+commonSkills[pers002[i]-1][5]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;display:inline-block;width:156px;">Range: '+commonSkills[pers002[i]-1][3]+'</span><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Span: '+commonSkills[pers002[i]-1][4]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+commonSkills[pers002[i]-1][6]+'</div><br>';
		cl00.innerHTML += dop01;
		dop01='';
	}
}
undw = "125px";
cli = "235px";
//1A
if (dataTable[hero_number][34]=='' && dataTable[hero_number][35]==''){
	if (heroName == 'Алканфель' || heroName == 'Макишима Агито' || heroName == 'Шо Фукамачи' || heroName == 'Мари Роуз' || heroName == 'Ниотэнгу' || heroName == 'Касуми' || heroName == 'Люси' || heroName == 'Эльза' || heroName == 'Нацу'){
		cl10.style.display = 'none';
		cl11.style.width = "100%";
		cl12.style.width = "0";
		cl20.style.display = 'none';
		cl21.style.width = "100%";
		cl22.style.width = "0";
		glminus.style.display = 'none';
		glminus2.style.display = 'none';
		undw = "565px";
		cli = "677px";
		bre = '';
	} else {
		cl10.style.display = 'none';
		cl11.style.width = "50%";
		cl12.style.width = "50%";
		cl20.style.display = 'none';
		cl21.style.width = "50%";
		cl22.style.width = "50%";
		glminus.style.display = 'none';
		glminus2.style.display = 'none';
		undw = "242px";
		cli = "351px";
		bre = '';
	}
} else {
	if (dataTable[hero_number][36]=='' && dataTable[hero_number][37]==''){undw="242px"}
	if (dataTable[hero_number][38]=='' && dataTable[hero_number][39]==''){undw="242px"}
	bre = '<br>';
	cl10.innerHTML = '<div style="display:block;width:100%;height:176px;position:relative;"><img style="position:absolute;left:'+undw+';top:-13px;" src="images/under_job.png" height="176px;" /><img style="position:absolute;margin:0 auto;top:3px;" src="images/heroes/job/'+heroName+'/1A.png" height="105px" /></div>';
	if (dataTable[hero_number][34]!==''){
		pers10 = dataTable[hero_number][34].split(",");
		for (i=0;i<pers10.length;i++){
			if (persSkills[(pers10[i]-1)][2]=='1'){cc='33px';}else{cc='24px';}
			cl10.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/personal/'+ persSkills[pers10[i]-1][1] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+persSkills[(pers10[i]-1)][2]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+persSkills[pers10[i]-1][0]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">'+skill_type[persSkills[pers10[i]-1][3]]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Cooldown: '+persSkills[pers10[i]-1][6]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Range: '+persSkills[pers10[i]-1][4]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Span: '+persSkills[pers10[i]-1][5]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+persSkills[pers10[i]-1][7]+'</div>';
		}
	}
	if (dataTable[hero_number][35]!==''){
		pers102 = dataTable[hero_number][35].split(",");
		for (i=0;i<pers102.length;i++){
			if (commonSkills[(pers102[i]-1)][1]=='1'){cc='33px';}else{cc='24px';}
			cl10.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/common/'+ commonSkills[pers102[i]-1][0] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+commonSkills[(pers102[i]-1)][1]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+commonSkills[pers102[i]-1][7]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">'+commonSkills[pers102[i]-1][2]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Cooldown: '+commonSkills[pers102[i]-1][5]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Range: '+commonSkills[pers102[i]-1][3]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Span: '+commonSkills[pers102[i]-1][4]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+commonSkills[pers102[i]-1][6]+'</div>';
		}
	}
}

//1B
if (dataTable[hero_number][36]=='' && dataTable[hero_number][37]==''){
	if (heroName == 'Алканфель' || heroName == 'Макишима Агито' || heroName == 'Шо Фукамачи' || heroName == 'Мари Роуз' || heroName == 'Ниотэнгу' || heroName == 'Касуми' || heroName == 'Люси' || heroName == 'Эльза' || heroName == 'Нацу'){
		cl10.style.display = 'none';
		cl11.style.width = "100%";
		cl12.style.width = "0";
		cl20.style.display = 'none';
		cl21.style.width = "100%";
		cl22.style.width = "0";
		glminus.style.display = 'none';
		glminus2.style.display = 'none';
		undw = "565px";
		cli = "677px";
		bre = '';
	} else {
		cl10.style.width = '50%';
		cl11.style.display = "none";
		cl12.style.width = "50%";
		cl20.style.width = '50%';
		cl21.style.display = "none";
		cl22.style.width = "50%";
		glminus.style.display = 'none';
		glminus2.style.display = 'none';
		undw = "242px";
		cli = "351px";
		bre = '';
	}
} else {
	bre = '<br>';
	cl11.innerHTML = '<div style="display:block;width:100%;height:176px;position:relative;"><img style="position:absolute;left:'+undw+';top:-13px;" src="images/under_job.png" height="176px;" /><img style="position:absolute;margin:0 auto;top:3px;" src="images/heroes/job/'+heroName+'/1B.png" height="105px" /></div>';
	if (dataTable[hero_number][36]!==''){
		pers11 = dataTable[hero_number][36].split(",");
		for (i=0;i<pers11.length;i++){
			if (persSkills[(pers11[i]-1)][2]=='1'){cc='33px';}else{cc='24px';}
			cl11.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/personal/'+ persSkills[pers11[i]-1][1] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+persSkills[(pers11[i]-1)][2]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+persSkills[pers11[i]-1][0]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">'+skill_type[persSkills[pers11[i]-1][3]]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Cooldown: '+persSkills[pers11[i]-1][6]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Range: '+persSkills[pers11[i]-1][4]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Span: '+persSkills[pers11[i]-1][5]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+persSkills[pers11[i]-1][7]+'</div>';
		}
	}
	if (dataTable[hero_number][37]!==''){
		pers112 = dataTable[hero_number][37].split(",");
		for (i=0;i<pers112.length;i++){
			if (commonSkills[(pers112[i]-1)][1]=='1'){cc='33px';}else{cc='24px';}
			cl11.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/common/'+ commonSkills[pers112[i]-1][0] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+commonSkills[(pers112[i]-1)][1]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+commonSkills[pers112[i]-1][7]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">'+commonSkills[pers112[i]-1][2]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Cooldown: '+commonSkills[pers112[i]-1][5]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Range: '+commonSkills[pers112[i]-1][3]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Span: '+commonSkills[pers112[i]-1][4]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+commonSkills[pers112[i]-1][6]+'</div>';
		}
	}
}
//1C
if (dataTable[hero_number][38]=='' && dataTable[hero_number][39]==''){
	if (heroName == 'Алканфель' || heroName == 'Макишима Агито' || heroName == 'Шо Фукамачи' || heroName == 'Мари Роуз' || heroName == 'Ниотэнгу' || heroName == 'Касуми' || heroName == 'Люси' || heroName == 'Эльза' || heroName == 'Нацу'){
		cl10.style.display = 'none';
		cl11.style.width = "100%";
		cl12.style.width = "0";
		cl20.style.display = 'none';
		cl21.style.width = "100%";
		cl22.style.width = "0";
		glminus.style.display = 'none';
		glminus2.style.display = 'none';
		undw = "565px";
		cli = "677px";
		bre = '';
	} else {
		cl10.style.width = '50%';
		cl11.style.width = "50%";
		cl12.style.display = "none";
		cl20.style.width = '50%';
		cl21.style.width = "50%";
		cl22.style.display = "none";
		glminus.style.display = 'none';
		glminus2.style.display = 'none';
		undw = "242px";
		cli = "351px";
		bre = '';
	}
} else {
	bre = '<br>';
	cl12.innerHTML = '<div style="display:block;width:100%;height:176px;position:relative;"><img style="position:absolute;left:'+undw+';top:-13px;" src="images/under_job.png" height="176px;" /><img style="position:absolute;margin:0 auto;top:3px;" src="images/heroes/job/'+heroName+'/1C.png" height="105px" /></div>';
	if (dataTable[hero_number][38]!==''){
		pers12 = dataTable[hero_number][38].split(",");
		for (i=0;i<pers12.length;i++){
			if (persSkills[(pers12[i]-1)][2]=='1'){cc='33px';}else{cc='24px';}
			cl12.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/personal/'+ persSkills[pers12[i]-1][1] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+persSkills[(pers12[i]-1)][2]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+persSkills[pers12[i]-1][0]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">'+skill_type[persSkills[pers12[i]-1][3]]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Cooldown: '+persSkills[pers12[i]-1][6]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Range: '+persSkills[pers12[i]-1][4]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Span: '+persSkills[pers12[i]-1][5]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+persSkills[pers12[i]-1][7]+'</div>';
		}
	}
	if (dataTable[hero_number][39]!==''){
		pers122 = dataTable[hero_number][39].split(",");
		for (i=0;i<pers122.length;i++){
			if (commonSkills[(pers122[i]-1)][1]=='1'){cc='33px';}else{cc='24px';}
			cl12.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/common/'+ commonSkills[pers122[i]-1][0] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+commonSkills[(pers122[i]-1)][1]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+commonSkills[pers122[i]-1][7]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">'+commonSkills[pers122[i]-1][2]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Cooldown: '+commonSkills[pers122[i]-1][5]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Range: '+commonSkills[pers122[i]-1][3]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Span: '+commonSkills[pers122[i]-1][4]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+commonSkills[pers122[i]-1][6]+'</div>';
		}
	}
}
glowheight = document.getElementById("cl10");
glh = glowheight.scrollHeight;
glowH = document.getElementsByClassName("glowH");
for (i=0;i<glowH.length;i++){
	glowH[i].style.height = glh+'px';
}
//2A
if ((dataTable[hero_number][40].split(",").length == dataTable[hero_number][41].split(",").length) || (dataTable[hero_number][40].split(",").length == 2)){dop10='<img id="sha0" style="float:left;margin: 10px 0;" src="images/shadow_all.png" width="100%" height="10px" />';dop11 = '';}else{dop10='';dop11='<img id="sha0" style="float:left;margin: 10px 0;" src="images/shadow_all.png" width="100%" height="10px" />';}
if (dataTable[hero_number][40]!=='' || dataTable[hero_number][41]!==''){
	cl20.innerHTML = '<div style="display:block;width:100%;height:176px;position:relative;"><img style="position:absolute;left:'+undw+';top:-13px;" src="images/under_job.png" height="176px;" /><img style="position:absolute;margin:0 auto;top:3px;" src="images/heroes/job/'+heroName+'/2A.png" height="105px" /><img style="position:absolute;top:98px;left:'+cli+';" src="images/classes/'+classStats[chb[0]-1][2]+'.png" height="35px" /></div>';
	if (dataTable[hero_number][40]!==''){
		pers20 = dataTable[hero_number][40].split(",");
		for (i=0;i<pers20.length;i++){
			if (persSkills[(pers20[i]-1)][2]=='1'){cc='33px';}else{cc='24px';}
			j = i;
			cl20.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/personal/'+ persSkills[pers20[i]-1][1] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+persSkills[(pers20[i]-1)][2]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+persSkills[pers20[i]-1][0]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">'+skill_type[persSkills[pers20[i]-1][3]]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Cooldown: '+persSkills[pers20[i]-1][6]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Range: '+persSkills[pers20[i]-1][4]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Span: '+persSkills[pers20[i]-1][5]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+persSkills[pers20[i]-1][7]+'</div>';
			cl20.innerHTML += dop10;
			dop10='';
		}
	}
	if (dataTable[hero_number][41]!==''){
		pers202 = dataTable[hero_number][41].split(",");
		for (i=0;i<pers202.length;i++){
			if (commonSkills[(pers202[i]-1)][1]=='1'){cc='33px';}else{cc='24px';}
			sha1 = document.getElementById("sha1");
			cl20.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/common/'+ commonSkills[pers202[i]-1][0] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+commonSkills[(pers202[i]-1)][1]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+commonSkills[pers202[i]-1][7]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">'+commonSkills[pers202[i]-1][2]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Cooldown: '+commonSkills[pers202[i]-1][5]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Range: '+commonSkills[pers202[i]-1][3]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Span: '+commonSkills[pers202[i]-1][4]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+commonSkills[pers202[i]-1][6]+'</div>';
			cl20.innerHTML += dop11;
			dop11='';
		}
	}
}
//2B
if ((dataTable[hero_number][42].split(",").length == dataTable[hero_number][43].split(",").length) || (dataTable[hero_number][42].split(",").length ==2)){dop20='<img id="sha0" style="float:left;margin: 10px 0;" src="images/shadow_all.png" width="100%" height="10px" />';dop21 = '';}else{dop20='';dop21='<img id="sha0" style="float:left;margin: 10px 0;" src="images/shadow_all.png" width="100%" height="10px" />';}
if (dataTable[hero_number][42]!=='' || dataTable[hero_number][43]!==''){
	if (dataTable[hero_number][40]!=='' || dataTable[hero_number][41]!==''){
		cl21.innerHTML = '<div style="display:block;width:100%;height:176px;position:relative;"><img style="position:absolute;left:'+undw+';top:-13px;" src="images/under_job.png" height="176px;" /><img style="position:absolute;margin:0 auto;top:3px;" src="images/heroes/job/'+heroName+'/2B.png" height="105px" /><img style="position:absolute;top:98px;left:'+cli+';" src="images/classes/'+classStats[chb[1]-1][2]+'.png" height="35px" /></div>';
	} else {
		cl21.innerHTML = '<div style="display:block;width:100%;height:176px;position:relative;"><img style="position:absolute;left:'+undw+';top:-13px;" src="images/under_job.png" height="176px;" /><img style="position:absolute;margin:0 auto;top:3px;" src="images/heroes/job/'+heroName+'/2B.png" height="105px" /><img style="position:absolute;top:98px;left:'+cli+';" src="images/classes/'+classStats[chb[0]-1][2]+'.png" height="35px" /></div>';
	}
	if (dataTable[hero_number][42]!==''){
		pers21 = dataTable[hero_number][42].split(",");
		for (i=0;i<pers21.length;i++){
			if (persSkills[(pers21[i]-1)][2]=='1'){cc='33px';}else{cc='24px';}
			j = i;
			cl21.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/personal/'+ persSkills[pers21[i]-1][1] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+persSkills[(pers21[i]-1)][2]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+persSkills[pers21[i]-1][0]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">'+skill_type[persSkills[pers21[i]-1][3]]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Cooldown: '+persSkills[pers21[i]-1][6]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Range: '+persSkills[pers21[i]-1][4]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Span: '+persSkills[pers21[i]-1][5]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+persSkills[pers21[i]-1][7]+'</div>';
			cl21.innerHTML += dop20;
			dop20='';
		}
	}
	if (dataTable[hero_number][43]!==''){
		pers212 = dataTable[hero_number][43].split(",");
		for (i=0;i<pers212.length;i++){
			if (commonSkills[(pers212[i]-1)][1]=='1'){cc='33px';}else{cc='24px';}
			sha2 = document.getElementById("sha2");
			cl21.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/common/'+ commonSkills[pers212[i]-1][0] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+commonSkills[(pers212[i]-1)][1]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+commonSkills[pers212[i]-1][7]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">'+commonSkills[pers212[i]-1][2]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Cooldown: '+commonSkills[pers212[i]-1][5]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Range: '+commonSkills[pers212[i]-1][3]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Span: '+commonSkills[pers212[i]-1][4]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+commonSkills[pers212[i]-1][6]+'</div>';
			cl21.innerHTML += dop21;
			dop21='';
		}
	}
}
//2C
if (dataTable[hero_number][44].split(",").length == dataTable[hero_number][45].split(",").length){dop30='<img id="sha0" style="float:left;margin: 10px 0;" src="images/shadow_all.png" width="100%" height="10px" />';dop31 = '';}else{dop30='<img id="sha0" style="float:left;margin: 10px 0;" src="images/shadow_all.png" width="100%" height="10px" />';dop31='<img id="sha0" style="float:left;margin: 10px 0;" src="images/shadow_all.png" width="100%" height="10px" />';}
if (dataTable[hero_number][44]!=='' || dataTable[hero_number][45]!==''){
	if ((dataTable[hero_number][40]!=='' || dataTable[hero_number][41]!=='') && (dataTable[hero_number][42]!=='' || dataTable[hero_number][43]!=='')){
		cl22.innerHTML = '<div style="display:block;width:100%;height:176px;position:relative;"><img style="position:absolute;left:'+undw+';top:-13px;" src="images/under_job.png" height="176px;" /><img style="position:absolute;margin:0 auto;top:3px;" src="images/heroes/job/'+heroName+'/2C.png" height="105px" /><img style="position:absolute;top:98px;left:'+cli+';" src="images/classes/'+classStats[chb[2]-1][2]+'.png" height="35px" /></div>';
	} else {
		cl22.innerHTML = '<div style="display:block;width:100%;height:176px;position:relative;"><img style="position:absolute;left:'+undw+';top:-13px;" src="images/under_job.png" height="176px;" /><img style="position:absolute;margin:0 auto;top:3px;" src="images/heroes/job/'+heroName+'/2C.png" height="105px" /><img style="position:absolute;top:98px;left:'+cli+';" src="images/classes/'+classStats[chb[1]-1][2]+'.png" height="35px" /></div>';
	}
	if (dataTable[hero_number][44]!==''){
		pers22 = dataTable[hero_number][44].split(",");
		for (i=0;i<pers22.length;i++){
			if (persSkills[(pers22[i]-1)][2]=='1'){cc='33px';}else{cc='24px';}
			j = i;
			cl22.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/personal/'+ persSkills[pers22[i]-1][1] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+persSkills[(pers22[i]-1)][2]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+persSkills[pers22[i]-1][0]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">'+skill_type[persSkills[pers22[i]-1][3]]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Cooldown: '+persSkills[pers22[i]-1][6]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Range: '+persSkills[pers22[i]-1][4]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Span: '+persSkills[pers22[i]-1][5]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+persSkills[pers22[i]-1][7]+'</div>';
			cl22.innerHTML += dop30;
			dop30='';
		}
	}
	if (dataTable[hero_number][45]!==''){
		pers222 = dataTable[hero_number][45].split(",");
		for (i=0;i<pers222.length;i++){
			if (commonSkills[(pers222[i]-1)][1]=='1'){cc='33px';}else{cc='24px';}
			sha3 = document.getElementById("sha3");
			cl22.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/common/'+ commonSkills[pers222[i]-1][0] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+commonSkills[(pers222[i]-1)][1]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+commonSkills[pers222[i]-1][7]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">'+commonSkills[pers222[i]-1][2]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Cooldown: '+commonSkills[pers222[i]-1][5]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Range: '+commonSkills[pers222[i]-1][3]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Span: '+commonSkills[pers222[i]-1][4]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+commonSkills[pers222[i]-1][6]+'</div>';
			cl22.innerHTML += dop31;
			dop31='';
		}
	}
}
glowheight2 = document.getElementById("cl20");
glh2 = glowheight2.scrollHeight;
glowH2 = document.getElementsByClassName("glowH2");
for (i=0;i<glowH2.length;i++){
	glowH2[i].style.height = glh2+'px';
}
//SP
var clSP = document.getElementById("clSP");
if (dataTable[hero_number][47]==''){
	clSP.style.display = 'none';
} else {
	if (dataTable[hero_number][47]!==''){SPclass='/SP/'}else{SPclass=''}
	cl20.style["border-bottom"] = "2px solid antiquewhite";
	cl20.style["padding-bottom"] = "15px";
	cl21.style["border-bottom"] = "2px solid antiquewhite";
	cl21.style["padding-bottom"] = "15px";
	cl22.style["border-bottom"] = "2px solid antiquewhite";
	cl22.style["padding-bottom"] = "15px";
	if (!(chb[2]-1)){
		clSP.innerHTML = '<div style="display:block;width:100%;height:176px;position:relative;"><img style="position:absolute;left:575px;top:-13px;" src="images/under_job.png" height="176px;" /><img style="position:absolute;margin:0 auto;top:3px;" src="images/heroes/job/'+heroName+'/SP.png" height="105px" /><img style="position:absolute;top:98px;left:687px;" src="images/classes/'+SPclass+classStats[chb[1]-1][2]+'.png" height="35px" /></div>';
	} else {
		clSP.innerHTML = '<div style="display:block;width:100%;height:176px;position:relative;"><img style="position:absolute;left:575px;top:-13px;" src="images/under_job.png" height="176px;" /><img style="position:absolute;margin:0 auto;top:3px;" src="images/heroes/job/'+heroName+'/SP.png" height="105px" /><img style="position:absolute;top:98px;left:687px;" src="images/classes/'+SPclass+classStats[chb[2]-1][2]+'.png" height="35px" /></div>';
	}
	persSP = dataTable[hero_number][47].split(",");
	for (i=0;i<persSP.length;i++){
		if (SPskills[(persSP[i]-1)][2]=='1'){cc='33px';}else{cc='24px';}
		if (i==0){fl = "left";} else {fl = "right";}
		clSP.innerHTML += '<div style="display:block;width:48%;height:auto;float:'+fl+';"><div style="text-align:left;display:block;width:90%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/SP skills/'+ SPskills[persSP[i]-1][1] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+SPskills[(persSP[i]-1)][2]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b style="vertical-align:top;">'+SPskills[persSP[i]-1][0]+'</b>  <img src="images/sp skill.png"  height="20px" /><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;display:inline-block;width:156px;">'+skill_type[SPskills[persSP[i]-1][3]]+'</span><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Cooldown: '+SPskills[persSP[i]-1][6]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;display:inline-block;width:156px;">Range: '+SPskills[persSP[i]-1][4]+'</span><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Span: '+SPskills[persSP[i]-1][5]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+SPskills[persSP[i]-1][7]+'</div></div>';
	}
}

//builds
var h_info5 = document.getElementById("h_info5");
var mozaik3 = document.getElementById("mozaik3");
//h_info5.innerHTML='';
//mozaik3.style.display="none";
if (startB[hero_number][1]==''){
	if (builds[hero_number][4]!==''){
		var b_weapon = document.getElementById("b_weapon");
		var b_body = document.getElementById("b_body");
		var b_head = document.getElementById("b_head");
		var b_acc = document.getElementById("b_acc");
		var b_sold = document.getElementById("b_sold");
		var b_chari = document.getElementById("b_chari");
		var b_pve = document.getElementById("b_pve");
		var b_pvp = document.getElementById("b_pvp");
		bweap = builds[hero_number][4].split(",");
		bbody = builds[hero_number][5].split(",");
		bhead = builds[hero_number][6].split(",");
		bacc = builds[hero_number][7].split(",");
		bsold = builds[hero_number][8].split(",");
		bchari = builds[hero_number][1].split(",");
		for (i=0;i<bweap.length;i++){
			b_weapon.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/itemIcons/all/'+bweap[i]+'.png" height="70px" /></span>';
		}
		for (i=0;i<bbody.length;i++){
			b_body.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/itemIcons/all/'+bbody[i]+'.png" height="70px" /></span>';
		}
		for (i=0;i<bhead.length;i++){
			b_head.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/itemIcons/all/'+bhead[i]+'.png" height="70px" /></span>';
		}
		for (i=0;i<bacc.length;i++){
			b_acc.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/itemIcons/all/'+bacc[i]+'.png" height="70px" /></span>';
		}
		for (i=0;i<bsold.length;i++){
			b_sold.innerHTML += '<span style="margin-left:3px;height:auto;display:block;width:115px;float:left;"><img src="images/soldIcons/all/'+bsold[i]+'.png" height="145px" /></span>';
		}
		for (i=0;i<bchari.length;i++){
			b_chari.innerHTML += '<span style="margin:5px;height:auto;display:block;width:70px;float:left;"><img src="images/chari/'+bchari[i]+'.png" height="70px" /></span>';
		}
		b_pve.innerHTML = '<span>PVE</span><br>';
		for (i=0;i<builds[hero_number][2];i++){
			b_pve.innerHTML += '<span style="margin:5px;height:auto;display:block;width:35px;float:left;"><img src="images/star.png" height="35px" /></span>';
		}
		b_pvp.innerHTML = '<span>PVP</span><br>';
		for (i=0;i<builds[hero_number][3];i++){
			b_pvp.innerHTML += '<span style="margin:5px;height:auto;display:block;width:35px;float:left;"><img src="images/star.png" height="35px" /></span>';
		}
	} else {
		h_info5.innerHTML='';
		mozaik3.style.display="none";
	}
	//SP build
	if (dataTable[hero_number][47]!==''){
		if (dataTable[hero_number][27].split(",").length!==2){
			h_info5.innerHTML += '<img src="images/shadow.png" width="100%" height="20px" /><div style="display:block;width:100%;height:auto;text-align:center;margin-top:5px;"><img src="images/hero_filter/range/SP.png" height="40px;"/></div>';
		} else {
			mozaik3.style.display="block";
			h_info5.innerHTML += '<div style="display:block;width:100%;height:auto;text-align:center;margin-top:5px;">SP</div>';
		}
			h_info5.innerHTML += '<table border="0" style="width:90%;margin:0 auto;"><tr><td style="width:9%;"><img src="images/item_type/weapon.png" height="50px" /></td><td id="b_weaponsp" style="width:32%;text-align:left;"></td><td style="width:5%;"></td><td style="width:7%;"><img src="images/chant.png" height="70px" /></td><td style="width:5%;"></td><td  id="b_soldsp" style="width:42%;" colspan="2" rowspan="2"></td></tr><tr><td><img src="images/item_type/body.png" height="50px" /></td><td id="b_bodysp"style="text-align:left;" ></td><td style="vertical-align:middle;"><img src="images/point.png" height="30px" /></td><td id="b_charisp" rowspan="3" style="vertical-align:top;"></td><td style="vertical-align:middle;"><img src="images/point.png" height="30px" /></td></tr><tr><td><img src="images/item_type/head.png" height="50px" /></td><td id="b_headsp" style="text-align:left;"></td><td></td><td></td><td id="b_pvesp" style="width:21%;vertical-align:top;text-align:left;"></td><td id="b_pvpsp" style="width:21%;vertical-align:top;text-align:left;"></td></tr><tr><td><img src="images/item_type/accessoir.png" height="50px" /></td><td id="b_accsp" style="text-align:left;"></td><td></td></tr></table>';
			var b_weaponsp = document.getElementById("b_weaponsp");
			var b_bodysp = document.getElementById("b_bodysp");
			var b_headsp = document.getElementById("b_headsp");
			var b_accsp = document.getElementById("b_accsp");
			var b_soldsp = document.getElementById("b_soldsp");
			var b_charisp = document.getElementById("b_charisp");
			var b_pvesp = document.getElementById("b_pvesp");
			var b_pvpsp = document.getElementById("b_pvpsp");
			bweapsp = SPbuilds[dataTable[hero_number][48]-1][4].split(",");
			bbodysp = SPbuilds[dataTable[hero_number][48]-1][5].split(",");
			bheadsp = SPbuilds[dataTable[hero_number][48]-1][6].split(",");
			baccsp = SPbuilds[dataTable[hero_number][48]-1][7].split(",");
			bsoldsp = SPbuilds[dataTable[hero_number][48]-1][8].split(",");
			bcharisp = SPbuilds[dataTable[hero_number][48]-1][1].split(",");
			for (i=0;i<bweapsp.length;i++){
				b_weaponsp.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/itemIcons/all/'+bweapsp[i]+'.png" height="70px" /></span>';
			}
			for (i=0;i<bbodysp.length;i++){
				b_bodysp.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/itemIcons/all/'+bbodysp[i]+'.png" height="70px" /></span>';
			}
			for (i=0;i<bheadsp.length;i++){
				b_headsp.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/itemIcons/all/'+bheadsp[i]+'.png" height="70px" /></span>';
			}
			for (i=0;i<baccsp.length;i++){
				b_accsp.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/itemIcons/all/'+baccsp[i]+'.png" height="70px" /></span>';
			}
			for (i=0;i<bsoldsp.length;i++){
				b_soldsp.innerHTML += '<span style="margin-left:3px;height:auto;display:block;width:115px;float:left;"><img src="images/soldIcons/all/'+bsoldsp[i]+'.png" height="145px" /></span>';
			}
			for (i=0;i<bcharisp.length;i++){
				b_charisp.innerHTML += '<span style="margin:5px;height:auto;display:block;width:70px;float:left;"><img src="images/chari/'+bcharisp[i]+'.png" height="70px" /></span>';
			}
			b_pvesp.innerHTML = '<span>PVE</span><br>';
			for (i=0;i<SPbuilds[dataTable[hero_number][48]-1][2];i++){
				b_pvesp.innerHTML += '<span style="margin:5px;height:auto;display:block;width:35px;float:left;"><img src="images/star.png" height="35px" /></span>';
			}
			b_pvpsp.innerHTML = '<span>PVP</span><br>';
			for (i=0;i<SPbuilds[dataTable[hero_number][48]-1][3];i++){
				b_pvpsp.innerHTML += '<span style="margin:5px;height:auto;display:block;width:35px;float:left;"><img src="images/star.png" height="35px" /></span>';
			}
	}
} else {
	h_info5.innerHTML='';
	mozaik3.style.display="block";
	h_info5.innerHTML+='<div style="display:block;width:100%;height:auto;text-align:center;font-size:20px;margin-bottom:20px;font-weight: bold;">Rating and recommendations for hero development</div>';
	h_info5.innerHTML+='<div style="display: -webkit-box;"><div onclick=startBuildOpen() class="color_hover" id="startbut" style="display:block;width:178px;height:118px;margin:30px 60px 30px 330px;cursor:pointer;position:relative;"><img src="images/start1.png" width="180px"><span style="position:absolute;left: 62px;top: 75px;">Starting</span></div><div onclick=baseBuildOpen() class="color_hover" id="basebut" style="display:block;width:178px;height:118px;cursor:pointer;position:relative;margin-top:30px;"><img src="images/base1.png" width="180px"><span style="position:absolute;left: 72px;top: 75px;">Basic</span></div><div onclick=bestBuildOpen() class="color_hover" id="bestbut" style="display:block;width:178px;height:118px;margin-left:60px;cursor:pointer;position:relative;margin-top:30px;"><img src="images/best1.png" width="180px"><span style="position:absolute;left: 75px;top: 75px;">Best</span></div></div>';
	
	if (startB[hero_number][1]!==''){
		st_ocenka = startB[hero_number][1];
		st_sold = startB[hero_number][2].split(",");
		st_chari = startB[hero_number][3].split(",");
		st_weapon = startB[hero_number][4].split(",");
		st_body = startB[hero_number][5].split(",");
		st_hat = startB[hero_number][6].split(",");
		st_acc = startB[hero_number][7].split(",");
		h_info5.innerHTML += '<div id="start_temp" class="display_none"><div id="stB" style="display:block;width:100%;height:auto;margin-bottom:20px;margin-top:20px;"><img src="images/start2.png" width="1320px"></div><table border="0" style="width:95%;margin:0 auto;"><tr><td style="width:9%;"><img src="images/item_type/weapon.png" height="50px" /></td><td id="stB_weapon" style="width:32%;text-align:left;"></td><td style="width:5%;"></td><td style="width:7%;"><img src="images/chant.png" height="70px" /></td><td style="width:5%;"></td><td id="stB_sold" style="width:42%;" colspan="2" rowspan="2"></td></tr><tr><td><img src="images/item_type/body.png" height="50px" /></td><td id="stB_body"style="text-align:left;" ></td><td style="vertical-align: middle;"><img src="images/point.png" height="30px" /></td><td id="stB_chari" rowspan="3" style="vertical-align:top;"></td><td style="vertical-align: middle;"><img src="images/point.png" height="30px" /></td></tr><tr><td><img src="images/item_type/head.png" height="50px" /></td><td id="stB_head" style="text-align:left;"></td><td></td><td></td><td colspan="2" id="stB_ocenka" style="width:42%;vertical-align:top;text-align:left;"></td></tr><tr><td><img src="images/item_type/accessoir.png" height="50px" /></td><td id="stB_acc" style="text-align:left;"></td><td></td></tr></table></div>';
		var stB_weapon = document.getElementById("stB_weapon");
		var stB_body = document.getElementById("stB_body");
		var stB_head = document.getElementById("stB_head");
		var stB_acc = document.getElementById("stB_acc");
		var stB_sold = document.getElementById("stB_sold");
		var stB_chari = document.getElementById("stB_chari");
		var stB_ocenka = document.getElementById("stB_ocenka");
		for (i=0;i<st_weapon.length;i++){
			stB_weapon.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/itemIcons/sr/'+st_weapon[i]+'.png" height="70px" /></span>';
		}
		for (i=0;i<st_body.length;i++){
			stB_body.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/itemIcons/sr/'+st_body[i]+'.png" height="70px" /></span>';
		}
		for (i=0;i<st_hat.length;i++){
			stB_head.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/itemIcons/sr/'+st_hat[i]+'.png" height="70px" /></span>';
		}
		for (i=0;i<st_acc.length;i++){
			stB_acc.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/itemIcons/sr/'+st_acc[i]+'.png" height="70px" /></span>';
		}
		for (i=0;i<st_sold.length;i++){
			stB_sold.innerHTML += '<span style="margin-left:3px;height:auto;display:block;width:115px;float:left;"><img src="images/soldIcons/all/'+st_sold[i]+'.png" height="145px" /></span>';
		}
		for (i=0;i<st_chari.length;i++){
			stB_chari.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/chari/'+st_chari[i]+'.png" height="70px" /></span>';
		}
		stB_ocenka.innerHTML = '<span>PVE</span><br>';
		n=0;
		for (i=0;i<Math.floor(st_ocenka/1);i++){
			stB_ocenka.innerHTML += '<span style="margin:5px;height:auto;display:block;width:35px;float:left;"><img src="images/star.png" height="35px" /></span>';
			n++;
		}
		if ((st_ocenka%n)!==0){
			stB_ocenka.innerHTML += '<span style="margin:5px;height:auto;display:block;width:35px;float:left;"><img src="images/star_polovina.png" height="35px" /></span>';
		}
	}
	if (basicB[hero_number][1]!==''){
		bas_ocenka = basicB[hero_number][1];
		bas_sold = basicB[hero_number][2].split(",");
		bas_chari = basicB[hero_number][3].split(",");
		bas_weapon = basicB[hero_number][4].split(",");
		bas_body = basicB[hero_number][5].split(",");
		bas_hat = basicB[hero_number][6].split(",");
		bas_acc = basicB[hero_number][7].split(",");
		h_info5.innerHTML += '<div id="base_temp" class="display_none"><div id="basB" style="display:block;width:100%;height:auto;margin-bottom:0px;"><img src="images/base2.png" width="1320px"></div><div style="display:block;width:100%;height:auto;text-align:center;font-size:17px;margin-bottom:20px;">*It is recommended to upgrade equipment with copies</div><table border="0" style="width:95%;margin:0 auto;"><tr><td style="width:9%;"><img src="images/item_type/weapon.png" height="50px" /></td><td id="basB_weapon" style="width:32%;text-align:left;"></td><td style="width:5%;"></td><td style="width:7%;"><img src="images/chant.png" height="70px" /></td><td style="width:5%;"></td><td id="basB_sold" style="width:42%;" colspan="2" rowspan="2"></td></tr><tr><td><img src="images/item_type/body.png" height="50px" /></td><td id="basB_body"style="text-align:left;" ></td><td style="vertical-align: middle;"><img src="images/point.png" height="30px" /></td><td id="basB_chari" rowspan="3" style="vertical-align:top;"></td><td style="vertical-align: middle;"><img src="images/point.png" height="30px" /></td></tr><tr><td><img src="images/item_type/head.png" height="50px" /></td><td id="basB_head" style="text-align:left;"></td><td></td><td></td><td colspan="2" id="basB_ocenka" style="width:42%;vertical-align:top;text-align:left;"></td></tr><tr><td><img src="images/item_type/accessoir.png" height="50px" /></td><td id="basB_acc" style="text-align:left;"></td><td></td></tr></table></div>';
		var basB_weapon = document.getElementById("basB_weapon");
		var basB_body = document.getElementById("basB_body");
		var basB_head = document.getElementById("basB_head");
		var basB_acc = document.getElementById("basB_acc");
		var basB_sold = document.getElementById("basB_sold");
		var basB_chari = document.getElementById("basB_chari");
		var basB_ocenka = document.getElementById("basB_ocenka");
		for (i=0;i<bas_weapon.length;i++){
			basB_weapon.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/itemIcons/all/'+bas_weapon[i]+'.png" height="70px" /></span>';
		}
		for (i=0;i<bas_body.length;i++){
			basB_body.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/itemIcons/all/'+bas_body[i]+'.png" height="70px" /></span>';
		}
		for (i=0;i<bas_hat.length;i++){
			basB_head.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/itemIcons/all/'+bas_hat[i]+'.png" height="70px" /></span>';
		}
		for (i=0;i<bas_acc.length;i++){
			basB_acc.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/itemIcons/all/'+bas_acc[i]+'.png" height="70px" /></span>';
		}
		for (i=0;i<bas_sold.length;i++){
			basB_sold.innerHTML += '<span style="margin-left:3px;height:auto;display:block;width:115px;float:left;"><img src="images/soldIcons/all/'+bas_sold[i]+'.png" height="145px" /></span>';
		}
		for (i=0;i<bas_chari.length;i++){
			basB_chari.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/chari/'+bas_chari[i]+'.png" height="70px" /></span>';
		}
		basB_ocenka.innerHTML = '<span>PVE</span><br>';
		n=0;
		for (i=0;i<Math.floor(bas_ocenka/1);i++){
			basB_ocenka.innerHTML += '<span style="margin:5px;height:auto;display:block;width:35px;float:left;"><img src="images/star.png" height="35px" /></span>';
			n++;
		}
		if ((bas_ocenka%n)!==0){
			basB_ocenka.innerHTML += '<span style="margin:5px;height:auto;display:block;width:35px;float:left;"><img src="images/star_polovina.png" height="35px" /></span>';
		}
	}
	if (pveB[hero_number][1]!==''){
		pve_ocenka = pveB[hero_number][1];
		pve_sold = pveB[hero_number][2].split(",");
		pve_chari = pveB[hero_number][3].split(",");
		pve_weapon = pveB[hero_number][4].split(",");
		pve_body = pveB[hero_number][5].split(",");
		pve_hat = pveB[hero_number][6].split(",");
		pve_acc = pveB[hero_number][7].split(",");
		pve_wst = pveB[hero_number][8].split(",");
		pve_bst = pveB[hero_number][9].split(",");
		pve_hst = pveB[hero_number][10].split(",");
		pve_ast = pveB[hero_number][11].split(",");
		h_info5.innerHTML += '<div id="best_temp" class="display_none"><div id="pveB" style="display:block;width:100%;height:auto;margin-bottom:0px;"><img src="images/best2.png" width="1320px"></div><div style="display:block;width:100%;height:auto;text-align:center;font-size:17px;margin-bottom:20px;">*If the Best version contains equipment from the Basic build, it is better to upgrade such equipment with copies.<br>It is recommended to upgrade other types of equipment with shards</div><table border="0" style="width:95%;margin:0 auto;"><tr><td style="width:9%;"><img src="images/item_type/weapon.png" height="50px" /></td><td id="weapon_stone" style="width:2%;white-space:pre-wrap;"></td><td id="pveB_weapon" style="width:32%;text-align:left;"></td><td style="width:5%;"></td><td style="width:7%;"><img src="images/chant.png" height="70px" /></td><td style="width:5%;"></td><td id="pveB_sold" style="width:42%;" colspan="2" rowspan="2"></td></tr><tr><td><img src="images/item_type/body.png" height="50px" /></td><td id="body_stone" style="white-space:pre-wrap;"></td><td id="pveB_body"style="text-align:left;" ></td><td style="vertical-align: middle;"><img src="images/point.png" height="30px" /></td><td id="pveB_chari" rowspan="3" style="vertical-align:top;"></td><td style="vertical-align: middle;"><img src="images/point.png" height="30px" /></td></tr><tr><td><img src="images/item_type/head.png" height="50px" /></td><td id="hat_stone" style="white-space:pre-wrap;"></td><td id="pveB_head" style="text-align:left;"></td><td></td><td></td><td colspan="2" id="pveB_ocenka" style="width:42%;vertical-align:top;text-align:left;"></td></tr><tr><td><img src="images/item_type/accessoir.png" height="50px" /></td><td id="acc_stone" style=";white-space:pre-wrap;"></td><td id="pveB_acc" style="text-align:left;"></td><td></td></td></tr></table></div>';
		var pveB_weapon = document.getElementById("pveB_weapon");
		var pveB_body = document.getElementById("pveB_body");
		var pveB_head = document.getElementById("pveB_head");
		var pveB_acc = document.getElementById("pveB_acc");
		var pveB_sold = document.getElementById("pveB_sold");
		var pveB_chari = document.getElementById("pveB_chari");
		var pveB_ocenka = document.getElementById("pveB_ocenka");
		var weapon_stone = document.getElementById("weapon_stone");
		var body_stone = document.getElementById("body_stone");
		var hat_stone = document.getElementById("hat_stone");
		var acc_stone = document.getElementById("acc_stone");
		for (i=0;i<pve_weapon.length;i++){
			pveB_weapon.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/itemIcons/all/'+pve_weapon[i]+'.png" height="70px" /></span>';
		}
		for (i=0;i<pve_body.length;i++){
			pveB_body.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/itemIcons/all/'+pve_body[i]+'.png" height="70px" /></span>';
		}
		for (i=0;i<pve_hat.length;i++){
			pveB_head.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/itemIcons/all/'+pve_hat[i]+'.png" height="70px" /></span>';
		}
		for (i=0;i<pve_acc.length;i++){
			pveB_acc.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/itemIcons/all/'+pve_acc[i]+'.png" height="70px" /></span>';
		}
		for (i=0;i<pve_sold.length;i++){
			pveB_sold.innerHTML += '<span style="margin-left:3px;height:auto;display:block;width:115px;float:left;"><img src="images/soldIcons/all/'+pve_sold[i]+'.png" height="145px" /></span>';
		}
		for (i=0;i<pve_chari.length;i++){
			pveB_chari.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/chari/'+pve_chari[i]+'.png" height="70px" /></span>';
		}
		pveB_ocenka.innerHTML = '<span>PVE</span><br>';
		n=0;
		for (i=0;i<Math.floor(pve_ocenka/1);i++){
			pveB_ocenka.innerHTML += '<span style="margin:5px;height:auto;display:block;width:35px;float:left;"><img src="images/star.png" height="35px" /></span>';
			n++;
		}
		if ((pve_ocenka%n)!==0){
			pveB_ocenka.innerHTML += '<span style="margin:5px;height:auto;display:block;width:35px;float:left;"><img src="images/star_polovina.png" height="35px" /></span>';
		}
		for (i=0;i<pve_wst.length;i++){
			weapon_stone.innerHTML += '<img style="margin-bottom:-5px;" src="images/stones/'+pve_wst[i]+'.png" height="25px" />';
		}
		for (i=0;i<pve_bst.length;i++){
			body_stone.innerHTML += '<img style="margin-bottom:-5px;" src="images/stones/'+pve_bst[i]+'.png" height="25px" />';
		}
		for (i=0;i<pve_hst.length;i++){
			hat_stone.innerHTML += '<img style="margin-bottom:-5px;" src="images/stones/'+pve_hst[i]+'.png" height="25px" />';
		}
		for (i=0;i<pve_ast.length;i++){
			acc_stone.innerHTML += '<img style="margin-bottom:-5px;" src="images/stones/'+pve_ast[i]+'.png" height="25px" />';
		}
	}
	if (pvpB[hero_number][1]!==''){
		pvp_ocenka = pvpB[hero_number][1];
		pvp_sold = pvpB[hero_number][2].split(",");
		pvp_chari = pvpB[hero_number][3].split(",");
		pvp_weapon = pvpB[hero_number][4].split(",");
		pvp_body = pvpB[hero_number][5].split(",");
		pvp_hat = pvpB[hero_number][6].split(",");
		pvp_acc = pvpB[hero_number][7].split(",");
		pvp_acc = pvpB[hero_number][7].split(",");
		pvp_wst = pvpB[hero_number][8].split(",");
		pvp_bst = pvpB[hero_number][9].split(",");
		pvp_hst = pvpB[hero_number][10].split(",");
		pvp_ast = pvpB[hero_number][11].split(",");
		pvp_arenast = pvpB[hero_number][12].split(",");
		h_info5.innerHTML += '<div id="best_temp2" class="display_none"><div id="pvpB" style="display:block;width:100%;height:auto;margin-bottom:0px;"><img src="images/best2.png" width="1320px"></div><div style="display:block;width:100%;height:auto;text-align:center;font-size:17px;margin-bottom:20px;">*If the Best version contains equipment from the Basic build, it is better to upgrade such equipment with copies.<br>It is recommended to upgrade other types of equipment with shards</div><table border="0" style="width:95%;margin:0 auto;"><tr><td style="width:9%;"><img src="images/item_type/weapon.png" height="50px" /></td><td id="weapon_stone_a" style="width:2%;white-space:pre-wrap;"></td><td id="pvpB_weapon" style="width:32%;text-align:left;"></td><td style="width:5%;"></td><td style="width:7%;"><img src="images/chant.png" height="70px" /></td><td style="width:5%;"></td><td id="pvpB_sold" style="width:42%;" colspan="2" rowspan="2"></td></tr><tr><td><img src="images/item_type/body.png" height="50px" /></td><td id="body_stone_a" style="white-space:pre-wrap;"><td id="pvpB_body" style="text-align:left;" ></td><td style="vertical-align: middle;"><img src="images/point.png" height="30px" /></td><td id="pvpB_chari" rowspan="3" style="vertical-align:top;"></td><td style="vertical-align: middle;"><img src="images/point.png" height="30px" /></td></tr><tr><td><img src="images/item_type/head.png" height="50px" /></td><td id="hat_stone_a" style="white-space:pre-wrap;"></td><td id="pvpB_head" style="text-align:left;"></td><td></td><td></td><td colspan="2" id="pvpB_ocenka" style="width:42%;vertical-align:top;text-align:left;"></td></tr><tr><td><img src="images/item_type/accessoir.png" height="50px" /></td><td id="acc_stone_a" style=";white-space:pre-wrap;"></td><td id="pvpB_acc" style="text-align:left;"></td><td></td><td></td><td colspan="2" id="arena_stones" style="width:42%;vertical-align:top;text-align:left;"></td></tr></table></div>';
		var pvpB_weapon = document.getElementById("pvpB_weapon");
		var pvpB_body = document.getElementById("pvpB_body");
		var pvpB_head = document.getElementById("pvpB_head");
		var pvpB_acc = document.getElementById("pvpB_acc");
		var pvpB_sold = document.getElementById("pvpB_sold");
		var pvpB_chari = document.getElementById("pvpB_chari");
		var pvpB_ocenka = document.getElementById("pvpB_ocenka");
		var weapon_stone_a = document.getElementById("weapon_stone_a");
		var body_stone_a = document.getElementById("body_stone_a");
		var hat_stone_a = document.getElementById("hat_stone_a");
		var acc_stone_a = document.getElementById("acc_stone_a");
		var arena_stones = document.getElementById("arena_stones");
		for (i=0;i<pvp_weapon.length;i++){
			pvpB_weapon.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/itemIcons/all/'+pvp_weapon[i]+'.png" height="70px" /></span>';
		}
		for (i=0;i<pvp_body.length;i++){
			pvpB_body.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/itemIcons/all/'+pvp_body[i]+'.png" height="70px" /></span>';
		}
		for (i=0;i<pvp_hat.length;i++){
			pvpB_head.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/itemIcons/all/'+pvp_hat[i]+'.png" height="70px" /></span>';
		}
		for (i=0;i<pvp_acc.length;i++){
			pvpB_acc.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/itemIcons/all/'+pvp_acc[i]+'.png" height="70px" /></span>';
		}
		for (i=0;i<pvp_sold.length;i++){
			pvpB_sold.innerHTML += '<span style="margin-left:3px;height:auto;display:block;width:115px;float:left;"><img src="images/soldIcons/all/'+pvp_sold[i]+'.png" height="145px" /></span>';
		}
		for (i=0;i<pvp_chari.length;i++){
			pvpB_chari.innerHTML += '<span style="margin-left:5px;height:auto;display:block;width:82px;float:left;"><img src="images/chari/'+pvp_chari[i]+'.png" height="70px" /></span>';
		}
		pvpB_ocenka.innerHTML = '<span>PVP</span><br>';
		n=0;
		for (i=0;i<Math.floor(pvp_ocenka/1);i++){
			pvpB_ocenka.innerHTML += '<span style="margin:5px;height:auto;display:block;width:35px;float:left;"><img src="images/star.png" height="35px" /></span>';
			n++;
		}
		if ((pvp_ocenka%n)!==0){
			pvpB_ocenka.innerHTML += '<span style="margin:5px;height:auto;display:block;width:35px;float:left;"><img src="images/star_polovina.png" height="35px" /></span>';
		}
		for (i=0;i<pvp_wst.length;i++){
			weapon_stone_a.innerHTML += '<img style="margin-bottom:-5px;" src="images/stones/'+pvp_wst[i]+'.png" height="25px" />';
		}
		for (i=0;i<pvp_bst.length;i++){
			body_stone_a.innerHTML += '<img style="margin-bottom:-5px;" src="images/stones/'+pvp_bst[i]+'.png" height="25px" />';
		}
		for (i=0;i<pvp_hst.length;i++){
			hat_stone_a.innerHTML += '<img style="margin-bottom:-5px;" src="images/stones/'+pvp_hst[i]+'.png" height="25px" />';
		}
		for (i=0;i<pvp_ast.length;i++){
			acc_stone_a.innerHTML += '<img style="margin-bottom:-5px;" src="images/stones/'+pvp_ast[i]+'.png" height="25px" />';
		}
		arena_stones.innerHTML = '<span style="display:block;width:60px;height:20px;float:left;vertical-align:middle;margin-top: 25px;"><b>APEX</b></span>';
		for (i=0;i<pvp_arenast.length;i++){
			arena_stones.innerHTML += '<span style="margin:5px;height:auto;display:block;width:55px;float:left;"><img src="images/stones/arena/'+ pvp_arenast[i] +'.png" height="60px" /></span>';
		}
	}
}

function startBuildOpen(){
	startTemp = document.getElementById("start_temp");
	startbut = document.getElementById("startbut");
	if (startTemp){
		if (startTemp.classList.contains('display_none')){
			startTemp.className = startTemp.className.replace("display_none", "display_block");
			startbut.classList.add("box_shadow");
		} else if (startTemp.classList.contains('display_block')){
			startTemp.className = startTemp.className.replace("display_block", "display_none");
			startbut.classList.remove("box_shadow");
		}
	}
}
function baseBuildOpen(){
	baseTemp = document.getElementById("base_temp");
	basebut = document.getElementById("basebut");
	if (baseTemp){
		if (baseTemp.classList.contains('display_none')){
			baseTemp.className = baseTemp.className.replace("display_none", "display_block");
			basebut.classList.add("box_shadow");
		} else if (baseTemp.classList.contains('display_block')){
			baseTemp.className = baseTemp.className.replace("display_block", "display_none");
			basebut.classList.remove("box_shadow");
		}
	}
}
function bestBuildOpen(){
	bestTemp = document.getElementById("best_temp");
	bestbut = document.getElementById("bestbut");
	if (bestTemp){
		if (bestTemp.classList.contains('display_none')){
			bestTemp.className = bestTemp.className.replace("display_none", "display_block");
			bestbut.classList.add("box_shadow");
		} else if (bestTemp.classList.contains('display_block')){
			bestTemp.className = bestTemp.className.replace("display_block", "display_none");
			bestbut.classList.remove("box_shadow");
		}
	}
	bestTemp2 = document.getElementById("best_temp2");
	if (bestTemp2){
		if (bestTemp2.classList.contains('display_none')){
			bestTemp2.className = bestTemp2.className.replace("display_none", "display_block");
		} else if (bestTemp2.classList.contains('display_block')){
			bestTemp2.className = bestTemp2.className.replace("display_block", "display_none");
		}
	}
}

var fetter_pic=document.getElementById("fetter_pic");
fetter_title=document.getElementById("fetter_title");
var imgFetter = new Image();
imgFetter.src = "images/heroes/heroes_list/"+ heroName +"/Confession/Confession.jpg";
imgFetter.onload = function(){
	fetter_pic.innerHTML = '<img src="images/heroes/heroes_list/'+ heroName +'/Confession/Confession.jpg" width="1320px" />';
	fetter_title.innerHTML += '<span style="line-height:2;display:block;width:120px;margin:0 auto;height:35px;">Confession  <img class="conf_hover" style="position:absolute;vertical-align:middle;cursor:pointer;" src="images/icon_confession.png" height="30px" onclick=window.open("'+confession[hero_number][1]+'","new_window"); /></span>';
};
imgFetter.onerror = function(){
	fetter_pic.style.display='none';
	fetter_title.style.display='none';
};


//$('img').error(function() {
//   $(this).hide();
//});
