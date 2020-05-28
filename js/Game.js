/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
	 class Game {
		constructor() {
			this.missed = 0;
			this.phrases = [
				"yadda yadda",
				"happy fesitvus",
				"serentiy now",
				"doofus",
				"jimmy leg"
			];
			this.activePhrase = null;
			this.heartsIndex = -1;
		}
		createPhrases(phrase) {
			this.phrases.push(phrase)
		}
		getRandomPhrase() {
			const random = Math.floor(Math.random() * 5);
			const randomPhrase = game.phrases[random]
			this.activePhrase = randomPhrase;
			return new Phrase(randomPhrase.phrase);
		}
		startGame() {
			// const btn = document.getElementById('overlay');
			overlay.style.display = 'none';
			game.getRandomPhrase().addPhraseToDisplay();
		}
		checkForWin() {
			let missingLetters = 0;
			for (let i = 0; i < phraseDivUl.length; i++) {
				if (phraseDivUl[i].className == "hide letter") {
					missingLetters += 1;
					return false
				}
			}
//			console.log(missingLetters);
			if (missingLetters == 0) {
//				console.log('Winner! Winner!')
				return true
			}
		}

		removeLife() {
			let goodHeart = document.querySelectorAll('.tries');
			this.heartsIndex += 1;
			goodHeart[this.heartsIndex].firstElementChild.src='images/lostHeart.png';
			if (this.heartsIndex === 4) {
				overlay.querySelector('h1').textContent = 'Fail!'
				overlay.className = 'lose';
				overlay.style.display = '';
				return false

			}
		}

		gameOver(gameWon) {
			if (gameWon) {
				overlay.querySelector('h1').textContent = 'Great Job!'
				overlay.className = 'win';
				overlay.style.display = '';
			} else {
				console.log('not yet');
			}
		}
	}
