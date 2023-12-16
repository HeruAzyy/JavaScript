# switch

Ada alternatif lain untuk melakukan pengecekan ber-urut yaitu dengan `switch case`. Kita bisa menentukan variabel mana yang akan kita cek, lalu tambahkan beberapa case di bawahnya untuk mengecek isi dari variabel yang kita tentukan di dalam switch tadi. Kita juga bisa memberikan kondisi default sama halnya dengan `else` pada `if`.

Contoh:

```js
const buah = 'Jeruk';

switch (buah) {
	case 'Apel':
		console.log('Kode ini tidak akan pernah dijalankan');
		break;
	case 'Nanas':
		console.log('Kode ini tidak akan pernah dijalankan');
		break;
	default:
		console.log('Kode ini pasti dijalankan');
		break;
}
```
