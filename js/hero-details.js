var slideIndex = 1;
var currentMenu = "navHero";

$(document).ready(function () {                
    var heroName = getParameterByName("name");
    if (heroName !== null) {                    
        $.getScript("../hero/data/" + heroName + ".js")
            .done(function() {
                initPage();
            })
            .fail(function() {
                location.href = "../hero.html";
            });
    }
    else {
        location.href = "../hero.html";
    }
});            

function initPage() {
    var skinTemplate = _.template($("#skin-slideshow-template").html());
    var basicInfoTemplate = _.template($("#basic-info-template").html());
    var talentSoldierInfoTemplate = _.template($("#talent-soldier-info-template").html());
    var jobInfoTemplate = _.template($("#job-info-template").html());
    var materialInfoTemplate = _.template($("#material-info-template").html());
    var classUpInfoTemplate = _.template($("#class-up-info-template").html());
    var SPConditionInfoTemplate = _.template($("#sp-condition-info-template").html());
    var SkillInfoTemplate = _.template($("#skill-info-template").html());
    var BioInfoTemplate = _.template($("#bio-info-template").html());
    var PerformanceInfoTemplate = _.template($("#performance-info-template").html());
	var MiscInfoTemplate = _.template($("#misc-info-template").html());
    //var ProposeInfoTemplate = _.template($("#propose-info-template").html());
    $("#skin-carousel").replaceWith(skinTemplate(data[0]));
    $("#basic-info").replaceWith(basicInfoTemplate(data[0]));
    $("#talent-soldier-info").replaceWith(talentSoldierInfoTemplate(data[0]));
    $("#job-info").replaceWith(jobInfoTemplate(data[0]));
    $("#material-info").replaceWith(materialInfoTemplate(data[0]));
    $("#class-up-info").replaceWith(classUpInfoTemplate(data[0]));
    $("#sp-condition-info").replaceWith(SPConditionInfoTemplate(data[0]));
    $("#skill-info").replaceWith(SkillInfoTemplate(data[0]));
    $("#bio-info").replaceWith(BioInfoTemplate(data[0]));
    $("#performance-info").replaceWith(PerformanceInfoTemplate(data[0]));
	$("#misc-info").replaceWith(MiscInfoTemplate(data[0]));
    //$("#propose-info").replaceWith(ProposeInfoTemplate(data[0]));
    showSlides(slideIndex);
    $('#input-4').rating({
        min: 0, max: 6, stars: 6,
        captionElement: "#kv-caption",
        starCaptions: {
            1: data[0].Talent[0].Abilities[0].Desc,
            2: data[0].Talent[0].Abilities[1].Desc,
            3: data[0].Talent[0].Abilities[2].Desc,
            4: data[0].Talent[0].Abilities[3].Desc,
            5: data[0].Talent[0].Abilities[4].Desc,
            6: data[0].Talent[0].Abilities[5].Desc
        },
        starCaptionClasses: {1: 'text-info', 2: 'text-info', 3: 'text-info', 4: 'text-info', 5: 'text-info', 6: 'text-info'},
        filledStar: '<img src="../img/Icon/Icon_StarGold.webp" width="35">',
        emptyStar: '<img src="../img/Icon/Icon_StarGray.webp" width="35">',
    });
    
    if (data[0].SPTalent != null) {
        $('#input-5').rating({
            min: 0, max: 6, stars: 6,
            captionElement: "#sp-caption",
            starCaptions: {
                1: data[0].SPTalent[0].Abilities[0].Desc,
                2: data[0].SPTalent[0].Abilities[1].Desc,
                3: data[0].SPTalent[0].Abilities[2].Desc,
                4: data[0].SPTalent[0].Abilities[3].Desc,
                5: data[0].SPTalent[0].Abilities[4].Desc,
                6: data[0].SPTalent[0].Abilities[5].Desc
            },
            starCaptionClasses: {1: 'text-info', 2: 'text-info', 3: 'text-info', 4: 'text-info', 5: 'text-info', 6: 'text-info'},
            filledStar: '<img src="../img/Icon/Icon_StarGold.webp" width="35">',
            emptyStar: '<img src="../img/Icon/Icon_StarGray.webp" width="35">',
        });
    }
	
	$("#misc-label").click(function() {
		$("#misc-content").toggle();
		$("#misc-control").toggleClass("opened");
	});
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var sd1 = document.getElementsByClassName("class1");
    var sd2 = document.getElementsByClassName("class2");
    var sd3 = document.getElementsByClassName("class3");  
    // var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        if (sd1.length) {
            sd1[i].style.display = "none";
        }
        if (sd2.length) {
            sd2[i].style.display = "none";
        }
        if (sd3.length) {
            sd3[i].style.display = "none";
        }                    
    }
    // for (i = 0; i < dots.length; i++) {
    //      dots[i].className = dots[i].className.replace(" active", "");
    //  }
    slides[slideIndex-1].style.display = "block";
    if (sd1.length) {
        sd1[slideIndex-1].style.display = "block";
    }
    if (sd2.length) {
        sd2[slideIndex-1].style.display = "block";
    }
    if (sd3.length) {
        sd3[slideIndex-1].style.display = "block";
    }
    // dots[slideIndex-1].className += " active";
}
function changeSuper(){
    var imgTag = document.getElementById("Super");
    var imgSrc = document.getElementById("Super").getAttribute("src");
    imgSrc = imgSrc.substring(0,imgSrc.lastIndexOf("_",imgSrc.length));
    if(imgTag.src.match("_Ani.webp")){
        imgTag.setAttribute("src",imgSrc+"_Standing.webp");
    } else {
        imgTag.setAttribute("src",imgSrc+"_Ani.webp");
    }
    
}
function propose(url){
    var heroName = getParameterByName("name");  
    var imgUrl = url+"propose/" + heroName+".gif";
    var bgimgUrl = url +"propose_background/"+heroName+".webp";
    var img=new Image();
    img.src=imgUrl;
    var img_width=img.width;
    var win_width=img.width+25;
    var img_height=img.height;
    var win_height=img.height+30;

    //var OpenWindow=window.open('','_blank', 'width='+img_width+', height='+img_height+', menubars=no, scrollbars=auto');
    //OpenWindow.document.write("<style>body{margin:0px;}</style><img src='"+imgUrl+"' width='"+win_width+"'>");
    var OpenWindow=window.open('','_blank', 'width=70%, status=no, toolbar=no, menubars=no, scrollbars=no');
    OpenWindow.document.write("<style>body{margin:0px;}</style><img src='"+imgUrl+"' style='height:100%; width:100%; background-image: url('"+bgimgUrl+"')/>");
}