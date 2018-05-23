/*resize logo when scroll*/
$(window).scroll(function() {
	if ($(this).scrollTop() > 150){  
		$('.logo img').css("width","98px");
		    }
	else{
		$('.logo img').css("width","196px");
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
/*animated menu*/
function animateMenu(x) {
    x.classList.toggle("change");
}