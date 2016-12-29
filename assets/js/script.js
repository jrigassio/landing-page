$(document).ready(function(){

	$(".about").click(function(){
    	var position = $("#about-section").position();
    	var height = $(window).height();
    	$(window).scrollTop( position.top + height)
	});

	$(".work").click(function(){
		var position = $("#work-section").position();
		var height = $(window).height();
		$(window).scrollTop( position.top + height)
	})

	$(".education").click(function(){
		var position = $("#education-section").position();
		var height = $(window).height();
		$(window).scrollTop( position.top + height)
	})

	$(".awards").click(function(){
		var position = $("#awards-section").position();
		var height = $(window).height();
		$(window).scrollTop( position.top + height)
	})

	$(".projects").click(function(){
		var position = $("#projects-section").position();
		var height = $(window).height();
		$(window).scrollTop( position.top + height)
	})

	$(".contact").click(function(){
		var position = $("#contact-section").position();
		var height = $(window).height();
		$(window).scrollTop( position.top + height)
	});

	$('#content').waypoint(function(direction){
		if(direction == 'down') {
			$('#navbar-container').addClass('sticky');
		}else{
			$('#navbar-container').removeClass('sticky');
		}
	});


	// $(window).scroll(function(){
	// 	var offsetY = $(window).scrollTop();
	// 	console.log(offsetY);
	// });

});