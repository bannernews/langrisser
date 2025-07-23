//0-имя,1-фракции,2-ранг,3-ковка(forge),4-SP,5-часть,6-имяТаланта,7-описаниеТаланта,8-личнаяНазвание,9-личТип,10-ОЗлич,11-АТКлич,12-ИНТлич,13-ЗАЩлич,14-МЗАЩлич,15-НАВЫКлич,16-описЛИЧ,17-ковка,18-ОЗсолд,19-АТКсолд,20-ЗАЩсолд, 21-МЗАЩсолд,22-солдаты,23-солдатыСП,24-ковкаОружие,25-ковкаТипБрони,26-скиныЦифры,27-рядкиКлассов,28-бондДеф,29-бондАТК,30-нуженДЕФ,31-нуженАТК,32-47 - номера скиллов дерева,48-номерОписСП
var dataTable = [
    [
        "ИМЯ ГЕРОЯ",
        "Фракции",
        "Ранг",
        "Ковка",
        "SP",
        "Часть",
        "Название таланта",
        "Описание таланта",
        "Название (рус)",
        "Тип (оружие, броня, шапка, аксессуар)",
        "ОЗ",
        "АТК",
        "ИНТ",
        "ЗАЩ",
        "МЗАЩ",
        "НАВЫК",
        "Описание начальное(рус)",
        "уникальный навык (рус)",
        "ОЗ, %",
        "АТК, %",
        "ЗАЩ, %",
        "МЗАЩ, %",
        "Солдаты",
        "доп солдаты в СП",
        "Оружие",
        "Тип брони",
        "Цифры скинов",
        "Номера рядков классов",
        "ЗАЩ",
        "АТК",
        "Нужен для ДЕФ",
        "Нужен для АТК",
        "00личные",
        "00общие",
        "1Аличные",
        "1Аобщие",
        "1Вличные",
        "1Вобщие",
        "1Сличные",
        "1Собщие",
        "2Аличные",
        "2Аобщие",
        "2Вличные",
        "2Вобщие",
        "2Сличные",
        "2Собщие",
        "3C",
        "",
        "Номер рядка СП"
    ],
    [
        "Яркий призыватель",
        "ЛС,АП,ТАИР",
        "LLR",
        "",
        "",
        "",
        "Сияющий Священный договор",
        "Эффекты исцеления увеличены на (10%, 15%, 20%, 25%). Исцелив союзника, рассеивает 1 дебафф и накладывает 1 случайный бафф.",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "35",
        "30",
        "20",
        "25",
        "Единорог,Эльф,Эльф-мастер,Экспедиция по природе,Ведьма,Колдунья,Фея-ворожея,Инквизитор,Монах,Епископ,Жрица,Экзорцист,Боевой монах,Солист ветроцвета",
        "",
        "посох,молот",
        "тканевая",
        "0,2",
        "2,3",
        "святой",
        "маг",
        "",
        "",
        "",
        "2,3,5",
        "3",
        "",
        "",
        "",
        "3",
        "",
        "",
        "4,7",
        "",
        "",
        "4",
        "6",
        "5",
        "",
        ""
    ]
]

var classStats = [
    [
        "Имя героя",
        "Название",
        "Класс",
        "ОЗ",
        "АТК",
        "ИНТ",
        "ЗАЩ",
        "МЗАЩ",
        "НАВЫК",
        "Дальность атаки",
        "Дальность передвижения",
        "Тип передвижения",
        "Бонус УЗ 4",
        "Бонус УЗ 7",
        "Буквы для 0",
        "Буквы для скинов"
    ],
	[
        "Яркий призыватель",
        "",
        "holy_LLR",
        "4356",
        "280",
        "562",
        "282",
        "355",
        "150",
        "2",
        "3",
        "полет",
        "Когда у юнита 100% ОЗ, получаемый урон снижается на 10%.",
        "Если у юнита есть 5 и более баффов, урон после вступления в бой увеличивается на 10%.",
        "A",
        "A"
    ],
    [
        "Яркий призыватель",
        "",
        "mage_LLR",
        "4039",
        "253",
        "592",
        "281",
        "378",
        "166",
        "2",
        "3",
        "парение",
        "Когда сражается с врагом, % ОЗ которого ниже чем у этого юнита, получаемый урон снижается на 10%.​",
        "Весь наносимый урон увеличивается на 10%, когда ОЗ юнита выше 80%.​",
        "C",
        "C"
    ]
]

var heroList = [
            "Яркий призыватель"
]

var persSkills = [
    [
        "имя героя",
        "Название",
        "Стоимость",
        "Тип (маг(1)/физ(2)/помощь(3)/исцеление (4)/пассивный (5)/трансформация(6)/активный(7)/призыв(8)/Энергия слияния(9))",
        "Дальность",
        "Радиус",
        "КД",
        "Описание"
    ],
    [
        "Яркий призыватель",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ],
    [
        "",
        "Призыв по контракту",
        "1",
        "8",
        "на себя",
        "3 клетки",
        "2",
        "[Призыв] Призывает принадлежащего вам единорога текущего класса в ближайшую позицию в пределах 3 клеток вокруг вас (единорог наследует характеристики снаряжения и 90% основных атрибутов Призывателя. При его наличии этот навык заменяется на [Отзыв]).<br><br>Отзыв<br>[Активный] Может высвободить 1 навык возврата. Время восстановления этого навыка наследует время восстановления используемого навыка:<br>[Святой отзыв] Телепортируется к единорогу. Может переместиться еще на 2 клетки и снова атаковать. (После использования этого умения количество ходов баффов не будет уменьшено).<br>[Отзыв единорога] Телепортирует единорога к себе."
    ],
    [
        "",
        "Священный вызов",
        "2",
        "9",
        "на себя",
        "все поле",
        "3",
        "[Энергия слияния] Наступательные и защитные возможности всех союзников «Легиона Славы» на поле боя будут значительно улучшены, а урон, наносимый во время битвы, будет увеличен на 8%. При наличии 5 или более баффов урон будет увеличен еще на 4% в течение 4 раундов. (Этот эффект нельзя комбинировать с другими Энергиями слияния)."
    ],
    [
        "",
        "Гимн света",
        "3",
        "7",
        "на себя",
        "все поле",
        "3",
        "[Пассивный] При вызове единорога или активном использовании этого умения у всех союзников «Легиона Сияния» на поле боя значительно улучшатся наступательные и защитные возможности, а урон, наносимый во время боя, будет увеличен на 15%. Вступая в бой, после они будут восстанавливать ОЗ союзнику с наименьшим количеством ОЗ после битвы. Восстановленное количество ОЗ равно 2х интеллекта заклинателя, длится 4 раунда. (Этот эффект нельзя комбинировать с другими навыками Энергии Слияния).<br><br><b>(Класс святой):</b> [Активный] Усильте сияющего единорога (если единорога не существует, он будет вызван первым), чтобы он мог получить [Сияющее благословение]: «В конце действия восстанавливает ОЗ дружественному отряду с наименьшим здоровьем в пределах 3 клеток вокруг один раз. Исцеление равняется 2x ИНТ заклинателя, рассеивает 1 дебафф и применяет 1 случайный сильный бафф, повторяется еще раз, когда у вас есть дебафф, повторяется еще раз, когда у вас более 5 баффов», длится 1 раунд и восстанавливает время перезарядки всех навыков единорога. После использования этот навык заменяется на [Аврорианская молитва] (3С SR Крис с сохранением пассивной части), длится 3 раунда.<br><b>(Класс маг):</b> [Активный] Усиляет единорога Святого Грома, призванного вами (когда единорога не существует, он будет вызван первым), усилите следующее использование [Суд Священного Грома]: множитель навыка увеличивается в 1,5 раза; если цель на одной прямой, это умение игнорирует охрану. Когда враг не убит, Яркий Призыватель может действовать снова. Восстанавливает перезарадяку всех навыков единорога. После использования этот навык заменяется на [Аврорианская молитва] (3С SR Крис с сохранением пассивной части), длится 3 раунда."
    ]
]

