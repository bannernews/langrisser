// soldDat.length  -  колл-во всех солдат
// soldDat[0].length  -  колл-во элементов у солдат
// 0 - имя героя, 1 - англ имя героя, 2 - фракция, 3 - ранг, 4 - ковка, 5 - СП, 6 - часть
var heroesDat = [
    [
        "",
        "",
        "Фракции",
        "Ранг",
        "Ковка",
        "SP",
        "Часть"
    ],
    [
        "Аарон",
        "Aaron",
        "ЛС,",
        "R",
        "",
        "",
        "Л13"
    ],
    [
        "Аватар Света",
        "Light of Genesis",
        "ЛС,ИС,РЕ,",
        "SSR",
        "",
        "",
        "РЕИ"
    ],
    [
        "Автократо",
        "Autokrato",
        "ИМП,РЕ,",
        "SSR",
        "",
        "",
        "РЕИ"
    ],
    [
        "Агнес",
        "Agnes",
        "ЛС,АП,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Аданкельмо",
        "Adankelmo",
        "МС,ГЙ,ТАИР,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Азуса",
        "Azusa",
        "ИС,МС,ТАИР,",
        "SSR",
        "forge",
        "",
        "М3"
    ],
    [
        "Айнз",
        "Ainz",
        "ТР,РЕ,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Айрис",
        "Iris",
        "АП,ИМП,ГВ,",
        "SR",
        "",
        "",
        ""
    ],
    [
        "Ака",
        "Aka",
        "ЛС,ИС,ТАИР,",
        "SSR",
        "forge",
        "",
        "М1"
    ],
    [
        "Алисия",
        "Alicia",
        "ГГ,ТАИР,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Алтемюллер",
        "Altemuller",
        "ИМП,МС,",
        "SSR",
        "",
        "SP",
        "Л13"
    ],
    [
        "Алтина",
        "Altina",
        "ИМП,МУ,ГВ,",
        "SR",
        "",
        "",
        ""
    ],
    [
        "Алустриэль",
        "Alustriel",
        "ЛС,ИС,МС,",
        "SSR",
        "forge",
        "",
        "М1"
    ],
    [
        "Альбедо",
        "Albedo",
        "ТР,РЕ,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Альмеда",
        "Almeda",
        "ГГ,ЛС,ТАИР,",
        "N",
        "forge",
        "SP",
        "М1"
    ],
    [
        "Альфа",
        "Alpha",
        "ИМП,ТР,",
        "SSR",
        "forge",
        "",
        "М2"
    ],
    [
        "Альфред",
        "Alfred",
        "МУ,ГЙ,",
        "SR",
        "forge",
        "",
        "Л45"
    ],
    [
        "Амадей",
        "Amadeus",
        "ИС,МС,ТАИР,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Анджелина",
        "Angelina",
        "АП,МУ,ГЙ,",
        "SSR",
        "forge",
        "",
        "Л45"
    ],
    [
        "Андриоле",
        "Andriole",
        "ИМП,МС,МУ,",
        "SSR",
        "forge",
        "",
        "Т"
    ],
    [
        "Анжелика",
        "Angelica",
        "ЛС,ГВ,",
        "SR",
        "",
        "",
        "М1"
    ],
    [
        "Анна",
        "Anna",
        "АП,ИМП,",
        "R",
        "",
        "",
        "Л13"
    ],
    [
        "Апофеоз",
        "Apotheosis",
        "ТР,ГЙ,ТАИР,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Арес",
        "Ares",
        "ГГ,ИМП,РЕ,",
        "SSR",
        "",
        "",
        "РЕИ"
    ],
    [
        "Арианход",
        "Arianhod",
        "ТАИР,РЕ,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Архонт Луны",
        "Archon of the Moon",
        "МС,ГЙ,ТАИР,",
        "SSR",
        "forge",
        "",
        "М3"
    ],
    [
        "Ашемар",
        "Ashemar",
        "ИС,АП,ТАИР,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Ашрам",
        "Ashram",
        "МС,ТР,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Бернхардт",
        "Bernhardt",
        "ИМП,ТР,ТАИР,",
        "SSR",
        "",
        "SP",
        "Л13"
    ],
    [
        "Бетти",
        "Betty",
        "ЛС,ИМП,ТР,",
        "SSR",
        "forge",
        "",
        "Л13"
    ],
    [
        "Бозел",
        "Bozel",
        "ТР,ТАИР,",
        "SSR",
        "forge",
        "",
        "Л13"
    ],
    [
        "Бренда",
        "Brenda",
        "МУ,ГЙ,",
        "SSR",
        "forge",
        "",
        "Л45"
    ],
    [
        "Ван",
        "Van",
        "ГГ,ГЙ,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Варгас",
        "Vargas",
        "ИМП,МС,",
        "SR",
        "forge",
        "",
        "Л13"
    ],
    [
        "Варна",
        "Varna",
        "ИМП,ТР,",
        "SR",
        "",
        "",
        "Л13"
    ],
    [
        "Ватару",
        "Wataru",
        "ГГ,ГЙ,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Вернер",
        "Werner",
        "ЛС,МУ,ГЙ,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Вернер Дайм",
        "Werner Dime",
        "ИМП,РЕ,",
        "SSR",
        "",
        "",
        "РЕИ"
    ],
    [
        "Вилер",
        "Wiler",
        "МС,ГЙ,",
        "SSR",
        "forge",
        "",
        "Л45"
    ],
    [
        "Винсент",
        "Vincent",
        "ИМП,ТР,МУ,",
        "SSR",
        "",
        "",
        "М2"
    ],
    [
        "Вираш",
        "Virash",
        "МУ,ГЙ,",
        "SSR",
        "forge",
        "",
        "Л45"
    ],
    [
        "Гаури",
        "Goury",
        "ГГ,ЛС,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Герольд и Лайла",
        "Gerold & Layla",
        "ИС,МС,",
        "SSR",
        "forge",
        "",
        "Л13"
    ],
    [
        "Гизаров",
        "Gizarof",
        "ТР,ТАИР,",
        "SSR",
        "forge",
        "",
        "Л45"
    ],
    [
        "Гинтоки",
        "Gintoki",
        "ГГ,ГЙ,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Греншиль",
        "Grenshiel",
        "ИС,АП,МС,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Гренье",
        "Grenier",
        "ЛС,",
        "N",
        "",
        "SP",
        "М1"
    ],
    [
        "Густав",
        "Gustaf",
        "ТР,ТАИР,РЕ,",
        "SSR",
        "",
        "",
        "РЕИ"
    ],
    [
        "Дева ковчега",
        "Saint of the Ark",
        "ГГ,АП,ТАИР,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Девушка в доспехах",
        "Girl in the Shell",
        "АП,ТР,РЕ,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Джаглер",
        "Jugler",
        "ИС,МУ,ТАИР,",
        "SSR",
        "",
        "",
        "Л13"
    ],
    [
        "Джек",
        "Jack",
        "ЛС,МУ,ГЙ,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Джессика",
        "Jessica",
        "ЛС,ИС,ТАИР,",
        "R",
        "",
        "",
        "Л13"
    ],
    [
        "Джо и Конни",
        "Joa & Connie",
        "ИМП,МС,РЕ,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Джошуа",
        "Joshua",
        "АП,МУ,ГВ,",
        "SR",
        "",
        "",
        ""
    ],
    [
        "Джулиан",
        "Julian",
        "ТР,МУ,РЕ,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Дидлит",
        "Deedlit",
        "ИС,АП,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Диос",
        "Dios",
        "ИС,МС,",
        "R",
        "",
        "",
        "Л13"
    ],
    [
        "Дихарт",
        "Dieharte",
        "ГГ,ИС,МУ,",
        "SSR",
        "",
        "SP",
        "Л13"
    ],
    [
        "Железный Воитель",
        "Ironblood Commander",
        "ИМП,МС,ГЙ,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Зелгадис",
        "Zelgadius",
        "МС,ТАИР,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Зерида",
        "Zerida",
        "ТР,МУ,ТАИР,",
        "SSR",
        "",
        "",
        "М1"
    ],
    [
        "Злой Бог Крюгер",
        "Evil God Kreuger",
        "ТР,ТАИР,",
        "SSR",
        "",
        "",
        "М2"
    ],
    [
        "Илюсия",
        "Ilucia",
        "ЛС,МС,",
        "SSR",
        "forge",
        "",
        "М2"
    ],
    [
        "Имельда",
        "Imelda",
        "ИМП,МС,",
        "SR",
        "",
        "",
        "Л13"
    ],
    [
        "Император Ловина",
        "Emperor Lovina",
        "ГГ,МС,РЕ,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Исара",
        "Isara",
        "МС,ГВ,",
        "SR",
        "",
        "",
        ""
    ],
    [
        "Кагура",
        "Kagura",
        "ГГ,АП,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Кагуя",
        "Kaguya",
        "АП,МС,ТАИР,",
        "SSR",
        "forge",
        "",
        "М3"
    ],
    [
        "Кадзума",
        "Kazuma",
        "ЛС,МУ,ГВ,",
        "SR",
        "forge",
        "",
        ""
    ],
    [
        "Каролина",
        "Caroline",
        "ЛС,ИМП,МС,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Каюра",
        "Kayura",
        "ТР,ТАИР,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Кертес",
        "Kertesz",
        "ТР,РЕ,",
        "SSR",
        "",
        "",
        "РЕИ"
    ],
    [
        "Кирика",
        "Kirika",
        "АП,ГЙ,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Кирикадзе",
        "Kirikaze",
        "ИС,МУ,",
        "SR",
        "forge",
        "",
        "Л13"
    ],
    [
        "Кит",
        "Keith",
        "ЛС,",
        "R",
        "",
        "",
        "Л13"
    ],
    [
        "Кларетт",
        "Clarett",
        "АП,МУ,ГЙ,",
        "SSR",
        "forge",
        "",
        "Л45"
    ],
    [
        "Клозе",
        "Klose",
        "АП,ГЙ,ГВ,",
        "SR",
        "forge",
        "",
        ""
    ],
    [
        "Клотэр",
        "Clotaire",
        "ИМП,МС,",
        "SSR",
        "",
        "",
        "М2"
    ],
    [
        "Король Красной Луны",
        "King of the Red Moon",
        "ИС,ТР,ТАИР,",
        "SSR",
        "forge",
        "",
        "М2"
    ],
    [
        "Крис",
        "Chris",
        "ГГ,ЛС,АП,",
        "SR",
        "forge",
        "",
        "Л13"
    ],
    [
        "Кристиан",
        "Christiane",
        "АП,ИМП,РЕ,",
        "SSR",
        "",
        "",
        "РЕИ"
    ],
    [
        "Курама",
        "Kurama",
        "МС,ГЙ,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Ламбда",
        "Lambda",
        "ГГ,ГЙ,ТАИР,",
        "SSR",
        "forge",
        "",
        "Л45"
    ],
    [
        "Лана",
        "Lana",
        "АП,ТР,",
        "SSR",
        "",
        "SP",
        "Л13"
    ],
    [
        "Ланс",
        "Lance",
        "ЛС,ИМП,МС,",
        "SR",
        "",
        "",
        "Л13"
    ],
    [
        "Левин",
        "Lewin",
        "ИС,",
        "R",
        "",
        "SP",
        "Л13"
    ],
    [
        "Ледин",
        "Ledin",
        "ГГ,ЛС,",
        "SSR",
        "forge",
        "SP",
        "Л13"
    ],
    [
        "Ленфорд",
        "Lanford",
        "МС,ГЙ,",
        "SSR",
        "forge",
        "",
        "Л45"
    ],
    [
        "Лео Бек",
        "Leo Beck",
        "ИМП,ТР,ТАИР,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Леон",
        "Leon",
        "ИМП,МС,",
        "SSR",
        "",
        "SP",
        "Л13"
    ],
    [
        "Леонхарт",
        "Leonhardt",
        "ИС,ИМП,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Лестер",
        "Lester",
        "ЛС,МУ,",
        "R",
        "",
        "",
        "Л13"
    ],
    [
        "Летисия",
        "Leticia",
        "ИМП,МС,",
        "R",
        "",
        "",
        "Л13"
    ],
    [
        "Лиана",
        "Liana",
        "ГГ,ЛС,",
        "SSR",
        "",
        "",
        "Л13"
    ],
    [
        "Лиза",
        "Liza",
        "ГГ,МУ,ГЙ,",
        "SR",
        "",
        "",
        "М3"
    ],
    [
        "Ликорис",
        "Licorice",
        "АП,ТР,РЕ,",
        "SSR",
        "forge",
        "",
        "РЕИ"
    ],
    [
        "Лина",
        "Lina",
        "ГГ,ТР,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Листелл",
        "Listell",
        "ТР,ГЙ,",
        "SSR",
        "forge",
        "",
        "Л45"
    ],
    [
        "Лиффани",
        "Liffany",
        "ИС,АП,",
        "SR",
        "forge",
        "",
        "Л13"
    ],
    [
        "Лостхэм",
        "Lostham",
        "ИС,МС,МУ,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Лукреция",
        "Lucretia",
        "АП,ИМП,РЕ,",
        "SSR",
        "",
        "",
        "РЕИ"
    ],
    [
        "Луна",
        "Luna",
        "ИС,АП,МС,",
        "SSR",
        "",
        "",
        "Л13"
    ],
    [
        "Лэйд",
        "Laird",
        "ИМП,МУ,",
        "R",
        "",
        "",
        "Л13"
    ],
    [
        "Лэндиус",
        "Landius",
        "ГГ,ГЙ,",
        "SSR",
        "forge",
        "",
        "Л45"
    ],
    [
        "Люгнер",
        "Lugner",
        "ЛС,МС,РЕ,",
        "SSR",
        "",
        "",
        "РЕИ"
    ],
    [
        "Майя",
        "Maiya",
        "ИМП,РЕ,",
        "SSR",
        "forge",
        "",
        "РЕИ"
    ],
    [
        "Маклейн",
        "McClein",
        "МС,МУ,ГЙ,",
        "SSR",
        "",
        "",
        "Л45"
    ],
    [
        "Мариандель",
        "Mariandel",
        "АП,ГЙ,ТАИР,",
        "SSR",
        "forge",
        "",
        "М3"
    ],
    [
        "Мариэль",
        "Mariel",
        "ЛС,РЕ,",
        "SSR",
        "forge",
        "",
        "РЕИ"
    ],
    [
        "Мелания",
        "Melania",
        "ЛС,АП,ГЙ,",
        "SR",
        "",
        "",
        "М2"
    ],
    [
        "Метью",
        "Matthew",
        "ГГ,ЛС,",
        "N",
        "",
        "",
        "М1"
    ],
    [
        "Меч Света и Тьмы",
        "Sword of Light and Shadow",
        "ГГ,ТАИР,РЕ,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Мишель",
        "Michel",
        "ЛС,РЕ,",
        "SSR",
        "",
        "",
        "РЕИ"
    ],
    [
        "Мю",
        "Mu",
        "ГЙ,ТАИР,",
        "SSR",
        "forge",
        "",
        "М2"
    ],
    [
        "Нарм",
        "Narm",
        "ЛС,АП,МУ,",
        "SR",
        "",
        "SP",
        "Л13"
    ],
    [
        "Немия",
        "Nemia",
        "ЛС,МС,ГЙ,",
        "SSR",
        "",
        "",
        "Т"
    ],
    [
        "Нимфа",
        "Nymph",
        "АП,МУ,ГЙ,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Ноэми",
        "Noemi",
        "ЛС,РЕ,",
        "SSR",
        "forge",
        "",
        "РЕИ"
    ],
    [
        "Оборо",
        "Oboro",
        "ИС,ГЙ,ТАИР,",
        "SSR",
        "forge",
        "",
        "М3"
    ],
    [
        "Оливер (коллаб)",
        "Oliver",
        "ИМП,МС,ГВ,",
        "SR",
        "",
        "",
        ""
    ],
    [
        "Оливиер",
        "Olivier",
        "ЛС,МУ,ГЙ,",
        "SR",
        "forge",
        "",
        "М2"
    ],
    [
        "Омега",
        "Omega",
        "ТР,МУ,",
        "SSR",
        "forge",
        "",
        "Л45"
    ],
    [
        "Отшельник",
        "Sage of the Trees",
        "ГЙ,ТАИР,",
        "SSR",
        "",
        "",
        "М2"
    ],
    [
        "Парн",
        "Parn",
        "ГГ,ИС,ГВ,",
        "SR",
        "",
        "",
        ""
    ],
    [
        "Патцир",
        "Patsyr",
        "ТР,РЕ,",
        "SSR",
        "",
        "",
        "РЕИ"
    ],
    [
        "Пиротесс",
        "Pirotess",
        "ТР,МУ,ГВ,",
        "SR",
        "",
        "",
        ""
    ],
    [
        "Полиал",
        "Polyal",
        "ТР,ГЙ,РЕ,",
        "SSR",
        "",
        "",
        "РЕИ"
    ],
    [
        "Преция",
        "Presia",
        "ГГ,АП,ТАИР,",
        "SSR",
        "",
        "",
        "Т"
    ],
    [
        "Пробужденная",
        "Awakener",
        "ТР,ТАИР,ГВ,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Пьер",
        "Pierre",
        "ИС,МУ,",
        "R",
        "",
        "",
        "Л13"
    ],
    [
        "Рё",
        "Ryo",
        "ГГ,ГЙ,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Рейнфорс",
        "Rainforce",
        "МС,ГЙ,ТАИР,",
        "SSR",
        "forge",
        "",
        "Л45"
    ],
    [
        "Рената",
        "Renata",
        "ТР,РЕ,",
        "SSR",
        "forge",
        "",
        "РЕИ"
    ],
    [
        "Рене",
        "Renne",
        "ТР,ГЙ,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Рикки",
        "Ricky",
        "ГГ,ЛС,ГЙ,",
        "SSR",
        "",
        "",
        "Л45"
    ],
    [
        "Рин",
        "Rean",
        "ГГ,ТАИР,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Розалия",
        "Rozalia",
        "ЛС,АП,РЕ,",
        "SSR",
        "forge",
        "",
        "РЕИ"
    ],
    [
        "Розенцель",
        "Rozenciel",
        "АП,ИМП,ТАИР,",
        "SSR",
        "",
        "",
        "М2"
    ],
    [
        "Роланд",
        "Roland",
        "ГГ,ЛС,ГЙ,",
        "SSR",
        "",
        "",
        "Т"
    ],
    [
        "Рохга",
        "Rohga",
        "ИМП,МУ,",
        "R",
        "",
        "",
        "Л13"
    ],
    [
        "Рыцарь тайн",
        "Knight of Mystery",
        "МС,ГЙ,",
        "SSR",
        "forge",
        "",
        "М2"
    ],
    [
        "Рэйчел",
        "Rachel",
        "ГГ,ГЙ,",
        "SSR",
        "forge",
        "",
        "Л45"
    ],
    [
        "Сагани",
        "Sagny",
        "МС,ГЙ,ТАИР,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Сакура",
        "Sakura",
        "ГГ,ИМП,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Светоносец",
        "Lightbringer",
        "ГГ,ЛС,ТАИР,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Селина",
        "Serene",
        "МС,ГЙ,",
        "SR",
        "forge",
        "",
        "Л45"
    ],
    [
        "Сельвария",
        "Selvaria",
        "ИМП,МС,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Серебряный Волк",
        "Silver Wolf",
        "ИС,МУ,",
        "SR",
        "forge",
        "",
        "Л13"
    ],
    [
        "Сибараку",
        "Shibaraku",
        "ГЙ,ГВ,",
        "SR",
        "",
        "",
        ""
    ],
    [
        "Сигма",
        "Sigma",
        "ГГ,МУ,ГЙ,",
        "SSR",
        "forge",
        "SP",
        "Л45"
    ],
    [
        "Синпати",
        "Shinpachi",
        "ГГ,ГВ,",
        "SR",
        "",
        "",
        ""
    ],
    [
        "Сисси Уайт",
        "Sissi White",
        "ЛС,АП,",
        "SSR",
        "forge",
        "",
        "М1"
    ],
    [
        "Скотт",
        "Scott",
        "ЛС,МС,",
        "R",
        "",
        "",
        "Л13"
    ],
    [
        "Соня",
        "Sonya",
        "АП,ТР,",
        "SR",
        "",
        "",
        "Л13"
    ],
    [
        "Соня Бланш",
        "Sonya",
        "ЛС,АП,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "София",
        "Sophia",
        "ИС,АП,ТАИР,",
        "SR",
        "",
        "",
        "Л13"
    ],
    [
        "Странствующий дуэлянт",
        "Wandering Dualist",
        "ИС,МУ,ГЙ,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Сумире",
        "Sumire",
        "АП,ИМП,ГВ,",
        "SSR",
        "forge",
        "",
        ""
    ],
    [
        "Сюзетт",
        "Suzette",
        "МУ,РЕ,",
        "SSR",
        "forge",
        "",
        "РЕИ"
    ],
    [
        "Таталия",
        "Tatalia",
        "ТР,МУ,ТАИР,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Теон",
        "Zion",
        "ИС,МС,МУ,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Тиарис",
        "Tiaris",
        "ГГ,ИС,АП,",
        "SSR",
        "",
        "",
        "Л13"
    ],
    [
        "Това",
        "Towa",
        "ИС,МС,РЕ,",
        "SSR",
        "forge",
        "",
        "РЕИ"
    ],
    [
        "Тогуро",
        "Toguro",
        "ИМП,ТР,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Тома",
        "Toma",
        "МС,ГВ,",
        "SR",
        "",
        "",
        ""
    ],
    [
        "Тормил",
        "Tourmilque",
        "ИС,ГЙ,ТАИР,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Трансцендентный",
        "Transcender",
        "ТР,ГЙ,ТАИР,",
        "SSR",
        "",
        "",
        "М2"
    ],
    [
        "Феракуа",
        "Feraquea",
        "ТР,МУ,",
        "SR",
        "forge",
        "",
        "Л13"
    ],
    [
        "Флоренция",
        "Florentia",
        "ИМП,МС,РЕ,",
        "SSR",
        "forge",
        "",
        "РЕИ"
    ],
    [
        "Фрейя",
        "Freya",
        "ИС,АП,",
        "SR",
        "",
        "SP",
        "Л13"
    ],
    [
        "Хейн",
        "Hein",
        "ЛС,",
        "SR",
        "",
        "SP",
        "Л13"
    ],
    [
        "Хелена",
        "Helena",
        "ЛС,ИМП,",
        "SSR",
        "forge",
        "",
        "М2"
    ],
    [
        "Хией",
        "Hiei",
        "ИС,МУ,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Хильда",
        "Hilda",
        "ИМП,МС,РЕ,",
        "SSR",
        "forge",
        "",
        "РЕИ"
    ],
    [
        "Химико",
        "Himiko",
        "МУ,ГЙ,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Хоффман",
        "Hoffman",
        "ЛС,МС,МУ,",
        "SSR",
        "",
        "",
        "Т"
    ],
    [
        "Цубамэ",
        "Tsubame",
        "МУ,РЕ,",
        "SSR",
        "forge",
        "",
        "РЕИ"
    ],
    [
        "Шалтир",
        "Shalltear",
        "ТР,МУ,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Шельфаниэль",
        "Shelfaniel",
        "АП,ГЙ,",
        "SSR",
        "forge",
        "",
        "Л45"
    ],
    [
        "Шери",
        "Cherie",
        "ЛС,АП,МУ,",
        "SSR",
        "",
        "SP",
        "Л13"
    ],
    [
        "Шилинка",
        "Shilinka",
        "МУ,ТАИР,",
        "SSR",
        "forge",
        "",
        "М2"
    ],
    [
        "Эгберт",
        "Egbert",
        "ИМП,МС,ТР,",
        "SR",
        "forge",
        "",
        "Л13"
    ],
    [
        "Эксела",
        "Excela",
        "ИМП,МС,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Элвин",
        "Elwin",
        "ГГ,ЛС,ИМП,",
        "SSR",
        "",
        "SP",
        "Л13"
    ],
    [
        "Элейн",
        "Elaine",
        "МС,МУ,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Элисса",
        "Elisse",
        "МУ,ГЙ,ТАИР,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Эльма",
        "Elma",
        "ГГ,ЛС,РЕ,",
        "SSR",
        "",
        "",
        "РЕИ"
    ],
    [
        "Эмерик",
        "Emerick",
        "ИМП,МС,",
        "SR",
        "forge",
        "",
        "Л13"
    ],
    [
        "Эмилия",
        "Emilia",
        "АП,ИМП,",
        "SSR",
        "forge",
        "",
        "М1"
    ],
    [
        "Эпсилон",
        "Epsilon",
        "ТР,МУ,ГЙ,",
        "SSR",
        "forge",
        "",
        "М2"
    ],
    [
        "Эстель",
        "Estelle",
        "ГГ,ЛС,ГВ,",
        "SSR",
        "",
        "",
        ""
    ],
    [
        "Эшеан",
        "Eshean",
        "ЛС,АП,МУ,",
        "SSR",
        "",
        "",
        "Т"
    ],
    [
        "Ю'тем",
        "Wehttam",
        "ГГ,ТР,ТАИР,",
        "SSR",
        "",
        "",
        "М3"
    ],
    [
        "Юлия",
        "Yulia",
        "ЛС,АП,ТАИР,",
        "SSR",
        "",
        "",
        "М1"
    ],
    [
        "Юная Джессика",
        "Young Jessica",
        "ЛС,ИС,ТАИР,",
        "SSR",
        "forge",
        "",
        "М1"
    ],
    [
        "Юске",
        "Yusuke",
        "ГГ,ТАИР,ГВ,",
        "SSR",
        "",
        "",
        ""
    ]
]

function heroesView () {
	var sd = document.getElementById('heroes_data');
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
		if(heroesDat[i][0]=='Трансцендентный'){f = 'font-size:11px;'}else{f = 'font-size:12px;'}
		sd.innerHTML += '<div class="' + f2 + ' ' + heroesDat[i][3] + ' ' + heroesDat[i][4] + ' ' + heroesDat[i][5] + ' ' + heroesDat[i][6] + '" style="display:block;height:140px;width:109px;float:left;"><div style="display:block;"><img height="100px" src="images/head/' + heroesDat[i][0] + '.png" title="' + heroesDat[i][0] + '"></div><div style="white-space:normal;' + f + 'width:95px;text-align:center;margin-top:-5px;">' + heroesDat[i][0] + '</div></div>';
//		}
	}
}