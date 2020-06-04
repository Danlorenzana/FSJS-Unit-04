/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

	 class Game {
		constructor() {
			this.missed = 0;
			this.phrases = [
				"crazy like a fox",
				"dental plan",
				"okely dokely",
				"excellent",
				"ay caramba"
			];
			this.activePhrase = null;
			this.heartsIndex = -1;
		}
// Add a new phrase to phrase array.
		createPhrases(phrase) {
			this.phrases.push(phrase)
		}
// Random phrase added to 'activePhrase'.
		getRandomPhrase() {
			const random = Math.floor(Math.random() * 5);
			const randomPhrase = game.phrases[random]
			this.activePhrase = randomPhrase;
			return new Phrase(randomPhrase.phrase);
		}
// Hides the start screen.
		startGame() {
			overlay.style.display = 'none';  /////////////////////
			game.getRandomPhrase().addPhraseToDisplay();
			for (let i = 0; i < qwertyKeys.length; i++) {
				qwertyKeys[i].className = 'key';
				qwertyKeys[i].disabled = false;
			}
			for (let i = 0; i < goodHeart.length; i++) {
				goodHeart[i].firstElementChild.src = 'images/liveHeart.png';
			}
		}
// Determines wether all letters have been guessed.
		checkForWin() {
			let missingLetters = 0;
				for (let i = 0; i < phraseDivUl.length; i++) {
					if (phraseDivUl[i].className == "hide letter") {
						missingLetters += 1;
						return false
					}
				}
				if (missingLetters == 0) {
					game.gameOver();
					return true
				}
		}
// Lose a heart with each wrong guess; 5 wrong guesses show red 'lose' screen.
		removeLife() {
			this.heartsIndex += 1;
			goodHeart[this.heartsIndex].firstElementChild.src='images/lostHeart.png';
			if (this.heartsIndex === 4) {
				overlay.querySelector('h1').textContent = 'Sorry! Keep trying!'
				overlay.className = 'lose';
				overlay.style.display = '';
				btn.disabled = false;
				return false
			}
		}
// Shows congratulatory green 'win' screen.
		gameOver(gameWon) {
			overlay.querySelector('h1').textContent = 'Great Job!'
			overlay.className = 'win';
			overlay.style.display = '';
			btn.disabled = false;
		}
// Takes letter guesses and runs checkLetter()
		handleInteraction(button) {
			phrase.checkLetter(button);
		}
	}
