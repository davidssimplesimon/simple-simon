// (function() {
function random () {
	return Math.floor(Math.random() * (4));
};
var arches = $('.arch');
var userPattern = '';
pattern = randomString.split("");
//round 1
$('#start').click(function() {
	var randomArch = random();
	var pattern = [randomArch];
	console.log('first round')
	console.log(pattern);
	$(arches[randomArch]).css('border', '4px solid black');
	setTimeout(function() {
		$(arches[randomArch]).css('border', 'none');
	}, 2000);

	$(arches).click(function(event) {
		userPattern += event.target.dataset.index;
		console.log(userPattern);
				
			});
			console.log('second round');
			randomArch = random();
			pattern += randomArch;
			userPattern = '';

			console.log(pattern);
			console.log(userPattern);
			// for (var i = 0, i< pattern.length, i++)
		
				if (userPattern == pattern) {
			().click(function(event) {
			$(arches[randomArch]).css('border', '4px solid black');
			setTimeout(function() {
				$(arches[randomArch]).css('border', 'none');
			}, 3000);
	});
	
};


// })();