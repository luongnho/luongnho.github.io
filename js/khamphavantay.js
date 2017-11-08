// JavaScript Document
$(document).ready(function() {
	//xử lí back to top
	$('.navbar-brand').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
		return false;  
	})
	//xử lí menu reponsive
	$('.navbar-collapse ul li a').click(function() {
		$('.navbar-toggle:visible').click();
	});
	//xử lí form label
	$(function() {
		$("body").on("input propertychange", ".floating-label-form-group", function(e) {
			$(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
		}).on("focus", ".floating-label-form-group", function() {
			$(this).addClass("floating-label-form-group-with-focus");
		}).on("blur", ".floating-label-form-group", function() {
			$(this).removeClass("floating-label-form-group-with-focus");
		});
	});
	//xử lí back to top
	if ( ($(window).height() + 100) < $(document).height() ) {
		$('#top-link-block').removeClass('hidden').affix({
			// how far to scroll down before link "slides" into view
			offset: {top:450}
		});
	}
});
	//xử lí nút video
	var myVideo = document.getElementById("video1"); 
	function playPause() { 
		if (myVideo.paused) 
			myVideo.play(); 
		else 
			myVideo.pause(); 
	}
	//xử lí sroll to fixed
	function sticky_relocate() {
		var window_top = $(window).scrollTop();
		var div_top = $('#sticky-anchor').offset().top;
		if (window_top > 950) {
			$('#sticky').addClass('stick');
		//$('#sticky-anchor').height($('#sticky').outerHeight());
		} else {
			$('#sticky').removeClass('stick');
		//$('#sticky-anchor').height(0);
		}
	}
	$(function() {
		$(window).scroll(sticky_relocate);
		sticky_relocate();
	});