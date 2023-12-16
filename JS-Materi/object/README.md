# Object

_Object_ adalah struktur data yang bisa menyimpan lebih dari satu pasangan `nama variabel` dan `nilai` di dalamnya. Pasangan `nama variabel` dan `nilai` dipisahkan dengan tanda titik dua (**:**) dan dikenal sebagai _key-value pairs_ atau _name-value pairs_.

Berbeda dengan _array_ yang menggunakan kurung siku **[]**, _object_ ditandai dengan adanya kurung kurawal **{}**.

Salah satu cara membuat _object_ adalah dengan menggunakan _object literal_ atau mendefinisikan object secara langsung kedalam sebuah variabel.

```javascript
const dataDiri = { nama: 'Heru', alamat: 'Semarang', umur: 22 };
```

Pada contoh di atas dengan menggunakan _object literal_ dibuat variabel `dataDiri` yang dapat menyimpan lebih dari satu variabel di dalamnya sebagai sebuah _object_.

## _Property_ dan _Method_

Dalam _object_, variabel yang menyimpan nilai seperti `string`, `number`, `boolean`, atau `array` disebut sebagai **property**. Dari contoh variabel `dataDiri` di atas, _object_ yang dibuat memiliki _property_ yaitu nama, alamat, dan umur.

Untuk mengambil nilai sebuah _property_ dapat menggunakan _dot notation_ atau notasi titik, yaitu dengan menulis titik setelah nama _object_ diikuti nama _property_ yang ingin diambil.

```javascript
const dataDiri = { nama: 'Heru', alamat: 'Semarang', umur: 22 };

console.log(dataDiri.alamat); // pada dataDiri.alamat memiliki nilai "Semarang"
```

Selain dapat menyimpan nilai seperti `string` dan `number`, di dalam _object_ juga dapat disimpan fungsi yang bisa dipanggil kemudian. Variabel yang menyimpan fungsi dikenal sebagai **method**.

Cara memanggil fungsi pada _method_ adalah dengan menggunakan _dot notation_ atau notasi titik seperti pada _property_ kemudian menambahkan tanda kurung di akhir.

```javascript
const dataDiri = {
	nama: 'Heru',
	alamat: 'Semarang',
	umur: 22,
	perkenalan: function () {
		console.log('Hai, nama saya Heru');
	}
};

dataDiri.perkenalan(); // menghasilkan tampilan pada konsol yaitu "Hai, nama saya Heru"
```

Dari contoh di atas, _object_ `dataDiri` memiliki _method_ yang diberi nama perkenalan. _Method_ perkenalan kemudian dipanggil setelah `dataDiri` dideklarasikan dan menjalankan perintah dalam fungsinya.

**Ada beberapa cara untuk membuat sebuah object di javascript.**

## object literal

Cara membuat object literal adalah cara paling simple, dengan hanya deklarasi variable yang diisi dengan `properti` object.

```javascript
const orang = {
	nama: 'Heru Azy',
	umur: 22,
	pekerjaan: 'Front-end Developer'
};

console.log(orang);

// {nama: 'Heru Azy', umur: 22, pekerjaan: 'Front-end Developer'}
```

## function declaration

Dengan cara ini kita akan memasukkan sebuah object kedalam `function`, cukup deklarasi sekali kita bisa panggil dan isikan `properti` berulang-ulang.

```javascript
function orang(nama, umur, pekerjaan) {
	let obj = {};
	obj.nama = nama;
	obj.umur = umur;
	obj.pekerjaan = pekerjaan;

	return obj;
}

console.log(orang('Heru', 22, 'Front-end Developer'));
// {nama: 'Heru', umur: 22, pekerjaan: 'Front-end Developer'}

console.log(orang('Lesi', 22, 'Artisan Bakery'));
// {nama: 'Lesi', umur: 22, pekerjaan: 'Artisan Bakery'}
```

## constructor

Cara ini mirip dengan function declaration, tapi nama function biasanya diawali dengan huruf `kapital`. Dan saat pemanggilan funtion harus menggunakan keyword `new`.

```javascript
function Orang(nama, umur, pekerjaan) {
	this.nama = nama;
	this.umur = umur;
	this.pekerjaan = pekerjaan;
}

console.log(new Orang('Heru', 22, 'Front-end Developer'));

// Orang {nama: 'Heru', umur: 22, pekerjaan: 'Front-end Developer'}
```

> Jika pada saat pemanggilan function tidak menggunakan keyword `new` akan menghasilkan `undefined`, karena fungsinya tidak mengembalikan apapun.
