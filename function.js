// FUNCTION DECLARATION
function tambah(a, b) {
  let total = a + b
  return total
}
console.log('Hasil function Declaration: ' + tambah(10, 10))

// FUNCTION EXPRESSION = function tanpa nama
const tambahAngka = function (a, b) {
  let total = a + b
  return total
}
console.log('Hasil function Expression: ' + tambahAngka(5, 10))
