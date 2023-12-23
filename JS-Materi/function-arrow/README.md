# Arrow Function

Arrow function adalah cara sintaksis yang lebih singkat untuk menulis function dalam JavaScript, cara ini akan membuat code menjadi lebih bersih dan mudah dibaca.

```javascript
const sapa = (nama) => `Halo ${nama}.`;

console.log(sapa('Heru Azy')); // Halo Heru Azy.
```

## **Kelebihan arrow function**

1. **Ringkas**

   Arrow function akan lebih ringkas dalam penulisan, terutama saat function hanya memiliki satu statement return.

2. **`this` Binding**

   Arrow function tidak memiliki this sendiri, mereka mengambil nilai this dari lingkup yang mengelilingi (enclosing scope). Ini membuat penggunaan this dalam arrow function lebih mudah dipahami.

```javascript
function Orang() {
	this.nama = 'Heru';

	// Fungsi biasa
	this.perkenalanBiasa = function () {
		setTimeout(function () {
			console.log('Nama saya:', this.nama); // this.nama tidak ditemukan (undefined)
		}, 1000);
	};

	// Arrow function
	this.perkenalanArrow = function () {
		setTimeout(() => {
			console.log('Nama saya:', this.nama); // this.nama diambil dari lingkup Orang
		}, 1000);
	};
}

const heru = new Orang();
heru.perkenalanBiasa(); // Output: Nama saya: undefined
heru.perkenalanArrow(); // Output: Nama saya: Heru
```

## **Beberapa cara penulisan Arrow function**

Ada beberapa cara penulisan arrow function tergantung pada kompleksitas code function dan beberapa kasus.

### Bentuk dasar

-  jika function hanya memiliki satu statement return dan satu parameter kita bisa menulisnya tanpa menggunakan kurung kurawal `{}`

```javascript
const tambah = (angka) => angka + 2;

console.log(tambah(10)); // 12
```

### Tanpa parameter

-  Jika function tidak memerlukan parameter, kita tetap menggunakan tanda kurung, tetapi kali ini tanpa parameter.

```javascript
const sapa = () => console.log('Halo');

sapa(); // Halo
```

### Lebih dari satu parameter

-  Jika function memiliki lebih dari satu parameter, kita menggunakan tanda kurung untuk mengelilingi parameter.

```javascript
const kali = (angka1, angka2) => angka1 * angka2;

console.log(kali(2, 5)); // 10
```

### Dengan code block

-  Jika function memiliki lebih dari satu statement atau lebih kompleks, kita dapat menggunakan kurung kurawal `{}` dan menambahkan return secara eksplisit.

```javascript
const tambah = (angka) => {
	const hasil = angka + 10;
	return hasil;
};

console.log(tambah(10)); // 20
```

### `this` Binding

-  Arrow function tidak memiliki binding this sendiri, function ini mengambil nilai `this` dari lingkup di mana mereka dibuat. Ini membuatnya sangat berguna dalam penggunaan event listener dan penggunaan `this di dalam objek`.

```javascript
const orang = {
	nama: 'Heru',
	perkenalan: function () {
		setTimeout(() => {
			console.log('Nama saya:', this.nama);
		}, 1000);
	}
};

orang.perkenalan(); // Nama saya: Heru
```
