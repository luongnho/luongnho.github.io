/*resize logo when scroll and header position fixed*/
$(window).scroll(function() {
	if ($(this).scrollTop() > 270){  
		$('header').addClass('fixed');
		$('.logo img').css("width","98px").addClass('resize-logo');
		$('.logo-smp').css("width","44px").addClass('resize-logo');
	}
	else{
		$('header').removeClass('fixed');
		$('.logo img').css("width","196px").addClass('resize-logo');
		$('.logo-smp').css("width","88px").addClass('resize-logo');
	}
});

$(document).ready(function(){
	/*toggle navigator smartphone*/
	$(".menu-icon").click(function(){
		$("#nav-smp").toggle();
	});
	/*accordion menu*/
	$("li.accordion").click(function() {
		$(this).toggleClass("accIcon");
		var accd = $(this).next();
		if(accd.css("display")==="none"){
			accd.css("display","block");
		}else{
			accd.css("display","none");
		}
	});
});
/*animated menu-icon*/
function animateMenu(x) {
    x.classList.toggle("change");
}