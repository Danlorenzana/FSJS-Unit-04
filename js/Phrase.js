/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
	class Phrase {
		constructor(phrase) {
			this.phrase = phrase;
		}
// Each letter and space is set to individual <li>
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
// Determines whether a letter is in the activePhrase.
		checkLetter(letter) {
			const array = [...game.activePhrase];
			array.forEach(character => {
				if (letter == character) {
					this.showMatchedLetter(letter);
				}
			})
			// const wrongGuess = array.reduce((count, character) => {
			// 	if (letter === character) {
			// 		return count + 1;
			// 	}
			// 	return count;
			// }, -1)
			// if (wrongGuess === -1) {
			// 	game.removeLife();
			// 	for (let i = 0; i < qwertyKeys.length; i++) {
			// 		if (letter === qwertyKeys[i].textContent) {
			// 			qwertyKeys[i].className = 'wrong animate__animated animate__headShake';
			// 			qwertyKeys[i].disabled = true
			// 		}
			// 	}
			// }
			game.checkForWin();
		};
// Reveals letter(s) on the screen.
		showMatchedLetter(letter) {
			// const guess = letter;
			for (let i = 0; i < phraseDivUl.length; i++) {
				if (letter == phraseDivUl[i].textContent) {
					phraseDivUl[i].className = 'show letter animate__animated animate__flipInY';
					phraseDivUl[i].style.setProperty('--animate-duration', '0.7s');
				}
			}
			// for (let i = 0; i < qwertyKeys.length; i++) {
			// 	if (letter === qwertyKeys[i].textContent) {
			// 		qwertyKeys[i].className = 'chosen animate__animated animate__headShake';
			// 		qwertyKeys[i].disabled = true;
			// 	}
			// }
			// game.checkForWin();
		};
	}
