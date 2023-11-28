# Array

Array adalah objek yang menyimpan kumpulan item dan dapat ditugaskan ke suatu variabel. Mereka memiliki metode sendiri yang dapat melakukan operasi pada array.

## Mendeklarasi dan Membuat Array

Untuk mendeklarasikan array pada javascript adalah dengan menggunakan tanda kurung siku buka dan kurung siku tutup `[]`.

```javascript
const arr = [];
```

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

## Join()

Untuk merubah isi array menjadi string bisa menggunakan method `join()`

```javascript
const arr = ['Heru', 'Azy', 'Pangestu'];
console.log(arr.join());
// console.log(arr.join(' ')); ini akan memisahkan array dengan spasi.

// Heru,Azy,Pangestu
```

## push & pop

`push` & `pop` akan menambah atau menghapus data array pada posisi paling `akhir`.

- `push()` akan menambahkan data di posisi paling `akhir` pada array.

```javascript
const arr = ['Heru', 'Azy', 'Lesi', 'Merina'];
arr.push('Zianka');

console.log(arr); //['Heru', 'Azy', 'Lesi', 'Merina', 'Zianka']
```

> Untuk push kita bisa menambahkan beberapa element sekaligus. Sebagai contoh `arr.push(1, 2, 3)`

- `pop()` akan menghapus data di posisi paling `akhir` pada array.

```javascript
const arr = ['Heru', 'Azy', 'Lesi', 'Merina'];
arr.pop();

console.log(arr); //['Heru', 'Azy', 'Lesi',]
```

## unshift & shift

`unsift` & `shift` akan menambah atau menghapus data array pada posisi paling `awal`.

- `unshift` akan menambahkan data di posisi paling `awal` pada array.

```javascript
const arr = ['Heru', 'Azy', 'Lesi', 'Merina'];
arr.unshift('Zianka');

console.log(arr); //['Zianka', 'Heru', 'Azy', 'Lesi', 'Merina']
```

> Untuk unshift juga bisa menambahkan beberapa element sekaligus. Sebagai contoh `arr.push(1, 2, 3)`

- `shift` akan menambahkan data di posisi paling `awal` pada array.

```javascript
const arr = ['Heru', 'Azy', 'Lesi', 'Merina'];
arr.shift();

console.log(arr); //['Azy', 'Lesi', 'Merina']
```

## forEach & map

Kedua method ini digunakan untuk melooping setiap element pada array.

- `forEach`

```javascript
const nama = ['Heru', 'Azy', 'Lesi', 'Merina'];

nama.forEach(function (e, i) {
	console.log(`Nama ke-${i + 1} adalah: ${e}`);
});

// Nama ke-1 adalah: Heru
// Nama ke-2 adalah: Azy
// Nama ke-3 adalah: Lesi
// Nama ke-4 adalah: Merina
```

- `map`

> Info: method `map` mengembalikan array baru.

```javascript
const arr = [1, 2, 3, 4, 5];

const arr2 = arr.map(function (e) {
	return e * 2;
});

console.log(arr2.join(' - '));

//2 - 4 - 6 - 8 - 10
```

## filter & find

Kedua method ini digunakan untuk mencari element pada array.

- `filter`
  digunakan untuk mencari `banyak` nilai.

```javascript
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const angka2 = angka.filter(function (e) {
	return e > 5;
});

console.log(angka2.join(' - '));

// 6 - 7 - 8 - 9 - 10
```

> Info: dari kasus di atas, filter akan mencari `semua` nilai yang lebih besar dari 5.

- `find`

digunakan untuk mencari `satu` nilai.

```javascript
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const angka2 = angka.find(function (e) {
	return e > 5;
});

console.log(angka2);

// 6
```

> Info: dari kasus di atas, find akan mencari nilai `pertama` yang lebih besar dari 5.
