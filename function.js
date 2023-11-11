// ======================================== FUNCTION DECLARATION
// function tambah(a, b) {
//   let total = a + b
//   return total
// }
// console.log(tambah(10, 10))

// function nama(saya) {
//   console.log(`Nama saya ${saya}`)
// }
// nama('Heru Azy')

// ======================================== FUNCTION EXPRESSION
// const tambahAngka = function (a, b) {
//   let total = a + b
//   return total
// }
// console.log(tambahAngka(5, 10))

// const sayHello = function (hello) {
//   console.log(hello)
// }
// sayHello('Anjay ini function')

// ======================================== NESTED FUNCTION
// function outer() {
//   function inner() {
//     console.log('Ini function Inner')
//   }

//   inner()
// }
// outer()
// inner() -> panggil func diluar scope akan error

// ======================================== RECURSIVE FUNCTION
function factorial(value) {
  if (value === 1) {
    return 1
  } else {
    return value * factorial(value - 1)
  }
}
console.log('Hasil dari factorial 7:', factorial(7))

// ======================================== ARROW FUNCTION
const orang = (nama) => {
  const say = `Nama saya: ${nama}`
  console.log(say)
}
orang('Heru Azy')
orang('Lesi Merina')

// arrow function bisa ditulis dalam satu baris jika code sederhana.
const contoh = () => console.log('Function tanpa block/sebaris')
contoh()
