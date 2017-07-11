(function game() {
	function random () {
		return Math.floor(Math.random() * (4));
	};
	var arches = $('.arch');
	$('#start').click(function() {
		var randomArch = random();
		var patternArray = [randomArch];
		var userPatternArray = [];
		console.log('first round')
		console.log(patternArray);
	
		$(arches[randomArch]).css('border', '4px solid black');
		setTimeout(function() {
			$(arches[randomArch]).css('border', 'none');
		}, 1000);
	
		$(arches).click(function(event) {
			userPatternArray.push(parseInt(event.target.dataset.index));			
			console.log(userPatternArray);
			console.log(patternArray);
			for (var i = 0; i < userPatternArray.length; i++) {
				console.log(userPatternArray[i]);
				console.log(patternArray[i]);
				if (userPatternArray[i] != patternArray[i]) {
					var playAgain = confirm('Game over! Would you like to play again?');
						if (playAgain) {
							location.reload();
						}
					return;
				}		
			};
			if (userPatternArray.length == patternArray.length) {
					console.log('patterns match!');
					randomArch = random();
					patternArray.push(randomArch);
					console.log('Adding to pattern with a new random number...');
					console.log('pattern: ' + patternArray);
					userPatternArray = [];
					patternArray.forEach(function(element, index, array) {					
						setTimeout(function() {
								$(arches[element]).css('border', '4px solid black');
							setTimeout (function() {
								$(arches[element]).css('border', 'none');						
							}, 1000);
						}, 1500 * index);
					});
				};
		});	
	});
})();