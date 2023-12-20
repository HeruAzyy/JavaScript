# Rest Parameter

Rest parameter adalah fitur dalam JavaScript yang memungkinkan kita untuk mengirim data sebanyak-banyaknya pada `satu parameter`, dan data tersebut akan secara otomatis `dikonversi menjadi array`.

Dalam definisi fungsi, rest parameter ditulis menggunakan tiga titik `(...)` diikuti oleh nama parameter. Sebagai contoh:

```javascript
function orang(...nama) {
	for (let i of nama) {
		console.log(i);
	}
}

orang('Heru', 'Azy', 'Pangestu');

// Heru
// Azy
// Pangestu
```

> Dalam contoh diatas, `(...nama)` adalah `Rest parameter` yang menampung lebih dari satu data yang dikirim melalui argument saat function orang() dipanggil. Lalu data dari `(...nama)` akan dikonversi secara otomatis menjadi `array` oleh javascript, dan data tersebut bisa diiterasi menggunakan operator `for of`.
