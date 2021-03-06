(function() {
	var arches = $('.arch');
	var randomArch = random();
	var patternArray = [randomArch];
	var userPatternArray = [];
	var delay = 1010;
	function random () {
		return Math.floor(Math.random() * (4));
	};
	function gameOver() {
		for (var i = 0; i < userPatternArray.length; i++) {
			if (userPatternArray[i] != patternArray[i]) {
				$('.arch').addClass('hidden');
				$('#start').addClass('hidden');
				$('body').addClass('game_over');
				$('body').html('<audio autoplay><source src="/mp3/Bomb_Exploding-Sound_Explorer-68256487.mp3" type="audio/mpeg"></audio>');
				setTimeout(function() {
					var playAgain = confirm('Game over! Would you like to play again?');
						if (playAgain) {
							location.reload();
						};
					return;
				}, 4500);
			};		
		};
	};
	function displayPattern() {
		setTimeout(function() {
			if (userPatternArray.length == patternArray.length) {
				randomArch = random();
					patternArray.push(randomArch);
					userPatternArray = [];
					console.log(patternArray.length);
					patternArray.forEach(function(element, index, array) {					
						setTimeout(function() {
								$(arches[element]).css('border', '10px solid #fff');
							setTimeout (function() {
								$(arches[element]).css('border', 'none');						
							}, delay - (100 * patternArray.length));
						}, (((delay + 1000) - (100 * patternArray.length)) * index));
					});
				$('#round').html(patternArray.length);
			};
		}, 1000);
	};
	function runGame() {
		$(arches[randomArch]).css('border', '10px solid #fff');
		setTimeout(function() {
			$(arches[randomArch]).css('border', 'none');
		}, 1000);	
		$(arches).click(function(event) {
			userPatternArray.push(parseInt(event.target.dataset.index));			
			gameOver();
			displayPattern();
		});	
		$(document).keyup(function(event) {
			if(event.keyCode === 38) {
				$("#red").css('transform', 'translateY(10px)');
				setTimeout(function() {
					$('#red').css('transform', 'none');
				}, 250);
				userPatternArray.push(0);
			} else if(event.keyCode === 40) {
				$("#green").css('transform', 'translateY(10px)');
				setTimeout(function() {
					$('#green').css('transform', 'none');
				}, 250);
				userPatternArray.push(3);
			} else if(event.keyCode === 37) {
				$("#blue").css('transform', 'translateY(10px)');
				setTimeout(function() {
					$('#blue').css('transform', 'none');
				}, 250);
				userPatternArray.push(1);
			} else if(event.keyCode === 39) {
				$("#yellow").css('transform', 'translateY(10px)');
				setTimeout(function() {
					$('#yellow').css('transform', 'none');
				}, 250);
				userPatternArray.push(2);
			}
			gameOver();
			displayPattern();
		});
	};
	$('#start').click(function() {
		$('#start_button').html('Reset');
		$('#start_button').click(function() {
			location.reload();
		});	
		runGame();
	});
	$(document).keyup(function() {
		if(event.keyCode === 13) {
			$("#start_button").css('transform', 'translateY(10px)');
				setTimeout(function() {
					$('#start_button').css('transform', 'none');
				}, 250);
				userPatternArray.push(0);
			$('#start_button').html('Reset');
			$(document).keyup(function() {
				if(event.keyCode === 13) {
					location.reload();
				};
			});
			runGame();
		};
	});
})();
