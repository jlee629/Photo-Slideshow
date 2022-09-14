var images = document.getElementsByTagName("img");

for (var i = 1; i < images.length + 1; i++) {
	(function (i) {
		$.ajax({
			url: "images/" + i + "(3s).jpeg",
			xhrFields: {
				responseType: 'blob'
			},
			async: true,
			success(data) {
				const url = window.URL || window.webkitURL;
				const src = url.createObjectURL(data);
				$('#image' + i).attr('src', src);
			}
		});
	})(i);
}

$(function () {
	var slides = $('.slideShow img'),
		slideCount = slides.length,
		currentIndex = 0;

	slides.eq(currentIndex).fadeIn();

	var timer = undefined;  
	if (timer == undefined) { 
		timer = setInterval(showNextSlide, 3000);
	}

	function showNextSlide() {

		var nextIndex = (currentIndex + 1) % slideCount;

		slides.eq(currentIndex).fadeOut();
		slides.eq(nextIndex).fadeIn();
		currentIndex = nextIndex;
	}
	$('#next').click(showNextSlide);
	$('#prev').click(function () {
		var prevIndex = (currentIndex - 1) % slideCount;
		slides.eq(currentIndex).fadeOut();
		slides.eq(prevIndex).fadeIn();
		currentIndex = prevIndex;
	});
	$('#update').click(function () {
		slides.eq(currentIndex).fadeOut();
		slides.eq(0).fadeIn();
		currentIndex = 0;
	});


});

