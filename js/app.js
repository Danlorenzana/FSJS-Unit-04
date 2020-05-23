/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
	const phrase = new Phrase();
	let game;
	const btn = document.getElementById('btn__reset');

	btn.addEventListener('click', () => {
		game = new Game();
		game.startGame()
	});


	game = new Game();
	game.startGame()

	const phraseDivUl = document.getElementById('phrase').firstElementChild.children;
	console.log(phraseDivUl[1].textContent);


	function checkLetter(letter) {
		for (let i = 0; i < phraseDivUl.length; i++) {
			if (letter == phraseDivUl[i].textContent) {
				console.log('correct');
				phraseDivUl[i].className = 'show letter';
			}
		}
	}