var commonSkills = [
    [
        "Название",
        "Стоимость",
        "Тип (маг(1)/физ(2)/помощь(3)/лечение (4)/пассивный (5)/трансформация(6)/активный(7)/призыв(8))",
        "Дальность",
        "Радиус",
        "КД",
        "Описание"
    ],
	[
		"Исцеление",
		"1",
		"4",
		"2",
		"одна цель",
		"нет",
		"[Исцеление] Активный навык. Восстанавливает О3 одному юниту в пределах дальности (5х ИНТ заклинателя). Снимает 1 дебафф."
	],
	[
		"Дисциплина",
		"2",
		"1",
		"2",
		"одна цель",
		"1",
		"[Маг.урон] Атакует вражеского юнита, нанося 1.5х урона. После боя восстанавливает О3 в размере 20% от нанесенного урона. Если у вас есть солдаты ближнего боя, они тоже примут участие в атаке. (Снижение ближнего урона не влияет на этот навык)"
	],
	[
		"Искупление",
		"2",
		"1",
		"2",
		"одна цель",
		"2",
		"[Магический урон] Атакует одного врага, нанося 1,5х урона. После боя восстанавливает ОЗ всем остальным союзникам, равное 2х ИНТ."
	],
	[
		"Вера",
		"1",
		"5",
		"",
		"",
		"",
		"[Пассивный] Когда атакуете, урон увеличивается на 15%. После боя восстанавливает О3 дружественному юниту с самым низким показателем О3 (не себе) в размере 2х ИНТ заклинателя."
	],
	[
		"Дыхание священного дракона",
		"2",
		"1",
		"5",
		"по прямой",
		"5",
		"[Маг. урон] Атакует всех врагов на 3 прямых линиях, нанося 0.36х АоЕ-урона. Особенно эффективно против [демонов]. Также снимает 1 бафф"
	],
	[
		"Массовое исцеление",
		"2",
		"4",
		"3",
		"3",
		"1",
		"[Исцеление] Активный навык. Восстанавливает О3 нескольких юнитов в пределах дальности (3х ИНТ заклинателя). Снимает 1 дебафф."
	]
]

var skill_type = ['','магический урон','физический урон','помощь','исцеление','пассивный','трансформация','активный','призыв','энергия слияния'];

var konec = ['-','ход','хода','хода','хода','ходов'];

var builds = [
    [
        "",
        "Чары",
        "Звезды ПВЕ",
        "Звезды ПВП",
        "Оружие",
        "Броня",
        "Шапка",
        "Аксессуар",
        "Солдаты"
    ],
    [
        "Яркий призыватель",
        "Полнолуние,Бриз",
        "4",
        "4",
        "Дар вечной жизни,Цветок ночи,Божественный скипетр",
        "Ритуал замешательства,Мантия Теннио",
        "Повелитель разрядов,Головной убор Теннио,Сияние мира,Завеса звезд",
        "Святое кольцо,Роза Видара,Ползучий прилив,Бриллиант измерения",
        "Фея-ворожея,Экспедиция по природе,Боевой монах,Солист ветроцвета"
    ]
]

var confession = [
    [
        "герой",
        "Ссылка"
    ],
    [
        "Яркий призыватель",
        "https://drive.google.com/file/d/1eqba3_PACcNkxl-r2hhNvSlMKyw01hCt/view?usp=drive_link"
    ]
]

var startB = [
    [
        "",
        "Оценка",
        "Солдаты",
        "Зачары",
        "Оружие",
        "Броня",
        "Шапка",
        "Акс"
    ],
    [
        "Яркий призыватель",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ]
]

var basicB = [
    [
        "",
        "Оценка",
        "Солдаты",
        "Зачары",
        "Оружие",
        "Броня",
        "Шапка",
        "Акс"
    ],
    [
        "Яркий призыватель",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ]
]

var pveB = [
    [
        "",
        "Оценка",
        "Солдаты",
        "Зачары",
        "Оружие",
        "Броня",
        "Шапка",
        "Акс",
        "Камни Оружие",
        "Камни Броня",
        "Камни Шапка",
        "Камни Акс"
    ],
    [
        "Яркий призыватель",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ]
]

var pvpB = [
    [
        "",
        "Оценка",
        "Солдаты",
        "Зачары",
        "Оружие",
        "Броня",
        "Шапка",
        "Акс",
        "Камни Оружие",
        "Камни Броня",
        "Камни Шапка",
        "Камни Акс",
        "Камни АРЕНЫ"
    ],
    [
        "Яркий призыватель",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ]
]


var heroName = "Яркий призыватель";
if (heroName){
	var titleName = document.getElementById('title_name');
	var title_1 = document.getElementById('title');
	titleName.innerHTML = heroName;
	title_1.innerHTML = heroName;
}
//langu = document.getElementById('langu');
//langu.href = "ChrisLLR_en.html";

var hero_number = heroList.indexOf(heroName)+1;  //Узнаем номер строки героя

var frak = document.getElementById('picture');
skins = dataTable[hero_number][26].split(",");
frak.innerHTML += '<div id="frak_main" class="slider chibi1s0" style="display:block;width:425px;height:340px;margin:0 auto;"></div>';

var chb0 = document.getElementById("frak_main");

for (i=0;i<skins.length;i++){
	chb0.innerHTML += '<div style="display:block;width:100%;height:340px;text-align:center;position:relative;"><img style="margin:0 auto;" src="images/heroes/heroes_list/'+ heroName +'/Card/'+skins[i]+'.jpg"><img style="position:absolute;top:0px;left:112px;" src="images/skin_source/'+skins[i].charAt(0)+'.png"></div>';
}

var frak2 = document.getElementById('h_frac');
frak_temp = dataTable[hero_number][1].split(",");
frak2.innerHTML += '<img style="margin-bottom:10px;" src="images/hero_filter/range/' + dataTable[hero_number][2] + '.png" height="30px" />   ';
frak2.innerHTML +='<img style="margin-left:5px;margin-bottom:10px;" src="images/glow.png" height="30px" />';
for (i=0;i<frak_temp.length;i++){
	frak2.innerHTML += '<img style="margin-left:5px;" src="images/hero_filter/factions/' + frak_temp[i] + '.png" height="50px" />   ';
}
if (dataTable[hero_number][5]==''){} else {
	frak2.innerHTML +='<img style="margin-bottom:10px;" src="images/glow.png" height="30px" />';
	frak2.innerHTML +='<img style="margin-bottom:10px;" src="images/hero_filter/chapter/'+dataTable[hero_number][5]+'.png" height="30px" />';
}

var tal_pic = document.getElementById('tal_pic');
tal_pic.innerHTML += '<img src="images/heroes/talent/' + dataTable[hero_number][0] + '.png" height="100px" /><br>';
tal_pic.innerHTML += '<img src="images/hero_filter/range/' + dataTable[hero_number][2] + '.png" height="25px" />   ';

var talant = document.getElementById('talant_text');
talant.innerHTML = '<span style="display:inline-block;margin-bottom:10px;font-size:15px;">Талант: <b>'+dataTable[hero_number][6]+'</b></span><br>'+dataTable[hero_number][7];


