(function() {
	var arches = $('.arch');
	var randomArch = random();
	var patternArray = [randomArch];
	var userPatternArray = [];
	function random () {
		return Math.floor(Math.random() * (4));
	};
	function gameOver() {
		for (var i = 0; i < userPatternArray.length; i++) {
			if (userPatternArray[i] != patternArray[i]) {
				var playAgain = confirm('Game over! Would you like to play again?');
					if (playAgain) {
						location.reload();
					};
				return;
			};		
		};
	};
	function displayPattern() {
		if (userPatternArray.length == patternArray.length) {
			randomArch = random();
				patternArray.push(randomArch);
				userPatternArray = [];
				patternArray.forEach(function(element, index, array) {					
					setTimeout(function() {
							$(arches[element]).css('border', '4px solid #ff8f00');
						setTimeout (function() {
							$(arches[element]).css('border', 'none');						
						}, 1000);
					}, 1500 * index);
				});
			$('#round').html(patternArray.length);
		};
	};
	$('#start').click(function() {
		$('#start_button').html('Reset');
		$('#start_button').click(function() {
			location.reload();
		});	
		$(arches[randomArch]).css('border', '4px solid #ff8f00');
		setTimeout(function() {
			$(arches[randomArch]).css('border', 'none');
		}, 1000);	
		$(arches).click(function(event) {
			userPatternArray.push(parseInt(event.target.dataset.index));			
			gameOver();
			displayPattern();
		});	
		$(document).keyup(function(event) {
			if(event.keyCode == 38) {
				userPatternArray.push(0);
			} else if(event.keyCode == 40) {
				userPatternArray.push(3);
			} else if(event.keyCode == 37) {
				userPatternArray.push(1);
			} else if(event.keyCode == 39) {
				userPatternArray.push(2);
			}
			gameOver();
			displayPattern();
		})
	});
})();
