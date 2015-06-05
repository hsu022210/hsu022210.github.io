var scroll = function() {
	$('body').scrollspy({ target: '#navbar' });
};

var smooth = function() {
	$('#navbar a, .slide_to_profile').click(function() {
		$('body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);
		return false;
	});
};

var i = [scroll, smooth]

$(document).ready(i);