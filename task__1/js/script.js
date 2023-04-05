// Задача 2. Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі. ----------------------------------------

class TMoney {
	#balance = 0
	#exchangeRate

	constructor(initialBalance, initialExchangeRate) {
		this.ExchangeRate = initialExchangeRate
		this.AddMoney = initialBalance
	}

	get ExchangeRate() {
		return this.#exchangeRate
	}

	get Balance() {
		return this.#balance
	}

	get NewExchangeRate_willIncreaseUAHBy100() {
		const rate = (this.#balance * this.#exchangeRate + 100) / this.#balance
		return `Your balance will increase by 100 UAH at the exchange rate of: ${rate.toFixed(2)}`
	}
	set ExchangeRate(rate) {
		if (!isFinite(rate) || rate < 0) throw new Error('Incorrect input data')
		this.#exchangeRate = rate
	}

	set AddMoney(amount) {
		if (!isFinite(amount) || amount < 0) throw new Error('Incorrect input data')
		this.#balance += amount / this.#exchangeRate
	}

	set TakeMoneyOut(amount) {
		if (!isFinite(amount) || amount < 0) throw new Error('Incorrect input data')
		this.#balance -= amount / this.#exchangeRate
	}

	toString() {
		return `Your balance: ${this.#balance.toFixed(2)} $.Exchange rate: ${this.ExchangeRate} `
	}
}


// Usage
const someObj = new TMoney(100000, 40)
console.log(someObj.toString())
console.log(someObj.NewExchangeRate_willIncreaseUAHBy100)




