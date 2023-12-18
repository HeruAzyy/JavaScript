# For In

`for...in` adalah sebuah struktur kontrol di JavaScript yang digunakan untuk melooping `properti-properti` dari suatu objek. Ini biasanya digunakan untuk melakukan `iterasi` pada properti-properti objek, seperti properti dari sebuah objek atau elemen-elemen dalam sebuah array.

```javascript
const orang = {
	nama: 'Heru',
	hoby: 'Tidur',
	pekerjaan: 'Front-End Developer'
};

for (let property in orang) {
	console.log(property);
}

// nama
// hoby
// pekerjaan
```

> Dalam contoh ini, kita menggunakan `for...in` untuk melakukan iterasi pada `properti-properti` objek `orang`. Variabel `property` akan menyimpan nama properti dalam setiap iterasi, dan kita dapat menggunakan nama properti tersebut untuk mengakses nilainya.

Agar bisa mengakses setiap `nilai properti` dari object orang bisa melakukan seperti ini:

```javascript
const orang = {
	nama: 'Heru',
	hoby: 'Tidur',
	pekerjaan: 'Front-End Developer'
};

for (let property in orang) {
	console.log(orang[property]);
}

// Heru
// Tidur
// Front-End Developer
```

> `baris console.log(orang[property]);` digunakan untuk mencetak `nilai` dari setiap `properti` objek pada setiap iterasi `for...in`. Ini memberikan kita akses ke `nilai-nilai properti` dalam objek orang tanpa harus menuliskan nama propertinya secara eksplisit.
