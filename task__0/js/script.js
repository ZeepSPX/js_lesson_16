// Задача 1. Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата представляється структурою із трьома полями. Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років. Введення та виведення дати реалізувати за допомогою методу  toString.-----------------------------

class TDate {
	static #Month_Days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	#day;
	#month;
	#year;

	constructor(day, month, year) {
		this.#day = day;
		this.#month = month;
		this.#year = year;
	}

	static getIsLeapYear(year) {
		return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	}

	static getDaysInMonth(month, year) {
		if (month === 2 && TDate.getIsLeapYear(year)) {
			return 29;
		}
		return TDate.#Month_Days[month - 1];
	}

	addDays(days) {
		let newDay = this.#day + days;
		let daysInMonth = TDate.getDaysInMonth(this.#month, this.#year);
		while (newDay > daysInMonth) {
			newDay -= daysInMonth;
			this.addMonths(1);
			daysInMonth = TDate.getDaysInMonth(this.#month, this.#year);
		}
		this.#day = newDay;
	}

	addMonths(months) {
		let newMonths = this.#month + months;
		let yearsToAdd = Math.floor((newMonths - 1) / 12);
		this.#year += yearsToAdd;
		newMonths -= yearsToAdd * 12;
		if (newMonths <= 0) {
			newMonths += 12;
			this.#year--;
		}
		this.#month = newMonths;

		const daysInMonth = TDate.getDaysInMonth(this.#month, this.#year);
		if (this.#day > daysInMonth) {
			this.#day = daysInMonth;
		}
	}

	addYears(years) {
		this.#year += years;
		const daysInMonth = TDate.getDaysInMonth(this.#month, this.#year);
		if (this.#day > daysInMonth) {
			this.#day = daysInMonth;
		}
	}

	subDays(days) {
		this.addDays(-days);
	}

	subMonths(months) {
		this.addMonths(-months);
	}

	subYears(years) {
		this.addYears(-years);
	}

	toString() {
		return `${this.#day}.${this.#month}.${this.#year}`;
	}
}

let date = new TDate(1, 4, 2023);
date.addDays(356);
date.addMonths(4);
date.addYears(3);
console.log(date.toString());





