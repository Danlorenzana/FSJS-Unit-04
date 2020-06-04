/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

	const phraseDivUl = document.getElementById('phrase').firstElementChild.children;
	const phraseDiv = document.getElementById('phrase').firstElementChild;
	const qwertyKeys = document.querySelectorAll('.key');
	const btn = document.getElementById('btn__reset');
	const goodHeart = document.querySelectorAll('.tries');
	let phrase;
	let game;

// Creates new game and selects random phrase; resets game board.
	btn.addEventListener('click', () => {
		phraseDiv.innerHTML = '';
		game = new Game();
		phrase = new Phrase();
		game.startGame();
	});
// Targets each individual key.
	for (let i = 0; i < qwertyKeys.length; i++) {
		qwertyKeys[i].addEventListener('click', (e) => {
			let button = e.target;

			game.handleInteraction(button.textContent);
		})
	}
// Accepts keyboard inputs for gameplay.
	document.addEventListener("keydown", (k) => {
		let keyValue = k.keyCode;
		let keyChar = String.fromCharCode(k.keyCode).toLowerCase();
		game.handleInteraction(keyChar);
	});

// do extra credit CSS:
	// fade the start screen
	// make the letter bounce if correct in the phrase.
	// with each wrong guess the screen turns redder

//https://stackoverflow.com/questions/48254843/converting-javascript-key-code-to-char-and-vice-versa



//want to start game with return (key code: 13) or spacebar (key code: 32)
//repeat keyboard guesses should be invalid. *solved*
