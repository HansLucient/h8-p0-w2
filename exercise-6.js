for (var deret = 1; deret < 101; deret += 1) {
  console.log('counter ' + deret);
}

//contoh - ganjil genap
//counter sekarang = 1,
//output
//('GANJIL')
//counter sekarang = 2,
//output
//('GENAP')

for (var deret = 1; deret < 101; deret += 1) {
  if (deret % 2 == 1) {
    console.log(deret + ' GANJIL');
  } else deret % 1 === 0;
  console.log(deret + ' GENAP');
}

//contoh - untuk pertambahan counter 2
//counter sekarang = 1,
//output
//counter sekarang = 3,
//output
//"3 KELIPATAN 3"//

for (var deret = 1; deret < 101; deret += 2) {
  if (deret % 3 === 0) {
    console.log(deret + ' Kelipatan ' + '3');
  } else {
    console.log(deret);
  }
}

//contoh - untuk pertambahan counter 5
//counter sekarang = 1,
//output

//counter sekarang = 6,
//output
//"6 KELIPATAN 6"

for (var deret = 1; deret < 101; deret += 5) {
  if (deret % 6 === 0) {
    console.log(deret + ' Kelipatan ' + '6');
  } else {
    console.log(deret);
  }
}

//contoh - untuk pertambahan counter 9
//counter sekarang = 1,
//output
//counter sekarang = 10,
//output
//"10 KELIPATAN 10"

for (var deret = 1; deret < 101; deret += 9) {
  if (deret % 10 === 0) {
    console.log(deret + ' Kelipatan ' + '10');
  } else {
    console.log(deret);
  }
}
