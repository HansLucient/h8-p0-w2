function shoutOut() {
  console.log('Halo function!');
}

shoutOut();

function calculateMultiply() {
  return num1 * num2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1, num2);
console.log('Menampilkan ' + 'angka ' + hasilPerkalian); // Menampilkan angka 30

function processSentence() {
  return nama, age, address, hobby;
}

var nama = 'Agus';
var age = 30;
var address = 'Jln. Malioboro, Yogjakarta';
var hobby = 'gaming';

var fullSentence = processSentence(name, age, address, hobby);
console.log(
  'Nama saya ' +
    nama +
    ', umur saya ' +
    age +
    ' tahun' +
    ', alamat saya di ' +
    address +
    ', dan saya punya hobby yaitu ' +
    hobby +
    '!'
); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
