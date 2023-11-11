// Object = Kumpulan nilai yang mempunyai 'nama'

// ============================= LITERAL
let orang1 = {
  // dibawah ini adalah PROPERTI
  nama: 'Heru Azy',
  umur: 22,
  pekerjaan: 'Programmer Pro',
  hoby: 'Coding'

  // object dalam object
  // alamat: {
  //   provinsi: 'Jawa Tengah',
  //   kota: 'Semarang',
  //   jalan: 'Thamrin'
  // }

  // func didalam object adalah METHOD
  // sapa: function () {
  //   return `Hallo nama saya ${this.nama} umur saya ${this.umur} dan saya seorang ${this.pekerjaan}.`
  // }
}
console.log(orang1)

// ============================= FUNCTION DECLARATION
function orang2(nama, umur, pekerjaan, hoby) {
  let deskripsiOrang2 = {
    nama: nama,
    umur: umur,
    pekerjaan: pekerjaan,
    hoby: hoby
  }

  return deskripsiOrang2
}
console.table(orang2('Lesi Merina', 22, 'Pastry Pro', 'Cook'))

// ============================= FUNCTION CONSTRUCTOR
// nama function diawali huruf kapital
function Orang3(nama, umur, hoby) {
  this.nama = nama
  this.umur = umur
  this.hoby = hoby
}
// gunakan key NEW saat panggil nama function
console.table(new Orang3('Heru Azy', 22, 'Coding'))
console.table(new Orang3('Lesi Merina', 22, 'Cooking'))
