// CLOSURE (membutuhkan data dari luar scope)
// untuk function factories dan private method

function init() {
  let nama = 'Heru'
  function tampilNama() {
    console.log(nama)
  }
  tampilNama()
}
init()

// Contoh lain closure (function factories)
function salam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, selamat ${waktu}.`)
  }
}

let pagi = salam('Pagi')
let siang = salam('Siang')
let malam = salam('Malam')

malam('Heru Azy')

// Contoh lain closure (private method)
let add = (function () {
  let counter = 0
  return function () {
    console.log(++counter)
  }
})()

add()
add()
add()
add()
add()
