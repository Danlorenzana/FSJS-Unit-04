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
			overlay.style.display = 'none';
			this.getRandomPhrase().addPhraseToDisplay();
			for (let i = 0; i < qwertyKeys.length; i++) {
				qwertyKeys[i].className = 'key';
				qwertyKeys[i].disabled = false;
			}
			for (let i = 0; i < goodHeart.length; i++) {
				goodHeart[i].firstElementChild.src = 'images/liveHeart.png';
				goodHeart[i].firstElementChild.className = '';
			}
		}
// Determines whether entire phrase is displayed.
		checkForWin() {
			let missingLetters = 0;
				for (let i = 0; i < phraseDivUl.length; i++) {
					if (phraseDivUl[i].className == "hide letter") {
						missingLetters += 1;
						return false
					}
				}
				if (missingLetters == 0) {
					this.gameOver();
					return true
				}
		}
// Removes heart; 5 wrong guesses show red 'lose' screen.
		removeLife() {
			goodHeart[this.missed ].firstElementChild.src='images/lostHeart.png';
			goodHeart[this.missed].firstElementChild.className= 'animate__animated animate__jello';
			if (this.missed === 4) {
				overlay.querySelector('h1').style.color = 'firebrick';
				overlay.querySelector('h1').textContent = 'Doh! 😖';
				overlay.className = 'lose';
				overlay.style.display = '';
				btn.disabled = false;
				return false
			}
			this.missed += 1;
		}
// Displays congratulatory green 'win' screen.
		gameOver(gameWon) {
			overlay.querySelector('h1').textContent = '🥳 Woo Hoo!'
			overlay.querySelector('h1').style.color = 'blueviolet'
			overlay.className = 'win';
			overlay.style.display = '';
			btn.disabled = false;
		}
// Pushes letter to checkLetter()
		handleInteraction(button) {
			phrase.checkLetter(button);

			const array = [...this.activePhrase];
			const wrongGuess = array.reduce((count, character) => {
				if (button === character) {
					return count + 1;
				}
				return count;
			}, -1)
			if (wrongGuess === -1) {
				for (let i = 0; i < qwertyKeys.length; i++) {
					if (button === qwertyKeys[i].textContent) {
						qwertyKeys[i].className = 'wrong animate__animated animate__headShake';
						qwertyKeys[i].disabled = true
					}
				}
				this.removeLife();
			}
			if (wrongGuess > -1) {
				for (let i = 0; i < qwertyKeys.length; i++) {
					if (button === qwertyKeys[i].textContent) {
						qwertyKeys[i].className = 'chosen animate__animated animate__headShake';
						qwertyKeys[i].disabled = true;
					}
				}
			}
			this.checkForWin();
		}

	}
