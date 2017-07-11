// (function() {
function random () {
	return Math.floor(Math.random() * (4));
};
var arches = $('.arch');
var userPattern = '';
//round 1
$('#start').click(function() {
	var randomArch = random();
	var pattern = [randomArch];
	userPattern = '';
	console.log('first round')
	console.log('pattern: ' + pattern);

	$(arches[randomArch]).css('border', '4px solid black');
	setTimeout(function() {
		$(arches[randomArch]).css('border', 'none');
	}, 1000);

	$(arches).click(function(event) {
		userPattern += event.target.dataset.index;			
		console.log('userPattern: ' + userPattern);
		if (userPattern == pattern) {
			console.log('patterns match!');
			randomArch = random();
			pattern += randomArch;
			console.log('Adding to pattern with a new random number...');
			console.log('pattern: ' + pattern);

			userPattern = '';
			$(arches[randomArch]).css('border', '4px solid black');
			setTimeout(function() {
				$(arches[randomArch]).css('border', 'none');
			}, 3000);
		};
			
	});
	
});


// })();