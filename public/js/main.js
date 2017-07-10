// (function() {
function random () {
	Math.floor(Math.random() * (4));
};
var arches = $('.arch');
//round 1
$('#start').click(function() {
	$(arches[random()]).css('background-color', 'white');
	console.log(arches[random()]);
})

// })();