/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
	 class Game { constructor() {
		this.missed = 0;
		this.phrases = [
			"yadda yadda",
			"happy fesitvus",
			"serentiy now",
			"doofus",
			"jimmy leg"
		];
		this.activePhrase = null;
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
			const btn = document.getElementById('overlay');
			overlay.style.display = 'none';
			game.getRandomPhrase().addPhraseToDisplay();
		}
	}
