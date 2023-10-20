/*
	Minimaxing by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {
	
})(jQuery);
const select = document.querySelector('#ddlStageList');
const img = document.querySelector('#imgStage');
select.addEventListener('change', (e) => {
	img.src = `./img/stage/${e.target.value}.webp`
	var imgStage = document.getElementById("imgStage").style.visibility="visible";
	var oImgWidth = $(this).width();
    var oImgHeight = $(this).height();
	img.style ='max-width:'+oImgWidth+'px', 'max-height:'+oImgHeight+'px','width:100%','height:100%'
})