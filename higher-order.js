// Higher Order Function
// -> Function yang beroperasi pada function lain. (sebagai argument atau return value)
// ** Function sebagai argument di sebut CALLBACK
function tugas(matkul, selesai) {
  console.log(`Sedang mengerjakan ${matkul}`)
  selesai()
}

function selesai() {
  console.log(`Selesai mengerjakan`)
}
tugas('Higher Order function', selesai)

// Contoh lain higher order function
function salam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, selamat ${waktu} :)`)
  }
}

let malam = salam('Pagi')
console.log(malam('Heru Azy'))
