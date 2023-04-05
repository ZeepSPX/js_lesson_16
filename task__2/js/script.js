// Задача 3. Об’єкт “Фірма” (використати члени-класи); поля: назва фірми; дата заснування(рік, місяць); послуги(назва послуги, вартість, термін виконання); адреси філіалів(країна, місто, вулиця, номер будинку); методи: визначення кількості років існування фірми; виведення всіх філіалів фірми у вказаному місті; виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу; ---------------------------------------------------------------------------------

class Firm {
	#name;
	#foundingDate;
	#services = [];
	#branches = [];

	constructor(name, foundingYear, foundingMonth) {
		this.#name = name;
		this.#foundingDate = new Date(foundingYear, foundingMonth);
	}

	addService(name, cost, duration) {
		this.#services.push({ name, cost, duration });
	}

	addBranch(country, city, street, houseNumber) {
		this.#branches.push({ country, city, street, houseNumber });
	}

	getAge() {
		const now = new Date();
		const diff = now.getTime() - this.#foundingDate.getTime();
		const ageInYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
		return ageInYears;
	}

	getBranchesInCity(city) {
		const branchesInCity = this.#branches.filter((branch) => branch.city === city);
		return branchesInCity;
	}

	getServicesByCostAndDuration(cost, duration) {
		const services = this.#services.filter(
			(service) => service.cost <= cost && service.duration <= duration
		);
		return services;
	}

	toString() {
		return `Firm name: ${this.#name}\nFounded in: ${this.#foundingDate.getFullYear()}.\nNumber of branches: ${this.#branches.length}\nNumber of services: ${this.#services.length}`;
	}
}

// Example usage
const myFirm = new Firm("ABC Company", 2010, 0);
myFirm.addService("Web Design", 1000, 30);
myFirm.addService("SEO", 500, 15);
myFirm.addService("Content Writing", 300, 10);

myFirm.addBranch("USA", "New York", "Broadway", "123");
myFirm.addBranch("Canada", "Toronto", "King Street", "456");
myFirm.addBranch("Canada", "Vancouver", "Granville Street", "789");

console.log(myFirm.toString());
console.log(`Age of the firm: ${myFirm.getAge()} years`);
console.log("Branches in Toronto:", myFirm.getBranchesInCity("Toronto"));
console.log(
	"Services that can be done within budget of $800 and 20 days:",
	myFirm.getServicesByCostAndDuration(800, 20)
);







