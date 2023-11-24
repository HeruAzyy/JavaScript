# Casting

Seringkali, operator dan fungsi secara otomatis mengonversi nilai yang diberikan ke tipe yang tepat.

Misalnya, `alert` secara otomatis mengonversi nilai apa pun menjadi string untuk menampilkannya. Operasi matematika mengubah nilai menjadi angka.

Ada juga kasus ketika kita perlu mengonversi nilai secara eksplisit ke tipe yang diharapkan.

## Conversi String

Konversi string terjadi ketika kita membutuhkan bentuk string dari suatu nilai.

Misalnya, `alert(value)` melakukannya untuk menunjukkan nilainya.

Kita juga dapat memanggil fungsi `String(value)` untuk mengonversi nilai menjadi string:

```javascript
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string
```

## Conversi Number

Konversi numerik dalam fungsi dan ekspresi matematika terjadi secara otomatis.

Misalnya, ketika pembagian / diterapkan pada bukan bilangan:

```javascript
alert('6' / '2'); // 3, strings are converted to numbers
```

Kita dapat menggunakan fungsi `Number(value)` untuk secara eksplisit mengonversi `value` menjadi angka:

```javascript
let str = '123';
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number
```

Konversi eksplisit (jelas) biasanya diperlukan ketika kita membaca nilai dari sumber berbasis string seperti formulir teks tetapi mengharapkan angka yang dimasukkan.

Jika string bukan bilangan valid, hasil konversi tersebut adalah NaN. Misalnya:

```javascript
let age = Number('an arbitrary string instead of a number');

alert(age); // NaN, conversion failed
```

## Konversi Boolean

Konversi Boolean adalah yang paling sederhana.

`Boolean(value).`

Aturan konversi:

- Nilai yang secara intuitif “kosong”, seperti `0`, string kosong, `null`, `undefined`, dan < /span>.`NaN`, menjadi `false`
- Nilai lainnya menjadi `true`.

Contohnya:

```javascript
alert(Boolean(1)); // true
alert(Boolean(0)); // false

alert(Boolean('hello')); // true
alert(Boolean('')); // false
```
