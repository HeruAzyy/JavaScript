# prototype

Pada `javascript`, inheritance atau pewarisan dari satu object ke object lain menggunakan sebuah property khusus yang dimiliki oleh semua object yaitu `prototype`.

Konsep `inheritance` via `prototype chain` biasanya membuat bingung programmer yang datang dari background bahasa pemrograman berbasis `class`. Karena memang di Javascript tidak dikenal konsep class.

Setiap `objek` di JavaScript memiliki `properti bawaan`, yang disebut `prototype` . Prototype itu sendiri adalah sebuah `objek`, sehingga prototype tersebut akan memiliki prototypenya sendiri, sehingga membentuk apa yang disebut dengan `prototype chain` . Rantai berakhir ketika kita mencapai prototype yang memiliki `null` prototypenya sendiri.

## proto

Kita bisa bisa mewarisi semua property pada suatu object menggunakan `proto`.

```javascript
let orang = {
	nama: 'Heru',
	umur: 22
};

let people = {};

people.__proto__ = orang; // {nama: 'Heru', umur: 22}
// sekarang "people" mewarisi semua property dari "orang".

console.log(people.nama); // Heru
console.log(people.umur); // 22
```

> Penting: Tidak disarankan menggunakan `proto` didalam production level, ini akan berdampak pada performa program. Code diatas hanya sebagai contoh untuk konsep pewarisan pada javascript.

## object.create()

Kita bisa menggunakan `object.create()` untuk konsep pewarisan.

```javascript
let orang = {
	nama: 'Lesi',
	umur: 22
};

let people = Object.create(orang);
// sekarang "people" mewarisi semua property dari "orang".

console.log(people.nama); // Lesi
console.log(people.umur); // 22
```

Dengan menggunakan `object.create()` maka akan menghasilkan output yang sama saat menggunakan `proto`, dan cara ini yang memang lebih disarankan.

> Info: perubahan state yang terjadi di parent menyebabkan state yang ada di child berubah, sementara perubahan state di child tidak berpengaruh pada parent. Lihat contohnya [disini](./inheritance.js)