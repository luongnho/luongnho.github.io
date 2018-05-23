/*resize logo when scroll*/
$(window).scroll(function() {
	if ($(this).scrollTop() > 150){  
		$('.logo img').css("width","98px");
		    }
	else{
		$('.logo img').css("width","196px");
	}
});
/*toggle navigator smartphone*/
$(document).ready(function(){
	$(".menu-icon").click(function(){
		$("#nav-smp").toggle();
	});
});
/*accordion menu*/
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		this.classList.toggle("accIcon");
		var submenu = this.nextElementSibling;
		if (submenu.style.display === "block") {
			submenu.style.display = "none";
			accIcon.style.display = 'none';
		} else {
		    submenu.style.display = "block";
		    }
	});
}
/*animated menu*/
function animateMenu(x) {
    x.classList.toggle("change");
}