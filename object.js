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
// function Orang(nama, energi) {
//   let orang = {}
//   orang.nama = nama
//   orang.energi = energi
//   orang.makan = function (porsi) {
//     orang.energi += porsi

//     console.log(
//       `Halo ${this.nama} selamat makan, energimu akan bertambah menjadi ${this.energi}`
//     )
//   }

//   orang.kerja = function (jam) {
//     orang.energi -= jam
//     console.log(
//       `Halo ${this.nama} selamat bekerja, energimu akan berkurang menjadi ${this.energi}`
//     )
//   }
//   return orang
// }

// let heru = Orang('Heru', 10)
// heru.makan(5)
// heru.kerja(2)

// ============================= FUNCTION CONSTRUCTOR
// nama function diawali huruf kapital
function Orang(nama, energi) {
  this.nama = nama
  this.energi = energi
  this.makan = function (porsi) {
    this.energi += porsi

    console.log(
      `Halo ${this.nama} selamat makan, energimu akan bertambah menjadi ${this.energi}`
    )
  }

  this.kerja = function (jam) {
    this.energi -= jam
    console.log(
      `Halo ${this.nama} selamat bekerja, energimu akan berkurang menjadi ${this.energi}`
    )
  }
}

// gunakan key NEW saat panggil nama function
let heru = new Orang('Heru', 10)
heru.makan(4)
heru.kerja(2)

// Contoh lain
function Mahasiswa(nama, jurusan) {
  this.Nama = nama
  this.Jurusan = jurusan
}
console.table(new Mahasiswa('Heru Azy', 'Ekonomi Bisnis'))
