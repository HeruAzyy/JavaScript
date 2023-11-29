function Angkot(sopir, trayek, penumpang, kas) {
	this.sopir = sopir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;

	this.penumpangNaik = function (namaPenumpang) {
		this.penumpang.push(namaPenumpang);
		return this.penumpang;
	};

	this.penumpangTurun = function (namaPenumpang, bayar) {
		if (this.penumpang.length === 0) {
			console.log('Angkot masih kosong!');
			return false;
		}

		for (let i = 0; i < this.penumpang.length; i++) {
			if (this.penumpang[i] == namaPenumpang) {
				this.penumpang[i] = undefined;
				this.kas += bayar;
				return this.penumpang;
			}
		}
	};
}

let angkot1 = new Angkot('Heru', 'Semarang', [], 0);

// Ketika penumpang naik.
console.table(angkot1);
console.table(angkot1.penumpangNaik('azy'));
console.table(angkot1.penumpangNaik('pangestu'));
console.table(angkot1.penumpangNaik('lesi'));

// Ketika penumpang turun dan bayar.
console.table(angkot1.penumpangTurun('azy', 2000));
console.table(angkot1.penumpangTurun('pangestu', 2500));
console.table(angkot1.penumpangTurun('lesi', 4000));

// Hasil kas angkot.
console.table(`Jumlah kas angkot - 1: ${angkot1.kas}`);
