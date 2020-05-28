/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
	const phrase = new Phrase();
	const phraseDivUl = document.getElementById('phrase').firstElementChild.children;
	let game;

	// const btn = document.getElementById('btn__reset');
	// btn.addEventListener('click', () => {
	// 	game = new Game();
	// 	game.startGame()
	// });


	game = new Game();
	game.startGame()
