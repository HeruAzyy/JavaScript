# For Of

`for...of` juga digunakan untuk melakukan iterasi pada `objek yang dapat diiterasi`, seperti `array`, `string`, atau objek iterable lainnya. Namun, perlu dicatat bahwa `for...of tidak dapat digunakan untuk iterasi pada objek biasa`, karena objek biasa tidak memiliki protokol iterable.

Contoh penggunakan for of pada array:

```javascript
const myArray = [1, 2, 3];

for (const element of myArray) {
	console.log(element); // Output: 1, 2, 3
}
```

> Dalam contoh ini, `element` adalah variabel yang akan menyimpan nilai dari setiap elemen dalam array myArray pada setiap iterasi. Dengan `for...of`, kita langsung mendapatkan nilai elemen tanpa harus menggunakan indeks seperti pada `for...in`.

Perlu diingat bahwa for...of tidak memberikan kita akses langsung ke `indeks elemen` seperti for...in, tetapi kadang lebih gampang karena langsung memberikan `nilai elemen`.

`Iterable` dan `non-iterable` merujuk pada kemampuan objek untuk diiterasi atau di-loop. Objek yang bersifat iterable adalah objek yang memungkinkan kita untuk mengakses elemen-elemen atau nilai-nilai di dalamnya secara berurutan. Sebagai contoh, `array` dan `string` dianggap sebagai objek yang iterable.

Sebaliknya, objek yang tidak memungkinkan iterasi disebut `non-iterable`. Misalnya, objek biasa (plain object) tidak dapat diiterasi secara langsung dengan for...of karena mereka tidak mengikuti protokol iterable.

Jika pada suatu kasus kita harus mengiterasi object, ada caranya tersendiri:

```javascript
const myObject = { a: 1, b: 2, c: 3 };

// Ini akan menghasilkan error karena objek biasa bukan iterable
// for (const element of myObject) {
//   console.log(element);
// }

// Namun, kita bisa mengambil array dari nilai-nilai propertinya
const valuesArray = Object.values(myObject);
for (const value of valuesArray) {
	console.log(value);
}
```

> Pada contoh ini, myObject adalah objek non-iterable. Kita tidak bisa menggunakan for...of langsung pada objek ini, tetapi kita dapat mengambil array dari nilai-nilai propertinya menggunakan Object.values(obj) dan kemudian mengiterasi array tersebut.
