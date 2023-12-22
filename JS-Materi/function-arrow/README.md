# Arrow Function

Arrow function adalah cara sintaksis yang lebih singkat untuk menulis function dalam JavaScript, cara ini akan membuat code menjadi lebih bersih dan mudah dibaca.

```javascript
const sapa = (nama) => `Halo ${nama}.`;

console.log(sapa('Heru Azy')); // Halo Heru Azy.
```

## **Kelebihan arrow function**

1. Ringkas
   Arrow function akan lebih ringkas dalam penulisan, terutama saat function hanya memiliki satu statement return.

2. `this` Binding
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
