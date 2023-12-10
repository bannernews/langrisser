$(".single-item").slick({
  dots: true,
  autoplay: true,
  autoplaySpeed:5000,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  focusOnSelect:false,
  pauseOnDotsHover:false,
  asNavFor: ".single-item2"
});
$(".single-item2").slick({
  dots: false,
  autoplay: true,
  autoplaySpeed:5000,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  focusOnSelect:false,
  pauseOnDotsHover:false,
  slidesToScroll: 1,
  asNavFor: ".single-item"
});
$(".sl_right").slick({
  dots: true,
  autoplay: false,
  autoplaySpeed:5000,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  focusOnSelect:false,
  pauseOnDotsHover:false,
  slidesToScroll: 1
});

$(".chibi1s0").slick({
  dots: false,
  autoplay: false,
  autoplaySpeed:5000,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  focusOnSelect:false,
  pauseOnDotsHover:false,
  asNavFor: ".chibi1sl,.chibi1s2,.chibi1s3"
});

$(".chibi1sl").slick({
  dots: false,
  autoplay: false,
  autoplaySpeed:5000,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  focusOnSelect:false,
  pauseOnDotsHover:false,
  asNavFor: ".chibi1s0"
});
$(".chibi1s2").slick({
  dots: false,
  autoplay: false,
  autoplaySpeed:5000,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  focusOnSelect:false,
  pauseOnDotsHover:false,
  asNavFor: ".chibi1s0"
});
$(".chibi1s3").slick({
  dots: false,
  autoplay: false,
  autoplaySpeed:5000,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  focusOnSelect:false,
  pauseOnDotsHover:false,
  asNavFor: ".chibi1s0"
});




atext = document.getElementsByClassName("atext");
rel_text = document.getElementById("sl_middle");

relh = rel_text.scrollWidth;
for (i=0;i<atext.length;i++){
	ath = atext[i].scrollWidth;
	atext[i].style.left = (relh-ath)/2+'px';
}