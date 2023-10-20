var currentMenu = "navHeroSkin";
const slideList = document.querySelector('.slide_list'); // Slide parent dom
const slideContents = document.querySelectorAll('.slide_content'); // each slide dom
const slideBtnNext = document.querySelector('.slide_btn_next'); // next button
const slideBtnPrev = document.querySelector('.slide_btn_prev'); // prev button
const pagination = document.querySelector('.slide_pagination');
const slideLen = slideContents.length; // slide length
const slideWidth = 400; // slide width
const slideSpeed = 300; // slide speed
slideList.style.width = slideWidth * (slideLen) + "px";
let curIndex = 0; // current slide index (except copied slide)
/** Next Button Event */
slideBtnNext.addEventListener('click', function() {
if (curIndex < slideLen - 1) {
slideList.style.transition = slideSpeed + "ms";
slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 1)) + "px, 0px, 0px)";
} else {
slideList.style.transform = "translate3d(0px, 0px, 0px)";
curIndex = -1;
}
curSlide = slideContents[++curIndex];
});
/*
var gall  = setInterval(galleryFun, 2000);
var inter = true;
var idx = 2;

 function galleryFun(){
   
	$(".gallery ul").animate({
	  "left":-300*idx+"px"
	},300);
   $(".g_item ul li").eq(idx-1).addClass("on").siblings().removeClass("on");
   idx++;
   if(idx> $(".gallery ul li").length-3){
	 $(".gallery ul").animate({
	   "left":0
	 },0);
	 idx=0;
	 
   }
 }
 
 
 
 $(".gallery , .g_item").hover(function(){
   if(inter==true){
	 clearInterval(gall);
	 inter=false;
   }
 },function(){
   if(inter==false){
	 gall  = setInterval(galleryFun, 2000);
	 inter=true;
   }
   
 });
 
 
 
 $(".g_item ul li").on('click',function(){
   $(this).addClass("on").siblings().removeClass("on");
   idx = $(this).index()+1;
   $(".gallery ul").animate({
	  "left":-300*idx+"px"
	},1000);
   
 });
 */
