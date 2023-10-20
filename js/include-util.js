function setMobileMenu() {
	// Title Bar.
	$(
		'<div id="titleBar">' +
			'<a href="#navPanel" class="toggle"></a>' +
			'<span class="title">' + $('#logo').html() + '</span>' +
		'</div>'
	).appendTo($('body'));

	// Navigation Panel.
	$(
		'<div id="navPanel">' +
			'<nav>' +
				$('#nav').navList() +
			'</nav>' +
		'</div>'
	)
	.appendTo($('body'))
	.panel({
		delay: 500,
		hideOnClick: true,
		hideOnSwipe: true,
		resetScroll: true,
		resetForms: true,
		side: 'left',
		target: $('body'),
		visibleClass: 'navPanel-visible'
	});
}

function setCurrentMenu(currentMenu) {
	$("#header nav a").removeClass("current-page-item");

	if ($("#" + currentMenu).length) {
		$("#" + currentMenu).addClass("current-page-item");
	}
}

window.addEventListener('load', function() {
	var allElements = document.getElementsByTagName('*');
	Array.prototype.forEach.call(allElements, function(el) {
		var includePath = el.dataset.includePath;
		if (includePath) {
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					el.outerHTML = this.responseText;
					if (includePath == "../includes/header.html") {
						setMobileMenu();
						//영웅 카드 슬라이딩 Include를 위해 주석처리 07-18 폭사함
						//setCurrentMenu(currentMenu);						
					}
				}
			};
			xhttp.open('GET', includePath, true);
			xhttp.send();
		}
	});
});