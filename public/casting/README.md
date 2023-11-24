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
