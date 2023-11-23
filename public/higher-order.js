// Higher Order Function
// -> Function yang beroperasi pada function lain. (sebagai argument atau return value)
// ** Function sebagai argument di sebut CALLBACK
// function tugas(matkul, selesai) {
//   console.log(`Sedang mengerjakan ${matkul}`)
//   selesai()
// }

// function selesai() {
//   console.log(`Selesai mengerjakan`)
// }
// tugas('Higher Order function', selesai)

// Contoh lain higher order function
// function salam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, selamat ${waktu} :)`)
//   }
// }

// let malam = salam('Pagi')
// console.log(malam('Heru Azy'))

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// ===================================== FILTER
// mencari angka yang >= 3
const filter = angka.filter(function (a) {
	return a >= 3;
});
console.log(`Hasil filter: ${filter}`);

// ===================================== MAP
// kalikan semua angka dengan 2
const map = angka.map(function (a) {
	return a * 2;
});
console.log(`Hasil map: ${map}`);

// ===================================== REDUCE
// jumlahkan semua angka
// REDUCE MEMPUNYAI 2 ARGUMENT
const newAngka = angka.reduce(
	(accumulator, currentValue) => accumulator + currentValue,
	0
);
console.log(`Hasil reduce: ${newAngka}`);

// ===================================== Caining
const hasil = angka
	.filter((a) => a > 5)
	.map((a) => a * 3)
	.reduce((acc, cur) => acc + cur);

console.log(`Hasil caining method: ${hasil}`);
