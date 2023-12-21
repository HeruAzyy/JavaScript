# Destructuring

Destructuring adalah cara untuk mengekstrak nilai dari `object` atau `array` dan menyimpannya kedalam variable terpisah. Destructuring membantu agar code lebih ringkas dan mudah untuk dibaca, dan biasanya destructuring digunakan saat kita bekerja dengan object atau array yang besar.

## Destructuring Objek

Destructuring objek memungkinkan kita untuk mengekstrak nilai dari properti-properti objek ke dalam variable yang terpisah. Contoh:

```javascript
const orang = {
	nama: 'Heru Azy',
	umur: 22,
	kota: 'Semarang'
};

// destructuring object orang
const { nama, umur, kota } = orang;

console.log(nama); // Heru Azy
console.log(umur); // 22
console.log(kota); // Semarang
```

## Destructuring Array

Destructuring array mirip dengan objek, tetapi menggunakan sintaks kurung siku `[]`. Contoh:

```javascript
const person = ['Heru', 'Azy', 'Pangestu'];

const [firtsName, middleName, lastName] = person;

console.log(firtsName); // Heru
console.log(middleName); // Azy
console.log(lastName); // Pangestu
```

## Destructuring dengan Default Values

Kita juga bisa memberikan nilai default untuk variable dalam proses destructuring:

```javascript
const person = { nama: 'Heru' };

// Destructuring objek dengan nilai default
const { nama, umur = 25, kota = 'Semarang' } = person;

console.log(nama); // Heru
console.log(umur); // 25 (nilai default)
console.log(kota); // Semarang (nilai default)
```
