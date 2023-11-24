// ============================= LITERAL
let orang1 = {
	nama: 'Heru Azy', // property
	umur: 22, // property
	sayHello: function () {
		console.log(`Hallo, saya ${this.nama} dan saya ${this.umur} tahun.`);
	}
};

console.table(orang1);
orang1.sayHello();
