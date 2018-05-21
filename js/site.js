$(window).scroll(function() {
	if ($(this).scrollTop() > 150){  
		$('.logo img').css("width","98px");
		    }
	else{
		$('.logo img').css("width","196px");
	}
});

$(document).ready(function(){
	$(".menu-icon").click(function(){
		$("#nav-smp").toggle();
	});
});

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		var submenu = this.nextElementSibling;
		if (submenu.style.display === "block") {
			submenu.style.display = "none";
		} else {
		    submenu.style.display = "block";
		    }
	});
}