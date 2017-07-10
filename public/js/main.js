// (function() {
function random () {
	return Math.floor(Math.random() * (4));
};
var arches = $('.arch');
//round 1
$('#start').click(function() {
	var randomArch = random();
	var pattern = [randomArch];
	$(arches[randomArch]).css('border', '4px solid black');
	setTimeout(function() {
		$(arches[randomArch]).css('border', 'none');
	}, 3000);
	
})


// })();