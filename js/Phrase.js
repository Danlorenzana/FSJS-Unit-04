/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
	class Phrase {
		constructor(phrase) {
			this.phrase = phrase;
		}
//
		addPhraseToDisplay() {
			const phraseDiv = document.getElementById('phrase').firstElementChild;
			const li = document.createElement('LI');
			console.log(game.activePhrase);
			const array = [...game.activePhrase];
			console.log(array);
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
//
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
				game.removeLife()
//				return false
			}
//			return true
		};
//
		showMatchedLetter(letter) {
			for (let i = 0; i < phraseDivUl.length; i++) {
				if (letter == phraseDivUl[i].textContent) {
					phraseDivUl[i].className = 'show letter';
				}
			}
			game.checkForWin();
		};
	}
