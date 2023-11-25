# Array

Array adalah objek yang menyimpan kumpulan item dan dapat ditugaskan ke suatu variabel. Mereka memiliki metode sendiri yang dapat melakukan operasi pada array.

## Mendeklarasi dan Membuat Array

Untuk mendeklarasikan array pada javascript adalah dengan menggunakan tanda kurung siku buka dan kurung siku tutup `[]`.

## Mengakses dan Mengambil Nilai pada Array

Untuk mengambil / mengakses nilai yang ada pada array adalah dengan menggunakan angka sebagai index yang dibungkus dengan kurung siku.

> Info: Index pada array selalu dimulai dari angka 0.

## Mengecek Panjang / Banyak Data pada Array

Untuk mengambil panjang (banyak data) yang ada di dalam array kita bisa menggunakan method `length` yang merupakan built-in function pada array.

```javascript
// == Membuat dan Mendeklarasikan Array ==
const array1 = [1, 2, 3, 4, 5];
const array2 = ['satu', 'dua', 'tiga'];
const array3 = [true, false];
const array4 = [1, 'satu', true];

// == Mengakses Array Berdasarkan Index (dimulai dari angka 0) ==
console.log(array1[0]); // 1
console.log(array2[1]); // 'dua'
console.log(array3[1]); // false
console.log(array4[2]); // true

// == Mengecek Panjang dari Array ==
console.log(array1.length); // 5
console.log(array2.length); // 3
console.log(array3.length); // 2
console.log(array4.length); // 3
```

## Push

Sebuah array bisa kita manipulasi dengan beberapa cara, contohnya menggunakan `push`.
push akan menambahkan data di posisi `paling akhir` pada array, contoh:

```javascript
const arr = []; // array kosong

arr.push('Heru'); // index ke-0 ['Heru']
arr.push('Azy'); // index ke-1 ['Azy']
arr.push(22); // index ke-2 [22]
arr.push(true); //index ke-3 [true]

// Atau bisa sekaligus
arr.push('Lesi', 'Merina'); // akan masuk di index ke-4 & 5

console.log(arr); // ['Heru', 'Azy', 22, true, 'Lesi', 'Merina']
```

Atau bisa `mengubah` isi array pada `index` tertentu.

```javascript
const arr = [1, 2, 3, 4, 5]; // [1, 2, 3, 4, 5]

arr[2] = 'Baru'; // value '3' diupdate jadi value 'Baru'

console.log(arr); // [1, 2, 'Baru', 4, 5]
```
