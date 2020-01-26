var generate = function(){
	var bg = $('#bg').val();
	var spacing = parseInt($('#spacing').val());
	var radius = parseInt($('#radius').val());
	var dots = $('#dots').val();
	var height = $(window).height();
	var width = $(window).width();
	$('div').remove();
	$('body').css('background-color', bg);
	for (y = 0; y <= height + radius; y += spacing) {
	  for (x = ((y / spacing) % 2) * spacing; x <= width + radius; x = x + (spacing * 2)) {
			$('body').append('<div style="top:' + (y - radius) + 'px; left:' + (x - radius) + 'px; height:' + radius * 2 + 'px; width:' + radius * 2 + 'px; background-color:' + dots + '"></div>');
		}
	}
	$('div').click(function() {$(this).wiggle()});
}

jQuery.fn.wiggle = function(o) {
	var d = { speed: 100, wiggles: 2, travel: 5};
	var o = jQuery.extend(d, o);

	for (i=1;i<=o.wiggles;i++) {
			jQuery(this).animate({
				left: "-=" + o.travel
			}, o.speed).animate({
				left: "+=" + o.travel*2
			}, o.speed).animate({
				left: "-=" + o.travel
			}, o.speed);
		}
	};

$(document).ready(function() {generate();});