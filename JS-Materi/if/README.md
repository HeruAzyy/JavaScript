# If Expression

`if` adalah salah satu kata kunci untuk `percabangan` di javascript,
hasil dari `percabangan` berupa value `boolean`.

jika hasilnya `true` maka code akan di jalankan, sedangkan `false` tidak.

```javascript
const score = 80;

if (score > 75) {
	console.log('Lulus!'); // jika kondisi true
}

// Lulus!
```

## else

`else` merupakan pasangan dari `if`, else akan dieksekusi saat code program bernilai `false`.

```javascript
const score = 70;

if (score > 75) {
	console.log('Lulus!'); // jika kondisi true
} else {
	console.log('Belum Lulus!'); // jika kondisi bernilai false
}

// Belum Lulus!
```

> info: if bisa ditulis tanpa else, tapi else harus di tulis bersama dengan if.

## else if

`else if` biasanya berada diantara `if` dan `else`, dan biasanya berguna semisal kita memerlukann beberapa kondisi pada if.

```javascript
const nilai = 1;

if (nilai >= 75) {
	console.log('Lulus');
} else if (nilai > 0) {
	console.log('Belum Lulus'); // ini akan dieksekusi.
} else {
	console.log('Invalid');
}
```

> info: Kita bisa menggunakan banyak else if tergantung pada kondisi.
