// Object = Kumpulan nilai yang mempunyai 'nama'

// ============================= LITERAL
// let orang1 = {
//   nama: 'Heru',
//   energi: 10,
//   makan: function (porsi) {
//     this.energi += porsi
//     console.log(`Halo ${this.nama}, selamat makan.`)
//   }
// }
// orang1.makan(2)
// console.table(orang1)

// let orang2 = {
//   nama: 'Lesi',
//   energi: 10,
//   makan: function (porsi) {
//     this.energi += porsi
//     console.log(`Halo ${this.nama}, selamat makan.`)
//   }
// }
// orang2.makan(3)
// console.table(orang2)

// ============================= FUNCTION DECLARATION
// const methodOrang = {
//   makan: function (porsi) {
//     this.energi += porsi

//     console.log(
//       `Halo ${this.nama} selamat makan, energimu akan bertambah menjadi ${this.energi} \n`
//     )
//   },

//   kerja: function (jam) {
//     this.energi -= jam
//     console.log(
//       `Halo ${this.nama} selamat bekerja, energimu akan berkurang menjadi ${this.energi} \n`
//     )
//   },

//   tidur: function (jam) {
//     this.tidur += jam * 2
//     console.log(
//       `Halo ${this.nama} selamat tidur, energimu akan bertambah menjadi ${this.energi} \n`
//     )
//   }
// }

// function Orang(nama, energi) {
//   let orang = {}
//   orang.nama = nama
//   orang.energi = energi
//   orang.makan = methodOrang.makan
//   orang.kerja = methodOrang.kerja
//   orang.tidur = methodOrang.tidur

//   return orang
// }

// let heru = Orang('Heru', 10)
// heru.makan(5)
// heru.kerja(2)
// heru.tidur(1)

// ============================= FUNCTION CONSTRUCTOR
// nama function diawali huruf kapital
// function Orang(nama, energi) {
//   this.nama = nama
//   this.energi = energi
//   this.makan = function (porsi) {
//     this.energi += porsi

//     console.log(
//       `Halo ${this.nama} selamat makan, energimu akan bertambah menjadi ${this.energi}`
//     )
//   }

//   this.kerja = function (jam) {
//     this.energi -= jam
//     console.log(
//       `Halo ${this.nama} selamat bekerja, energimu akan berkurang menjadi ${this.energi}`
//     )
//   }
// }

// // gunakan key NEW saat panggil nama function
// let heru = new Orang('Heru', 10)
// heru.makan(4)
// heru.kerja(2)

// // Contoh lain
// function Mahasiswa(nama, jurusan) {
//   this.Nama = nama
//   this.Jurusan = jurusan
// }
// console.table(new Mahasiswa('Heru Azy', 'Ekonomi Bisnis'))

// ============================= OBJECT.CREATE()
// const methodOrang = {
//   makan: function (porsi) {
//     this.energi += porsi

//     console.log(
//       `Halo ${this.nama} selamat makan, energimu akan bertambah menjadi ${this.energi}`
//     )
//   },

//   kerja: function (jam) {
//     this.energi -= jam

//     console.log(
//       `Halo ${this.nama} selamat bekerja, energimu akan berkurang menjadi ${this.energi}`
//     )
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2

//     console.log(
//       `Halo ${this.nama} selamat tidur, energimu akan bertambah menjadi ${this.energi}`
//     )
//   }
// }

// function Orang(nama, energi) {
//   // gunakan object.create agar bisa terhubung dengan methodOrang tanpa membuat properti baru.
//   let orang = Object.create(methodOrang)
//   orang.nama = nama
//   orang.energi = energi

//   return orang
// }

// let heru = Orang('Heru', 10)
// heru.makan(5)
// heru.kerja(2)
// heru.tidur(6)

// ============================= PROTOTYPE
// function Karakter(nama, energi) {
// 	this.nama = nama
// 	this.energi = energi
// }

// method MAKAN
// Karakter.prototype.makan = function (porsi) {
// 	this.energi += porsi
// 	console.log(
// 		`Halo ${this.nama} selamat makan, energimu akan bertambah menjadi ${this.energi}`
// 	)
// }

// method KERJA
// Karakter.prototype.kerja = function (jam) {
// 	this.energi -= jam
// 	console.log(
// 		`Halo ${this.nama} selamat bekerja, energimu akan berkurang menjadi ${this.energi}`
// 	)
// }

// let heru = new Karakter('Heru', 10)
// heru.makan(1)
// heru.kerja(2)

// ============================= CLASS
class Karakter {
	constructor(nama, energi) {
		this.nama = nama;
		this.energi = energi;
	}

	makan(porsi) {
		this.energi += porsi;
		console.log(
			`Halo ${this.nama} selamat makan, energimu akan bertambah menjadi ${this.energi}`
		);
	}

	kerja(jam) {
		this.energi -= jam;
		console.log(
			`Halo ${this.nama} selamat bekerja, energimu akan berkurang menjadi ${this.energi}`
		);
	}
}

let heru = new Karakter('Heru', 10);
console.log(heru);
heru.makan(5);
heru.kerja(3);
