/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
	class Phrase {
		constructor(phrase) {
			this.phrase = phrase;
		}
// Each character(and spaces) is separated into individual li
		addPhraseToDisplay() {
			const li = document.createElement('LI');
			const array = [...game.activePhrase];
			array.forEach(character => {
				const li = document.createElement('LI');
				if (character == " ") {
					li.className = 'hide space';
				} else {
					li.className = 'hide letter';
				}
				li.textContent = character;
				phraseDiv.appendChild(li);
			})
		};
// Determines whether each guess is in the phrase.
		checkLetter(letter) {
			const array = [...game.activePhrase];
			array.forEach(character => {
				if (letter == character) {
					phrase.showMatchedLetter(letter);
				}
			})
			const wrongGuess = array.reduce((count, character) => {
				if (letter === character) {
					return count + 1;
				}
				return count;
			}, -1)
			if (wrongGuess === -1) {
				game.removeLife();
				for (let i = 0; i < qwertyKeys.length; i++) {
					if (letter === qwertyKeys[i].textContent) {
						qwertyKeys[i].className = 'wrong';
						qwertyKeys[i].disabled = true
					}
				}
			}
			game.checkForWin();
		};
// Reveals correct letter guesses.
		showMatchedLetter(letter) {
			const guess = letter;
			for (let i = 0; i < phraseDivUl.length; i++) {
				if (guess == phraseDivUl[i].textContent) {
					phraseDivUl[i].className = 'show letter';

				}
			}
			for (let i = 0; i < qwertyKeys.length; i++) {
				if (letter === qwertyKeys[i].textContent) {
					qwertyKeys[i].className = 'chosen';
					qwertyKeys[i].disabled = true;
				}
			}
			game.checkForWin();
		};
	}
