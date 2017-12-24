var nama = '';
var peran = '';
var tahunLahir = 1990;
var umur = 2017 - tahunLahir;
var playerHealth = tahunLahir * Math.random();
var monsterHealth = tahunLahir * Math.random();
var kodeMonster = Math.floor(Math.pow(100, Math.random()));

if (!nama) {
  peran = 'kacung';
  console.log('Halo ' + peran + ', Pilih peranmu untuk memulai game!');
  console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
  {
    if (peran === 'Ksatria') {
      console.log('Selamat datang di Dunia Proxytia, ' + nama);

      console.log(
        'Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu'
      );
    } else {
      if (peran === 'Tabib') {
        console.log('Selamat datang di Dunia Proxytia, ' + nama);
        console.log(
          'Halo ' +
            peran +
            ' ' +
            nama +
            ', kamu akan membantu temanmu yang terluka.'
        );
      } else {
        if (peran === 'Penyihir') {
          console.log('Selamat datang di Dunia Proxytia, ' + nama);
          console.log(
            'Halo ' +
              peran +
              ' ' +
              nama +
              ', ciptakan keajaiban yang membantu kemenanganmu!'
          );
        }
      }
    }
  }
}

for (var i = 0; i < tahunLahir; i++) {
  if (i % umur === 0) {
    console.log(peran + ' ' + nama + ' ' + ' menyerang monster!');
    monsterHealth -= umur;
  } else {
    if (i % kodeMonster === 0) {
      console.log('monster menyerang ' + peran + ' ' + nama + '!');
      playerHealth -= kodeMonster;
    } else {
      if (i % umur === 0 && i % kodeMonster === 0) {
        console.log('Health keduanya bertambah');
        playerHealth += kodeMonster;
      } else {
        if (i % umur === 0 && i % kodeMonster === 0) {
          console.log('Health keduanya bertambah');
          monsterHealth += umur;
        } else {
          if (playerHealth > monsterHealth) {
            console.log(
              'Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!'
            );
          } else {
            console.log(
              'Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...'
            );
          }
        }
      }
    }
  }
}
