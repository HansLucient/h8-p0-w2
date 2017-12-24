var tahun = '1723';

if (tahun % 4 === 0) {
  console.log(tahun + ' adalah tahun kabisat');
} else {
  if (tahun % 100 === 1) {
    console.log(tahun + ' adalah tahun kabisat');
  } else {
    if (tahun % 400 === 0) {
      console.log(tahun + ' adalah tahun kabisat');
    } else {
      console.log(tahun + ' adalah bukan tahun kabisat');
    }
  }
}
