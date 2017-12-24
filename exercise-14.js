var arr = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'];

arr.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
arr.splice(4, 4, 'Pria', 'SMA International Metro');
console.log(arr);

var tanggal = arr.slice(3, 4);
var tanggal2 = tanggal.toString().split('/').reverse();
console.log(tanggal2);
var bulan = tanggal2[1];
var gabung = tanggal2.join('-');
console.log(gabung);

switch (bulan) {
  case '01': {
    console.log('Januari');
    break;
  }
  case '02': {
    console.log('Februari');
    break;
  }
  case '03': {
    console.log('Maret');
    break;
  }
  case '04': {
    console.log('april');
    break;
  }
  case '05': {
    console.log('Mei');
    break;
  }
  case '06': {
    console.log('Juni');
    break;
  }
  case '07': {
    console.log('Juli');
    break;
  }
  case '08': {
    console.log('Agustus');
    break;
  }
  case '09': {
    console.log('September');
    break;
  }
  case '10': {
    console.log('Oktober');
    break;
  }
  case '11': {
    console.log('November');
    break;
  }
  case '12': {
    console.log('Desember');
    break;
  }
  default: {
    console.log('Tidak terjadi apa-apa');
  }
}
