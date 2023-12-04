const nilai1 = parseInt('1'); // string ke integer
const nilai2 = 1; // number
const total = nilai1 + nilai2;

console.log(total); // 2
console.log(typeof nilai1);

// ================== CONTOH LAIN
const a = 1; // number
const b = 2; // number
const hasil = a.toString() + b; // 'a' diconversi ke string

console.log(hasil); // 12
console.log(typeof a.toString()); // string

console.log(parseInt('Bukan number!')); // NaN
