// ========================================== FOR IN
// mengiterasi data property pada object atau index array
const person = {
	nama: 'Heru Azy',
	umur: 22,
	hoby: 'Coding'
};
for (let property in person) {
	console.log(`${property}: ${person[property]}`);
}

const nama = ['Heru', 'Azy', 'Pangestu'];
for (let index in nama) {
	console.log(`Index ke-${index} adalah: ${nama[index]}`);
}

// ========================================== FOR OF
// mengiterasi isi value
const nama2 = ['Lesi', 'Merina'];
for (let value of nama2) {
	console.log(`${value}`);
}

const fullName = 'Lesi Merina';
for (let char of fullName) {
	console.log(`${char}`);
}
