# While

`while` adalah jenis perulangan yang termasuk dalam perulangan `uncounted loop`. Perulangan while juga dapat menjadi perulangan yang `counted loop` dengan memberikan counter di dalamnya.

Perulangan while akan terjadi selama `kondisi` bernilai `true`.

```javascript
while (true) {
	console.log('Hello World!'); // baris ini akan dicetak terus menerus.
}
```

> PENTING: Dengan syntax diatas artinya looping while tidak akan berhenti `infinite loop`, karena kondisinya terus bernilai `true`.

looping `while` bisa di hentikan oleh program itu sendiri, dengan catatan kita harus mempunyai 3 hal sebagai berikut:

- Nilai awal
- Kondisi terminasi
- Increment / Decrement

```javascript
let nilaiAwal = 1;
while (nilaiAwal <= 5) {
	console.log('Hello World!');
	nilaiAwal++; // Decrement
}

// 'Hello World!' akan dicetak 5 kali, sesuai kondisi terminasi.
```

> Keterangan: Tentukan dulu variable untuk menentukan nilai awal, sebagai contoh diatas kita menggunakan nama variable `nilaiAwal`, lalu diikuti kondisi terminasi `nilaiAwal <= 5`. Artinya jika `nilaiAwal` lebih kecil atau sama dengan `5` maka jalankan aksi, sesuai contoh diatas kita akan menjalankan aksi cetak console 'Hello World!'. Lalu `nilaiAwal++` artinya `nilaiAwal = nilaiAwal + 1`, setelah itu `nilaiAwal` akan bernilai 2. dan seterusnya hingga `nilaiAwal <= 5`, disitulah program akan berhenti menjalankan aksi.

contoh lain:

```javascript
let nilaiAwal = 1;
while (nilaiAwal <= 5) {
	console.log(`Hello World! ${nilaiAwal}X`);
	nilaiAwal++; // Decrement
}

// Hello World! 1X
// Hello World! 2X
// Hello World! 3X
// Hello World! 4X
// Hello World! 5X
```
