// ============================= LITERAL
let orang = {
	nama: 'Heru Azy', // property
	umur: 22, // property
	sayHello: function () {
		console.log(`Hallo, saya ${this.nama} dan saya ${this.umur} tahun.`);
	}
};

console.table(orang);
orang.sayHello();
console.log(typeof orang); // object