if (dataTable[hero_number][8]==''){
	var pers_item = document.getElementById('pers_item');
	pers_item.style.display='none';
} else {
	var pers_pic = document.getElementById('pers_pic');
	var pers_text = document.getElementById('pers_text');
	pers_pic.innerHTML = '<img src="images/itemIcons/all/' + dataTable[hero_number][0] + '.png" height="100px" />';
	pers_text.innerHTML = '<b style="margin-right:8px;">'+dataTable[hero_number][8]+'</b><img src="images/item_type/' + dataTable[hero_number][9] + '.png" height="20px" /><br>';
	if (dataTable[hero_number][10]!=''){var oz='ОЗ '+dataTable[hero_number][10]+'  '}else{var oz =''};
	if (dataTable[hero_number][11]!=''){var atk='АТК '+dataTable[hero_number][11]+'  '}else{var atk =''};
	if (dataTable[hero_number][12]!=''){var inte='ИНТ '+dataTable[hero_number][12]+'  '}else{var inte =''};
	if (dataTable[hero_number][13]!=''){var def='ЗАЩ '+dataTable[hero_number][13]+'  '}else{var def =''};
	if (dataTable[hero_number][14]!=''){var mdef='МЗАЩ '+dataTable[hero_number][14]+'  '}else{var mdef =''};
	if (dataTable[hero_number][15]!=''){var skil='НАВЫК '+dataTable[hero_number][15]+'  '}else{var skil =''};
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
h_forge_pic.innerHTML = '<div id="forge_div" style="width:100%;display:block;text-align:center;position:relative;"><img id="forge_base" src="images/forge/forge_1.png" height="290px"/><br><span id="forge_icon">(Ковка / Путь Законов)<br>Нажмите на иконку для подробностей</span></div>';
var fbase = dataTable[hero_number][24].split(",");
var h_forge_div = document.getElementById("forge_div");
var h_forge_base = document.getElementById("forge_base");
var h_forge_icon = document.getElementById("forge_icon");
if (fbase.length == 1){
	h_forge_base.src = "images/forge/forge_1.png";
	h_forge_div.innerHTML += '<img id="f_w1" class="f_i f_wea" style="position:absolute;top: 5px;left: 13px" src="images/forge/'+fbase+'_2.png" height="85px">';
	h_forge_div.innerHTML += '<img id="f_b1" class="f_i f_body" style="position:absolute;top: 5px;left: 200px" src="images/forge/бр_'+dataTable[hero_number][25]+'.png" height="85px">';
	h_forge_div.innerHTML += '<img id="f_h1" class="f_i f_hat" style="position:absolute;top: 191px;left: 14px" src="images/forge/шл_'+dataTable[hero_number][25]+'.png" height="85px">';
	h_forge_div.innerHTML += '<img id="f_a1" class="f_i f_acc" style="position:absolute;top: 190px;left: 200px" src="images/forge/акс.png" height="85px">';
	if (dataTable[hero_number][3]!==''){
		h_forge_div.innerHTML += '<img style="position:absolute;top: 107px;left: 113px" src="images/forge/forge.png" height="65px">';
	}
//	h_forge_icon.innerHTML = '('+fbase+')<br><img src="images/forge/'+fbase+'1.png" height="40px">x330   <img src="images/forge/'+fbase+'2.png" height="40px">x216   <img src="images/forge/'+fbase+'3.png" height="40px">x120<br><img src="images/forge/best1.png" height="40px">x130 <img src="images/forge/best2.png" height="40px">x28 <img src="images/forge/best3.png" height="40px">x9';
} else {
	h_forge_base.src = "images/forge/forge_2.png";
	h_forge_div.innerHTML += '<img id="f_w1" class="f_i f_wea" style="position:absolute;top: 34px;left: 7px" src="images/forge/'+fbase[0]+'_2.png" height="85px">';
	h_forge_div.innerHTML += '<img id="f_w2" class="f_i f_wea2"style="position:absolute;top: 2px;left: 73px" src="images/forge/'+fbase[1]+'.png" height="65px">';
	h_forge_div.innerHTML += '<img id="f_b1" class="f_i f_body" style="position:absolute;top: 15px;left: 202px" src="images/forge/бр_'+dataTable[hero_number][25]+'.png" height="85px">';
	h_forge_div.innerHTML += '<img id="f_h1" class="f_i f_hat" style="position:absolute;top: 193px;left: 23px" src="images/forge/шл_'+dataTable[hero_number][25]+'.png" height="85px">';
	h_forge_div.innerHTML += '<img id="f_a1" class="f_i f_acc" style="position:absolute;top: 193px;left: 202px" src="images/forge/акс.png" height="85px">';
	if (dataTable[hero_number][3]!==''){
		h_forge_div.innerHTML += '<img style="position:absolute;top: 113px;left: 119px" src="images/forge/forge.png" height="65px">';
	}
//	h_forge_icon.innerHTML = '('+fbase[0]+')<br><img src="images/forge/'+fbase[0]+'1.png" height="40px">x165   <img src="images/forge/'+fbase[0]+'2.png" height="40px">x108   <img src="images/forge/'+fbase[0]+'3.png" height="40px">x60<br><img src="images/forge/best1.png" height="40px">x130 <img src="images/forge/best2.png" height="40px">x28 <img src="images/forge/best3.png" height="40px">x9';
}


var sold_pic = document.getElementById('sold_pic');
var sold_text = document.getElementById('sold_text');
sold_pic.innerHTML = '<img onclick=iconSoldOpen() src="images/sold_icon.png" height="100px" style="cursor:pointer;"/>';
sold_text.innerHTML = '<span style="display:inline-block;margin-bottom:10px;">Бонус солдат: </span><br>';
sold_text.innerHTML += '<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:35px;">ОЗ: '+dataTable[hero_number][18]+'%</span><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:10px;">АТК: '+dataTable[hero_number][19]+'%</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:20px;">ЗАЩ: '+dataTable[hero_number][20]+'%</span><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;">МЗАЩ: '+dataTable[hero_number][21]+'%</span>';

var h_sold_view = document.getElementById("h_sold_view");
var solds = dataTable[hero_number][22].split(",");
var soldsSP = dataTable[hero_number][23];
for (i=0;i<solds.length;i++){
	h_sold_view.innerHTML += '<img src="images/soldIcons/all/' + solds[i] + '.png" height="123px" />';
}
if (soldsSP!==''){
	h_sold_view.innerHTML += '<img src="images/soldIcons/all/' + soldsSP + '.png" height="123px" />';
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
	chb1.innerHTML = '<div id="ch1sl" class="chibi1sl" style="display:block;width:160px;height:160px;"></div>';
	var ch1sl = document.getElementById("ch1sl");
	for (i=0;i<chibi1skin.length;i++){
		ch1sl.innerHTML += '<div style="position:relative;height:160px;width:160px;"><img style="position:absolute;top:0;left:5px;" src="images/moon.png" height="150px" /><img style="position:absolute;top:0;left:0px;" src="images/heroes/heroes_list/'+ heroName +'/Chibi/'+chibi1skin[i]+'" height="140px" /><img style="position:absolute;top:0;left:122px;" src="images/classes/'+classStats[chb[0]-1][2]+'.png" height="40px" /></div>';
	}
	chb2.innerHTML = '<div id="ch1s2" class="chibi1s2" style="display:block;width:160px;height:160px;"></div>';
	var ch1s2 = document.getElementById("ch1s2");
	for (i=0;i<chibi2skin.length;i++){
		ch1s2.innerHTML += '<div style="position:relative;height:160px;width:160px;"><img style="position:absolute;top:0;left:5px;" src="images/moon.png" height="150px" /><img style="position:absolute;top:0;left:0px;" src="images/heroes/heroes_list/'+ heroName +'/Chibi/'+chibi2skin[i]+'" height="140px" /><img style="position:absolute;top:0;left:122px;" src="images/classes/'+classStats[chb[1]-1][2]+'.png" height="40px" /></div>';
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
	uzi_l.innerHTML = '<span style="display:block;width:170px;height:auto;margin:0 auto;margin-top:15px;white-space:pre-wrap;margin-bottom:10px;">Разблокировка личных уз</span>';
	var imgbonddef = new Image();
	imgbonddef.src = 'images/head_circle/'+dataTable[hero_number][28]+'.png';
	imgbonddef.onload = function(){
		uzi_l.innerHTML += '<span style="display:block;width:170px;height:140px;margin:0 auto;">ЗАЩ<br><a href="hero_mob.html?name='+(dataTable[hero_number][28]).replace(/ /g,"%20")+'"><img style="cursor:pointer;margin-top:5px;" src="images/head_circle/'+dataTable[hero_number][28]+'.png" height="105px" /></a></span>';
	};
	imgbonddef.onerror = function(){
		uzi_l.innerHTML += '';
	};
	var imgbondatk = new Image();
	imgbondatk.src = 'images/head_circle/'+dataTable[hero_number][29]+'.png';
	imgbondatk.onload = function(){
		uzi_l.innerHTML += '<span style="display:block;width:170px;height:140px;margin:0 auto;margin-top:2px;">АТК<br><a href="hero_mob.html?name='+(dataTable[hero_number][29]).replace(/ /g,"%20")+'"><img style="cursor:pointer;margin-top:5px;" src="images/head_circle/'+dataTable[hero_number][29]+'.png" height="105px" /></a></span>';
	};
	imgbondatk.onerror = function(){
		uzi_l.innerHTML += '';
	};
	drdef = dataTable[hero_number][30].split(",")
	dratk = dataTable[hero_number][31].split(",")
	bond_dr_sum = drdef.length + dratk.length;
	if (bond_dr_sum>=6){widthu="55px";}else{widthu="75px";}
	uzi_dr.innerHTML = '<span style="display:block;width:170px;height:100%;margin:0 auto;margin-top:15px;white-space:pre-wrap;margin-bottom:6px;">Разблокировка других уз</span>';
	if (dataTable[hero_number][30]!==''){
		uzi_dr.innerHTML += '<span style="display:block;width:205px;height:auto;margin:0 auto;white-space:pre-wrap;">ЗАЩ<br></span>';
		for (i=0;i<drdef.length;i++){
			uzi_dr.innerHTML += '<a href="hero_mob.html?name='+(drdef[i]).replace(/ /g,"%20")+'"><img style="cursor:pointer;margin-left:5px;" src="images/head_circle/'+drdef[i]+'.png" height="'+widthu+'" /></a>';
		}
	}
	uzi_dr.innerHTML += '<br>';
	if (dataTable[hero_number][31]!==''){
		uzi_dr.innerHTML += '<span style="display:block;width:205px;height:auto;margin:0 auto;white-space:pre-wrap;">АТК<br></span>';
		for (i=0;i<dratk.length;i++){
			uzi_dr.innerHTML += '<a href="hero_mob.html?name='+(dratk[i]).replace(/ /g,"%20")+'"><img style="cursor:pointer;margin-left:5px;" src="images/head_circle/'+dratk[i]+'.png" height="'+widthu+'" /></a>';
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
	c3_text.innerHTML = '<b style="font-size:larger;">'+persSkills[(dataTable[hero_number][46]-1)][1]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="font-size:14px;display:inline-block;width:140px;vertical-align:super;margin-right:10px;">'+skill_type[persSkills[(dataTable[hero_number][46]-1)][3]]+'</span><img src="images/sold_stats.png" height="20px"><span style="font-size:14px;vertical-align:super;">Перезарядка: '+persSkills[(dataTable[hero_number][46]-1)][6]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="font-size:14px;display:inline-block;width:140px;vertical-align:super;margin-right:10px;">Дальность: '+persSkills[(dataTable[hero_number][46]-1)][4]+'</span><img src="images/sold_stats.png" height="20px"><span style="font-size:14px;vertical-align:super;">Диапазон: '+persSkills[(dataTable[hero_number][46]-1)][5]+'</span>';
	c3_desc.innerHTML = persSkills[(dataTable[hero_number][46]-1)][7];
	c3_hero_pic.innerHTML = '<img src="images/heroes/heroes_list/'+ heroName +'/3C/3C.png" />';
} else {
	var prob_none = document.getElementById("h_info4");
	prob_none.innerHTML = '';
}

var htree = document.getElementById("htree");
var untree = document.getElementById("untree");
htree.innerHTML = '<img id="htreepic" onclick=iconHTREEOpen() src="images/ChrisLLR/chrisHero.png" height="130px" style="cursor:pointer;"/>';
untree.innerHTML = '<img id="untreepic" onclick=iconUNTREEOpen() src="images/ChrisLLR/chrisUnicorn.png" height="130px" style="cursor:pointer;float:right;"/>';

function iconHTREEOpen(){
	var treeHero = document.getElementById("treeHero");
	var treeUnicorn = document.getElementById("treeUnicorn");
	if (treeHero){
		if (treeHero.classList.contains('display_none')){
			treeHero.className = treeHero.className.replace("display_none", "display_block");
			treeUnicorn.className = treeUnicorn.className.replace("display_block", "display_none");
		}
	}
}
function iconUNTREEOpen(){
	var treeHero = document.getElementById("treeHero");
	var treeUnicorn = document.getElementById("treeUnicorn");
	if (treeUnicorn){
		if (treeUnicorn.classList.contains('display_none')){
			treeUnicorn.className = treeUnicorn.className.replace("display_none", "display_block");
			treeHero.className = treeHero.className.replace("display_block", "display_none");
		}
	}
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
cl00.innerHTML = '<div style="display:block;width:415px;height:150px;position:relative;"><img onclick=iconC0Open() style="position:absolute;left:85px;top:-4px;" src="images/under_job.png" height="156px;" /><img onclick=iconC0Open() style="position:absolute;left:159px;top:10px;" src="images/heroes/job/'+heroName+'/00.png" height="95px" /></div>';
if ((dataTable[hero_number][32].split(",").length == dataTable[hero_number][33].split(",").length) || (dataTable[hero_number][32].split(",").length == 2)){dop00='<img id="sha0" style="float:left;margin: 10px 0;" src="images/shadow_all.png" width="415px" height="10px" />';dop01 = '';}else{dop00='';dop01='<img id="sha0" style="float:left;margin: 10px 0;" src="images/shadow_all.png" width="415px" height="10px" />';}
if (dataTable[hero_number][32]!==''){
	pers00 = dataTable[hero_number][32].split(",");
	for (i=0;i<pers00.length;i++){
		if (persSkills[(pers00[i]-1)][2]=='1'){cc='33px';}else{cc='24px';}
		cl00.innerHTML += '<div class="display_none c00p" style="margin-top:15px;"><div style="text-align:left;width:415px;height:auto;float:left;"><div style="position:relative;display:block;width:19%;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/personal/'+ persSkills[pers00[i]-1][1] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+persSkills[(pers00[i]-1)][2]+'c.png" height="16px" /></div><div style="display:block;width:80%;height:auto;float:left;"><b>'+persSkills[pers00[i]-1][1]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:10px;display:inline-block;width:130px;font-size:14px;">'+skill_type[persSkills[pers00[i]-1][3]]+'</span><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:10px;font-size:14px;">Перезарядка: '+persSkills[pers00[i]-1][6]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:10px;display:inline-block;width:130px;font-size:14px;">Дальность: '+persSkills[pers00[i]-1][4]+'</span><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:10px;font-size:14px;">Диапазон: '+persSkills[pers00[i]-1][5]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+persSkills[pers00[i]-1][7]+'</div><br>'+dop00+'</div>';
		dop00='';
	}
}
if (dataTable[hero_number][33]!==''){
	pers002 = dataTable[hero_number][33].split(",");
	for (i=0;i<pers002.length;i++){
		if (commonSkills[(pers002[i]-1)][1]=='1'){cc='33px';}else{cc='24px';}
		cl00.innerHTML += '<div class="display_none c00o" style="margin-top:15px;"><div style="text-align:left;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:19%;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/common/'+ commonSkills[pers002[i]-1][0] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+commonSkills[(pers002[i]-1)][1]+'c.png" height="16px" /></div><div style="display:block;width:80%;height:auto;float:left;"><b>'+commonSkills[pers002[i]-1][0]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:10px;display:inline-block;width:130px;font-size:14px;">'+commonSkills[pers002[i]-1][2]+'</span><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:10px;font-size:14px;">Перезарядка: '+commonSkills[pers002[i]-1][5]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:10px;display:inline-block;width:130px;font-size:14px;">Дальность: '+commonSkills[pers002[i]-1][3]+'</span><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:10px;font-size:14px;">Диапазон: '+commonSkills[pers002[i]-1][4]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+commonSkills[pers002[i]-1][6]+'</div><br>'+dop01+'</div>';
		dop01='';
	}
}

function iconC0Open(){
	c0openp = document.getElementsByClassName("c00p");
	c0openo = document.getElementsByClassName("c00o");
	if (c0openp) {
		for (var i2 = 0; i2 < c0openp.length; i2++) {
			if (c0openp[i2].classList.contains('display_none')){
				c0openp[i2].className = c0openp[i2].className.replace("display_none", "display_block");
			} else if (c0openp[i2].classList.contains('display_block')){
				c0openp[i2].className = c0openp[i2].className.replace("display_block", "display_none");
			}
		}
		for (var i2 = 0; i2 < c0openo.length; i2++) {
			if (c0openo[i2].classList.contains('display_none')){
				c0openo[i2].className = c0openo[i2].className.replace("display_none", "display_block");
			} else if (c0openo[i2].classList.contains('display_block')){
				c0openo[i2].className = c0openo[i2].className.replace("display_block", "display_none");
			}
		}
	}
}


undw = "-11px";
cli = "50px";
//1A
if (dataTable[hero_number][34]=='' && dataTable[hero_number][35]==''){
	if (heroName == 'Алканфель' || heroName == 'Макишима Агито' || heroName == 'Шо Фукамачи'){
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
		undw = "-14px";
		cli = "83px";
		bre = '';
	}
} else {
	if (dataTable[hero_number][36]=='' && dataTable[hero_number][37]==''){undw="-14px"}
	if (dataTable[hero_number][38]=='' && dataTable[hero_number][39]==''){undw="-14px"}
	bre = '<br>';
	if ((dataTable[hero_number][34]!=='' || dataTable[hero_number][35]!=='') && (dataTable[hero_number][36]!=='' || dataTable[hero_number][37]!=='') && (dataTable[hero_number][38]!=='' || dataTable[hero_number][39]!=='')){
		cl10.innerHTML = '<div id="a1" style="display:block;width:100%;height:85px;position:relative;"><img onclick="iconC1aOpen()" style="position:absolute;left:'+undw+';top:-13px;" src="images/under_job.png" height="100px;" /><img  onclick="iconC1aOpen()" style="position:absolute;left:38px;top:-2px;" src="images/heroes/job/'+heroName+'/1A.png" height="57px" /></div>';
	} else {
		cl10.innerHTML = '<div id="a1" style="display:block;width:100%;height:130px;position:relative;"><img onclick="iconC1aOpen()" style="position:absolute;left:'+undw+';top:-13px;" src="images/under_job.png" height="156px;" /><img  onclick="iconC1aOpen()" style="position:absolute;left:58px;top:-1px;" src="images/heroes/job/'+heroName+'/1A.png" height="95px" /></div>';
	}
}

//1B
if (dataTable[hero_number][36]=='' && dataTable[hero_number][37]==''){
	if (heroName == 'Алканфель' || heroName == 'Макишима Агито' || heroName == 'Шо Фукамачи'){
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
		undw = "-14px";
		cli = "83px";
		bre = '';
	}
} else {
	bre = '<br>';
	if ((dataTable[hero_number][34]!=='' || dataTable[hero_number][35]!=='') && (dataTable[hero_number][36]!=='' || dataTable[hero_number][37]!=='') && (dataTable[hero_number][38]!=='' || dataTable[hero_number][39]!=='')){
		cl11.innerHTML = '<div id="b1" style="display:block;width:100%;height:85px;position:relative;"><img onclick="iconC1bOpen()" style="position:absolute;left:'+undw+';top:-13px;" src="images/under_job.png" height="100px;" /><img  onclick="iconC1bOpen()" style="position:absolute;left:38px;top:-2px;" src="images/heroes/job/'+heroName+'/1B.png" height="57px" /></div>';
	} else {
		cl11.innerHTML = '<div id="b1" style="display:block;width:100%;height:130px;position:relative;"><img onclick="iconC1bOpen()" style="position:absolute;left:'+undw+';top:-13px;" src="images/under_job.png" height="156px;" /><img  onclick="iconC1bOpen()" style="position:absolute;left:58px;top:-1px;" src="images/heroes/job/'+heroName+'/1B.png" height="95px" /></div>';
	}
}
//1C
if (dataTable[hero_number][38]=='' && dataTable[hero_number][39]==''){
	if (heroName == 'Алканфель' || heroName == 'Макишима Агито' || heroName == 'Шо Фукамачи'){
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
		undw = "-14px";
		cli = "83px";
		bre = '';
	}
} else {
	bre = '<br>';
	if ((dataTable[hero_number][34]!=='' || dataTable[hero_number][35]!=='') && (dataTable[hero_number][36]!=='' || dataTable[hero_number][37]!=='') && (dataTable[hero_number][38]!=='' || dataTable[hero_number][39]!=='')){
		cl12.innerHTML = '<div id="c1" style="display:block;width:100%;height:85px;position:relative;"><img onclick="iconC1cOpen()" style="position:absolute;left:'+undw+';top:-13px;" src="images/under_job.png" height="100px;" /><img  onclick="iconC1cOpen()" style="position:absolute;left:38px;top:-2px;" src="images/heroes/job/'+heroName+'/1C.png" height="57px" /></div>';
	} else {
		cl12.innerHTML = '<div id="c1" style="display:block;width:100%;height:130px;position:relative;"><img onclick="iconC1cOpen()" style="position:absolute;left:'+undw+';top:-13px;" src="images/under_job.png" height="156px;" /><img  onclick="iconC1cOpen()" style="position:absolute;left:58px;top:-1px;" src="images/heroes/job/'+heroName+'/1C.png" height="95px" /></div>';
	}
}

glowH = document.getElementsByClassName("glowH");
for (i=0;i<glowH.length;i++){
	if ((dataTable[hero_number][34]!=='' || dataTable[hero_number][35]!=='') && (dataTable[hero_number][36]!=='' || dataTable[hero_number][37]!=='') && (dataTable[hero_number][38]!=='' || dataTable[hero_number][39]!=='')){
		glowH[i].style.height = '85px';
	} else {
		glowH[i].style.height = '130px';
	}
}
//Скилы 1 классов
cl1a = document.getElementById("cl1a");
cl1b = document.getElementById("cl1b");
cl1c = document.getElementById("cl1c");
	if (dataTable[hero_number][34]!==''){
		pers10 = dataTable[hero_number][34].split(",");
		for (i=0;i<pers10.length;i++){
			if (persSkills[(pers10[i]-1)][2]=='1'){cc='33px';}else{cc='24px';}
			cl1a.innerHTML = '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/personal/'+ persSkills[pers10[i]-1][1] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+persSkills[(pers10[i]-1)][2]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+persSkills[pers10[i]-1][1]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">'+skill_type[persSkills[pers10[i]-1][3]]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Перезарядка: '+persSkills[pers10[i]-1][6]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Дальность: '+persSkills[pers10[i]-1][4]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Диапазон: '+persSkills[pers10[i]-1][5]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+persSkills[pers10[i]-1][7]+'</div>';
		}
	}
	if (dataTable[hero_number][35]!==''){
		pers102 = dataTable[hero_number][35].split(",");
		for (i=0;i<pers102.length;i++){
			if (commonSkills[(pers102[i]-1)][1]=='1'){cc='33px';}else{cc='24px';}
			cl1a.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/common/'+ commonSkills[pers102[i]-1][0] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+commonSkills[(pers102[i]-1)][1]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+commonSkills[pers102[i]-1][0]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">'+commonSkills[pers102[i]-1][2]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Перезарядка: '+commonSkills[pers102[i]-1][5]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Дальность: '+commonSkills[pers102[i]-1][3]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Диапазон: '+commonSkills[pers102[i]-1][4]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+commonSkills[pers102[i]-1][6]+'</div>';
		}
	}
	if (dataTable[hero_number][36]!==''){
		pers11 = dataTable[hero_number][36].split(",");
		for (i=0;i<pers11.length;i++){
			if (persSkills[(pers11[i]-1)][2]=='1'){cc='33px';}else{cc='24px';}
			cl1b.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/personal/'+ persSkills[pers11[i]-1][1] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+persSkills[(pers11[i]-1)][2]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+persSkills[pers11[i]-1][1]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">'+skill_type[persSkills[pers11[i]-1][3]]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Перезарядка: '+persSkills[pers11[i]-1][6]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Дальность: '+persSkills[pers11[i]-1][4]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Диапазон: '+persSkills[pers11[i]-1][5]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+persSkills[pers11[i]-1][7]+'</div>';
		}
	}
	if (dataTable[hero_number][37]!==''){
		pers112 = dataTable[hero_number][37].split(",");
		for (i=0;i<pers112.length;i++){
			if (commonSkills[(pers112[i]-1)][1]=='1'){cc='33px';}else{cc='24px';}
			cl1b.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/common/'+ commonSkills[pers112[i]-1][0] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+commonSkills[(pers112[i]-1)][1]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+commonSkills[pers112[i]-1][0]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">'+commonSkills[pers112[i]-1][2]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Перезарядка: '+commonSkills[pers112[i]-1][5]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Дальность: '+commonSkills[pers112[i]-1][3]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Диапазон: '+commonSkills[pers112[i]-1][4]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+commonSkills[pers112[i]-1][6]+'</div>';
		}
	}
	if (dataTable[hero_number][38]!==''){
		pers12 = dataTable[hero_number][38].split(",");
		for (i=0;i<pers12.length;i++){
			if (persSkills[(pers12[i]-1)][2]=='1'){cc='33px';}else{cc='24px';}
			cl1c.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/personal/'+ persSkills[pers12[i]-1][1] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+persSkills[(pers12[i]-1)][2]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+persSkills[pers12[i]-1][1]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">'+skill_type[persSkills[pers12[i]-1][3]]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Перезарядка: '+persSkills[pers12[i]-1][6]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Дальность: '+persSkills[pers12[i]-1][4]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Диапазон: '+persSkills[pers12[i]-1][5]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+persSkills[pers12[i]-1][7]+'</div>';
		}
	}
	if (dataTable[hero_number][39]!==''){
		pers122 = dataTable[hero_number][39].split(",");
		for (i=0;i<pers122.length;i++){
			if (commonSkills[(pers122[i]-1)][1]=='1'){cc='33px';}else{cc='24px';}
			cl1c.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/common/'+ commonSkills[pers122[i]-1][0] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+commonSkills[(pers122[i]-1)][1]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+commonSkills[pers122[i]-1][0]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">'+commonSkills[pers122[i]-1][2]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Перезарядка: '+commonSkills[pers122[i]-1][5]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Дальность: '+commonSkills[pers122[i]-1][3]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Диапазон: '+commonSkills[pers122[i]-1][4]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+commonSkills[pers122[i]-1][6]+'</div>';
		}
	}
	
function iconC1aOpen(){
	c1aOpen = document.getElementById("cl1a");
	a1 = document.getElementById("a1");
	if (c1aOpen){
		if (c1aOpen.classList.contains('display_none')){
			a1.style.filter = "drop-shadow(0 0 1px white)";
			c1aOpen.className = c1aOpen.className.replace("display_none", "display_table");
		} else if (c1aOpen.classList.contains('display_table')){
			a1.style.filter = "none";
			c1aOpen.className = c1aOpen.className.replace("display_table", "display_none");
		}
	}
}
function iconC1bOpen(){
	c1bOpen = document.getElementById("cl1b");
	b1 = document.getElementById("b1");
	if (c1bOpen){
		if (c1bOpen.classList.contains('display_none')){
			b1.style.filter = "drop-shadow(0 0 1px white)";
			c1bOpen.className = c1bOpen.className.replace("display_none", "display_table");
		} else if (c1bOpen.classList.contains('display_table')){
			b1.style.filter = "none";
			c1bOpen.className = c1bOpen.className.replace("display_table", "display_none");
		}
	}
}
function iconC1cOpen(){
	c1cOpen = document.getElementById("cl1c");
	c1 = document.getElementById("c1");
	if (c1cOpen){
		if (c1cOpen.classList.contains('display_none')){
			c1.style.filter = "drop-shadow(0 0 1px white)";
			c1cOpen.className = c1cOpen.className.replace("display_none", "display_table");
		} else if (c1cOpen.classList.contains('display_table')){
			c1.style.filter = "none";
			c1cOpen.className = c1cOpen.className.replace("display_table", "display_none");
		}
	}
}


//2A
if ((dataTable[hero_number][40].split(",").length == dataTable[hero_number][41].split(",").length) || (dataTable[hero_number][40].split(",").length == 2)){dop10='<img id="sha0" style="float:left;margin: 10px 0;" src="images/shadow_all.png" width="100%" height="10px" />';dop11 = '';}else{dop10='';dop11='<img id="sha0" style="float:left;margin: 10px 0;" src="images/shadow_all.png" width="100%" height="10px" />';}

if (dataTable[hero_number][40]!=='' || dataTable[hero_number][41]!==''){
	if ((dataTable[hero_number][34]!=='' || dataTable[hero_number][35]!=='') && (dataTable[hero_number][36]!=='' || dataTable[hero_number][37]!=='') && (dataTable[hero_number][38]!=='' || dataTable[hero_number][39]!=='')){
		cl20.innerHTML = '<div id="a2" style="display:block;width:100%;height:85px;position:relative;"><img onclick=iconC2aOpen() style="position:absolute;left:'+undw+';top:-13px;" src="images/under_job.png" height="100px;" /><img onclick=iconC2aOpen() style="position:absolute;left:38px;top:-2px;" src="images/heroes/job/'+heroName+'/2A.png" height="57px" /><img style="position:absolute;top:52px;left:'+cli+';" src="images/classes/'+classStats[chb[0]-1][2]+'.png" height="25px" /></div>';
	} else {
		cl20.innerHTML = '<div id="a2" style="display:block;width:100%;height:130px;position:relative;"><img onclick=iconC2aOpen() style="position:absolute;left:'+undw+';top:-13px;" src="images/under_job.png" height="156px;" /><img onclick=iconC2aOpen() style="position:absolute;left:58px;top:-1px;" src="images/heroes/job/'+heroName+'/2A.png" height="95px" /><img style="position:absolute;top:86px;left:'+cli+';" src="images/classes/'+classStats[chb[0]-1][2]+'.png" height="35px" /></div>';
	}
} else {cl20.innerHTML ='';}
//2B
if ((dataTable[hero_number][42].split(",").length == dataTable[hero_number][43].split(",").length) || (dataTable[hero_number][42].split(",").length ==2)){dop20='<img id="sha0" style="float:left;margin: 10px 0;" src="images/shadow_all.png" width="100%" height="10px" />';dop21 = '';}else{dop20='';dop21='<img id="sha0" style="float:left;margin: 10px 0;" src="images/shadow_all.png" width="100%" height="10px" />';}
if (dataTable[hero_number][42]!=='' || dataTable[hero_number][43]!==''){
	if ((dataTable[hero_number][34]!=='' || dataTable[hero_number][35]!=='') && (dataTable[hero_number][36]!=='' || dataTable[hero_number][37]!=='') && (dataTable[hero_number][38]!=='' || dataTable[hero_number][39]!=='')){
		cl21.innerHTML = '<div id="b2" style="display:block;width:100%;height:85px;position:relative;"><img onclick=iconC2bOpen() style="position:absolute;left:'+undw+';top:-13px;" src="images/under_job.png" height="100px;" /><img onclick=iconC2bOpen() style="position:absolute;left:38px;top:-2px;" src="images/heroes/job/'+heroName+'/2B.png" height="57px" /><img style="position:absolute;top:52px;left:'+cli+';" src="images/classes/'+classStats[chb[0]-1][2]+'.png" height="25px" /></div>';
	} else {
		cl21.innerHTML = '<div id="b2" style="display:block;width:100%;height:130px;position:relative;"><img onclick=iconC2bOpen() style="position:absolute;left:'+undw+';top:-13px;" src="images/under_job.png" height="156px;" /><img onclick=iconC2bOpen() style="position:absolute;left:58px;top:-1px;" src="images/heroes/job/'+heroName+'/2B.png" height="95px" /><img style="position:absolute;top:86px;left:'+cli+';" src="images/classes/'+classStats[chb[0]-1][2]+'.png" height="35px" /></div>';
	}
} else {cl21.innerHTML ='';}
//2C
if (dataTable[hero_number][44].split(",").length == dataTable[hero_number][45].split(",").length){dop30='<img id="sha0" style="float:left;margin: 10px 0;" src="images/shadow_all.png" width="100%" height="10px" />';dop31 = '';}else{dop30='<img id="sha0" style="float:left;margin: 10px 0;" src="images/shadow_all.png" width="100%" height="10px" />';dop31='<img id="sha0" style="float:left;margin: 10px 0;" src="images/shadow_all.png" width="100%" height="10px" />';}
if (dataTable[hero_number][44]!=='' || dataTable[hero_number][45]!==''){
	if ((dataTable[hero_number][34]!=='' || dataTable[hero_number][35]!=='') && (dataTable[hero_number][36]!=='' || dataTable[hero_number][37]!=='') && (dataTable[hero_number][38]!=='' || dataTable[hero_number][39]!=='')){
		cl22.innerHTML = '<div id="c2" style="display:block;width:100%;height:85px;position:relative;"><img onclick=iconC2cOpen() style="position:absolute;left:'+undw+';top:-13px;" src="images/under_job.png" height="100px;" /><img onclick=iconC2cOpen() style="position:absolute;left:38px;top:-2px;" src="images/heroes/job/'+heroName+'/2C.png" height="57px" /><img style="position:absolute;top:52px;left:'+cli+';" src="images/classes/'+classStats[chb[1]-1][2]+'.png" height="25px" /></div>';
	} else {
		cl22.innerHTML = '<div id="c2" style="display:block;width:100%;height:130px;position:relative;"><img onclick=iconC2cOpen() style="position:absolute;left:'+undw+';top:-13px;" src="images/under_job.png" height="156px;" /><img onclick=iconC2cOpen() style="position:absolute;left:58px;top:-1px;" src="images/heroes/job/'+heroName+'/2C.png" height="95px" /><img style="position:absolute;top:86px;left:'+cli+';" src="images/classes/'+classStats[chb[1]-1][2]+'.png" height="35px" /></div>';
	}
} else {cl22.innerHTML ='';}

glowH2 = document.getElementsByClassName("glowH2");
for (i=0;i<glowH2.length;i++){
	if ((dataTable[hero_number][34]!=='' || dataTable[hero_number][35]!=='') && (dataTable[hero_number][36]!=='' || dataTable[hero_number][37]!=='') && (dataTable[hero_number][38]!=='' || dataTable[hero_number][39]!=='')){
		glowH2[i].style.height = '85px';
	} else {
		glowH2[i].style.height = '130px';
	}
}

//скилы для 2 классов
cl2a = document.getElementById("cl2a");
cl2b = document.getElementById("cl2b");
cl2c = document.getElementById("cl2c");
	if (dataTable[hero_number][40]!==''){
		pers20 = dataTable[hero_number][40].split(",");
		for (i=0;i<pers20.length;i++){
			if (persSkills[(pers20[i]-1)][2]=='1'){cc='33px';}else{cc='24px';}
			j = i;
			cl2a.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/personal/'+ persSkills[pers20[i]-1][1] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+persSkills[(pers20[i]-1)][2]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+persSkills[pers20[i]-1][1]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">'+skill_type[persSkills[pers20[i]-1][3]]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Перезарядка: '+persSkills[pers20[i]-1][6]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Дальность: '+persSkills[pers20[i]-1][4]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Диапазон: '+persSkills[pers20[i]-1][5]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+persSkills[pers20[i]-1][7]+'</div>';
			cl2a.innerHTML += dop10;
			dop10='';
		}
	}
	if (dataTable[hero_number][41]!==''){
		pers202 = dataTable[hero_number][41].split(",");
		for (i=0;i<pers202.length;i++){
			if (commonSkills[(pers202[i]-1)][1]=='1'){cc='33px';}else{cc='24px';}
			sha1 = document.getElementById("sha1");
			cl2a.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/common/'+ commonSkills[pers202[i]-1][0] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+commonSkills[(pers202[i]-1)][1]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+commonSkills[pers202[i]-1][0]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">'+commonSkills[pers202[i]-1][2]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Перезарядка: '+commonSkills[pers202[i]-1][5]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Дальность: '+commonSkills[pers202[i]-1][3]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Диапазон: '+commonSkills[pers202[i]-1][4]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+commonSkills[pers202[i]-1][6]+'</div>';
			cl2a.innerHTML += dop11;
			dop11='';
		}
	}
	if (dataTable[hero_number][42]!==''){
		pers21 = dataTable[hero_number][42].split(",");
		for (i=0;i<pers21.length;i++){
			if (persSkills[(pers21[i]-1)][2]=='1'){cc='33px';}else{cc='24px';}
			j = i;
			cl2b.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/personal/'+ persSkills[pers21[i]-1][1] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+persSkills[(pers21[i]-1)][2]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+persSkills[pers21[i]-1][1]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">'+skill_type[persSkills[pers21[i]-1][3]]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Перезарядка: '+persSkills[pers21[i]-1][6]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Дальность: '+persSkills[pers21[i]-1][4]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Диапазон: '+persSkills[pers21[i]-1][5]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+persSkills[pers21[i]-1][7]+'</div>';
			cl2b.innerHTML += dop20;
			dop20='';
		}
	}
	if (dataTable[hero_number][43]!==''){
		pers212 = dataTable[hero_number][43].split(",");
		for (i=0;i<pers212.length;i++){
			if (commonSkills[(pers212[i]-1)][1]=='1'){cc='33px';}else{cc='24px';}
			sha2 = document.getElementById("sha2");
			cl2b.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/common/'+ commonSkills[pers212[i]-1][0] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+commonSkills[(pers212[i]-1)][1]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+commonSkills[pers212[i]-1][0]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">'+commonSkills[pers212[i]-1][2]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Перезарядка: '+commonSkills[pers212[i]-1][5]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Дальность: '+commonSkills[pers212[i]-1][3]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Диапазон: '+commonSkills[pers212[i]-1][4]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+commonSkills[pers212[i]-1][6]+'</div>';
			cl2b.innerHTML += dop21;
			dop21='';
		}
	}
	if (dataTable[hero_number][44]!==''){
		pers22 = dataTable[hero_number][44].split(",");
		for (i=0;i<pers22.length;i++){
			if (persSkills[(pers22[i]-1)][2]=='1'){cc='33px';}else{cc='24px';}
			j = i;
			cl2c.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/personal/'+ persSkills[pers22[i]-1][1] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+persSkills[(pers22[i]-1)][2]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+persSkills[pers22[i]-1][1]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">'+skill_type[persSkills[pers22[i]-1][3]]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Перезарядка: '+persSkills[pers22[i]-1][6]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Дальность: '+persSkills[pers22[i]-1][4]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Диапазон: '+persSkills[pers22[i]-1][5]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+persSkills[pers22[i]-1][7]+'</div>';
			cl2c.innerHTML += dop30;
			dop30='';
		}
	}
	if (dataTable[hero_number][45]!==''){
		pers222 = dataTable[hero_number][45].split(",");
		for (i=0;i<pers222.length;i++){
			if (commonSkills[(pers222[i]-1)][1]=='1'){cc='33px';}else{cc='24px';}
			sha3 = document.getElementById("sha3");
			cl2c.innerHTML += '<div style="text-align:left;display:block;width:100%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/common/'+ commonSkills[pers222[i]-1][0] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+commonSkills[(pers222[i]-1)][1]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b>'+commonSkills[pers222[i]-1][0]+'</b><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">'+commonSkills[pers222[i]-1][2]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Перезарядка: '+commonSkills[pers222[i]-1][5]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Дальность: '+commonSkills[pers222[i]-1][3]+'</span>'+bre+'<img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Диапазон: '+commonSkills[pers222[i]-1][4]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+commonSkills[pers222[i]-1][6]+'</div>';
			cl2c.innerHTML += dop31;
			dop31='';
		}
	}

function iconC2aOpen(){
	c2aOpen = document.getElementById("cl2a");
	a2 = document.getElementById("a2");
	if (c2aOpen){
		if (c2aOpen.classList.contains('display_none')){
			a2.style.filter = "drop-shadow(0 0 1px white)";
			c2aOpen.className = c2aOpen.className.replace("display_none", "display_table");
		} else if (c2aOpen.classList.contains('display_table')){
			a2.style.filter = "none";
			c2aOpen.className = c2aOpen.className.replace("display_table", "display_none");
		}
	}
}
function iconC2bOpen(){
	c2bOpen = document.getElementById("cl2b");
	b2 = document.getElementById("b2");
	if (c2bOpen){
		if (c2bOpen.classList.contains('display_none')){
			b2.style.filter = "drop-shadow(0 0 1px white)";
			c2bOpen.className = c2bOpen.className.replace("display_none", "display_table");
		} else if (c2bOpen.classList.contains('display_table')){
			b2.style.filter = "none";
			c2bOpen.className = c2bOpen.className.replace("display_table", "display_none");
		}
	}
}
function iconC2cOpen(){
	c2cOpen = document.getElementById("cl2c");
	c2 = document.getElementById("c2");
	if (c2cOpen){
		if (c2cOpen.classList.contains('display_none')){
			c2.style.filter = "drop-shadow(0 0 1px white)";
			c2cOpen.className = c2cOpen.className.replace("display_none", "display_table");
		} else if (c2cOpen.classList.contains('display_table')){
			c2.style.filter = "none";
			c2cOpen.className = c2cOpen.className.replace("display_table", "display_none");
		}
	}
}


//SP
/*var clSP = document.getElementById("clSP");
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
		clSP.innerHTML += '<div style="display:block;width:48%;height:auto;float:'+fl+';"><div style="text-align:left;display:block;width:90%;height:auto;float:left;"><div style="position:relative;display:block;width:100px;height:100px;float:left;"><img style="position:absolute;top:2px;left:2px;" src="images/skills/SP skills/'+ SPskills[persSP[i]-1][1] +'.png" height="80px" /><img style="position:absolute;" src="images/Border_Icon_skill.png" height="84px" /><img style="position:absolute;top:73px;left:'+cc+';" src="images/'+SPskills[(persSP[i]-1)][2]+'c.png" height="16px" /></div><div style="display:block;width:70%;height:auto;float:left;"><b style="vertical-align:top;">'+SPskills[persSP[i]-1][1]+'</b>  <img src="images/sp skill.png"  height="20px" /><br><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;display:inline-block;width:156px;">'+skill_type[SPskills[persSP[i]-1][3]]+'</span><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Перезарядка: '+SPskills[persSP[i]-1][6]+'</span><br><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;display:inline-block;width:156px;">Дальность: '+SPskills[persSP[i]-1][4]+'</span><img src="images/sold_stats.png" height="20px"><span style="vertical-align:super;margin-right:30px;">Диапазон: '+SPskills[persSP[i]-1][5]+'</span></div></div><div style="text-align:left;display:block;width:97%;height:auto;float:left;white-space:pre-wrap;">'+SPskills[persSP[i]-1][7]+'</div></div>';
	}
}*/

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
		b_pvep.innerHTML = '<span style="float:left;margin-top:7px;display:block;font-size:19px;">PVE</span>';
		for (i=0;i<builds[hero_number][2];i++){
			b_pvep.innerHTML += '<span style="margin:5px;height:auto;display:block;width:35px;float:left;"><img src="images/star.png" height="25px" /></span>';
		}
		b_pvep.innerHTML += '<span style="clear:both;float:left;margin-top:7px;display:block;font-size:19px;">PVP</span>';
		for (i=0;i<builds[hero_number][3];i++){
			b_pvep.innerHTML += '<span style="margin:5px;height:auto;display:block;width:35px;float:left;"><img src="images/star.png" height="25px" /></span>';
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
			b_pvepsp.innerHTML = '<span style="float:left;margin-top:7px;display:block;font-size:19px;">PVE</span>';
			for (i=0;i<SPbuilds[dataTable[hero_number][48]-1][2];i++){
				b_pvepsp.innerHTML += '<span style="margin:5px;height:auto;display:block;width:35px;float:left;"><img src="images/star.png" height="25px" /></span>';
			}
			b_pvepsp.innerHTML += '<span style="clear:both;float:left;margin-top:7px;display:block;font-size:19px;">PVP</span>';
			for (i=0;i<SPbuilds[dataTable[hero_number][48]-1][3];i++){
				b_pvepsp.innerHTML += '<span style="margin:5px;height:auto;display:block;width:35px;float:left;"><img src="images/star.png" height="25px" /></span>';
			}
	} 
} /*else {
	h_info5.innerHTML='';
	mozaik3.style.display="block";
	h_info5.innerHTML+='<div style="display:block;width:100%;height:auto;text-align:center;font-size:20px;margin-bottom:20px;font-weight: bold;">Рейтинг и рекомендации по развитию героя</div>';
	h_info5.innerHTML+='<div style="display: -webkit-box;"><div onclick=startBuildOpen() class="color_hover" id="startbut" style="display:block;width:178px;height:118px;margin:30px 60px 30px 330px;cursor:pointer;position:relative;"><img src="images/start1.png" width="180px"><span style="position:absolute;left: 50px;top: 75px;">Стартовый</span></div><div onclick=baseBuildOpen() class="color_hover" id="basebut" style="display:block;width:178px;height:118px;cursor:pointer;position:relative;margin-top:30px;"><img src="images/base1.png" width="180px"><span style="position:absolute;left: 58px;top: 75px;">Базовый</span></div><div onclick=bestBuildOpen() class="color_hover" id="bestbut" style="display:block;width:178px;height:118px;margin-left:60px;cursor:pointer;position:relative;margin-top:30px;"><img src="images/best1.png" width="180px"><span style="position:absolute;left: 61px;top: 75px;">Лучший</span></div></div>';
	
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
		stB_ocenka.innerHTML = '<span>ПВЕ</span><br>';
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
		h_info5.innerHTML += '<div id="base_temp" class="display_none"><div id="basB" style="display:block;width:100%;height:auto;margin-bottom:0px;"><img src="images/base2.png" width="1320px"></div><div style="display:block;width:100%;height:auto;text-align:center;font-size:17px;margin-bottom:20px;">*Снаряжение рекомендуется качать копиями</div><table border="0" style="width:95%;margin:0 auto;"><tr><td style="width:9%;"><img src="images/item_type/weapon.png" height="50px" /></td><td id="basB_weapon" style="width:32%;text-align:left;"></td><td style="width:5%;"></td><td style="width:7%;"><img src="images/chant.png" height="70px" /></td><td style="width:5%;"></td><td id="basB_sold" style="width:42%;" colspan="2" rowspan="2"></td></tr><tr><td><img src="images/item_type/body.png" height="50px" /></td><td id="basB_body"style="text-align:left;" ></td><td style="vertical-align: middle;"><img src="images/point.png" height="30px" /></td><td id="basB_chari" rowspan="3" style="vertical-align:top;"></td><td style="vertical-align: middle;"><img src="images/point.png" height="30px" /></td></tr><tr><td><img src="images/item_type/head.png" height="50px" /></td><td id="basB_head" style="text-align:left;"></td><td></td><td></td><td colspan="2" id="basB_ocenka" style="width:42%;vertical-align:top;text-align:left;"></td></tr><tr><td><img src="images/item_type/accessoir.png" height="50px" /></td><td id="basB_acc" style="text-align:left;"></td><td></td></tr></table></div>';
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
		basB_ocenka.innerHTML = '<span>ПВЕ</span><br>';
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
		h_info5.innerHTML += '<div id="best_temp" class="display_none"><div id="pveB" style="display:block;width:100%;height:auto;margin-bottom:0px;"><img src="images/best2.png" width="1320px"></div><div style="display:block;width:100%;height:auto;text-align:center;font-size:17px;margin-bottom:20px;">*Если в Лучшей версии присутствует снаряжение с Базовой сборки, такое снаряжение лучше прокачивать копиями.<br>Другие виды снаряжения рекомендуется качать шардами</div><table border="0" style="width:95%;margin:0 auto;"><tr><td style="width:9%;"><img src="images/item_type/weapon.png" height="50px" /></td><td id="weapon_stone" style="width:2%;white-space:pre-wrap;"></td><td id="pveB_weapon" style="width:32%;text-align:left;"></td><td style="width:5%;"></td><td style="width:7%;"><img src="images/chant.png" height="70px" /></td><td style="width:5%;"></td><td id="pveB_sold" style="width:42%;" colspan="2" rowspan="2"></td></tr><tr><td><img src="images/item_type/body.png" height="50px" /></td><td id="body_stone" style="white-space:pre-wrap;"></td><td id="pveB_body"style="text-align:left;" ></td><td style="vertical-align: middle;"><img src="images/point.png" height="30px" /></td><td id="pveB_chari" rowspan="3" style="vertical-align:top;"></td><td style="vertical-align: middle;"><img src="images/point.png" height="30px" /></td></tr><tr><td><img src="images/item_type/head.png" height="50px" /></td><td id="hat_stone" style="white-space:pre-wrap;"></td><td id="pveB_head" style="text-align:left;"></td><td></td><td></td><td colspan="2" id="pveB_ocenka" style="width:42%;vertical-align:top;text-align:left;"></td></tr><tr><td><img src="images/item_type/accessoir.png" height="50px" /></td><td id="acc_stone" style=";white-space:pre-wrap;"></td><td id="pveB_acc" style="text-align:left;"></td><td></td></td></tr></table></div>';
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
		pveB_ocenka.innerHTML = '<span>ПВЕ</span><br>';
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
		h_info5.innerHTML += '<div id="best_temp2" class="display_none"><div id="pvpB" style="display:block;width:100%;height:auto;margin-bottom:0px;"><img src="images/best2.png" width="1320px"></div><div style="display:block;width:100%;height:auto;text-align:center;font-size:17px;margin-bottom:20px;">*Если в Лучшей версии присутствует снаряжение с Базовой сборки, такое снаряжение лучше прокачивать копиями.<br>Другие виды снаряжения рекомендуется качать шардами</div><table border="0" style="width:95%;margin:0 auto;"><tr><td style="width:9%;"><img src="images/item_type/weapon.png" height="50px" /></td><td id="weapon_stone_a" style="width:2%;white-space:pre-wrap;"></td><td id="pvpB_weapon" style="width:32%;text-align:left;"></td><td style="width:5%;"></td><td style="width:7%;"><img src="images/chant.png" height="70px" /></td><td style="width:5%;"></td><td id="pvpB_sold" style="width:42%;" colspan="2" rowspan="2"></td></tr><tr><td><img src="images/item_type/body.png" height="50px" /></td><td id="body_stone_a" style="white-space:pre-wrap;"><td id="pvpB_body" style="text-align:left;" ></td><td style="vertical-align: middle;"><img src="images/point.png" height="30px" /></td><td id="pvpB_chari" rowspan="3" style="vertical-align:top;"></td><td style="vertical-align: middle;"><img src="images/point.png" height="30px" /></td></tr><tr><td><img src="images/item_type/head.png" height="50px" /></td><td id="hat_stone_a" style="white-space:pre-wrap;"></td><td id="pvpB_head" style="text-align:left;"></td><td></td><td></td><td colspan="2" id="pvpB_ocenka" style="width:42%;vertical-align:top;text-align:left;"></td></tr><tr><td><img src="images/item_type/accessoir.png" height="50px" /></td><td id="acc_stone_a" style=";white-space:pre-wrap;"></td><td id="pvpB_acc" style="text-align:left;"></td><td></td><td></td><td colspan="2" id="arena_stones" style="width:42%;vertical-align:top;text-align:left;"></td></tr></table></div>';
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
		pvpB_ocenka.innerHTML = '<span>ПВП</span><br>';
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
} */

var fetter_pic=document.getElementById("fetter_pic");
fetter_title=document.getElementById("fetter_title");
var imgFetter = new Image();
imgFetter.src = "images/heroes/heroes_list/"+ heroName +"/Confession/Confession.jpg";
imgFetter.onload = function(){
	fetter_pic.innerHTML = '<img src="images/heroes/heroes_list/'+ heroName +'/Confession/Confession.jpg" width="425px" />';
	fetter_title.innerHTML += '<span style="line-height:2;display:block;width:120px;margin:0 auto;height:35px;">Признание  <img class="conf_hover" style="position:absolute;vertical-align:middle;cursor:pointer;" src="images/icon_confession.png" height="30px" onclick=window.open("'+confession[hero_number][1]+'","new_window"); /></span>';
};
imgFetter.onerror = function(){
	fetter_pic.style.display='none';
	fetter_title.style.display='none';
};


//$('img').error(function() {
//   $(this).hide();
//});
