// Задача 4.Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.---------------------------------------------------------------------------------

class TBankomat {
	static #notes = {
		5: 1000,
		10: 1000,
		20: 1000,
		50: 1000,
		100: 1000,
		200: 1000,
	};

	static getMinAmount() {
		let sum = 0;
		for (const note in this.#notes) {
			if (this.#notes.hasOwnProperty(note) && this.#notes[note] > 0) {
				sum += parseInt(note);
				break;
			}
		}
		return sum;
	}

	static getMaxAmount() {
		let sum = 0;
		for (const note in this.#notes) {
			if (this.#notes.hasOwnProperty(note) && this.#notes[note] > 0) {
				sum += parseInt(note) * this.#notes[note];
			}
		}
		return sum;
	}

	static withdraw(amount) {
		if (amount > this.getMaxAmount()) {
			throw new Error("Not enough funds in the ATM.");
		}

		let remainingAmount = amount;
		const notesToWithdraw = {};

		for (const note in this.#notes) {
			if (this.#notes.hasOwnProperty(note) && this.#notes[note] > 0) {
				const numberOfNotes = Math.min(
					Math.floor(remainingAmount / parseInt(note)),
					this.#notes[note]
				);
				notesToWithdraw[note] = numberOfNotes;
				remainingAmount -= numberOfNotes * parseInt(note);
				this.#notes[note] -= numberOfNotes;
			}
			if (remainingAmount === 0) {
				break;
			}
		}

		if (remainingAmount > 0) {
			for (const note in notesToWithdraw) {
				if (notesToWithdraw.hasOwnProperty(note)) {
					this.#notes[note] += notesToWithdraw[note];
				}
			}
			throw new Error("Cannot dispense requested amount.");
		}

		return notesToWithdraw;
	}

	static get notes() {
		return this.#notes;
	}

	static set notes(newNotes) {
		this.#notes = newNotes;
	}

	static toString() {
		return `Кількість купюр:\n` +
			`5 грн - ${this.#notes[5]}\n` +
			`10 грн - ${this.#notes[10]}\n` +
			`20 грн - ${this.#notes[20]}\n` +
			`50 грн - ${this.#notes[50]}\n` +
			`100 грн - ${this.#notes[100]}\n` +
			`200 грн - ${this.#notes[200]}`;
	}
}

console.log(TBankomat.toString())
console.log(`Мінімальна сума: ${TBankomat.getMinAmount()}`)
console.log(`Максималльна сума: ${TBankomat.getMaxAmount()}`)
console.log(TBankomat.withdraw(10000));
