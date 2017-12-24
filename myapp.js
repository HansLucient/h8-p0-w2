var pertanyaan = [
  [
    'Flora/Fauna',
    'Binatang yang bisa hidup di air dan di darat disebut ?',
    'Amfibi',
    'Aves',
    'Amfibi',
  ],
  [
    'Negara',
    'Negara terluas keempat di dunia adalah ?',
    'China',
    'Amerika Serikat',
    'Amerika Serikat',
  ],
  [
    'Flora/Fauna',
    'Ikan badut biasa berlindung dari pemangsa dengan bersembunyi di dalam ?',
    'Cnidaria',
    'Anemon',
    'Anemon',
  ],
  [
    'Science',
    'Suara dengan frekuensi 20 - 20.000 Hz termasuk bunyi ?',
    'Supersonik',
    'Audiosonik',
    'Audiosonik',
  ],
  [
    'Negara',
    'Negara kecil yang sangat kaya dan benderanya sama dengan Belanda adalah ?',
    'Luxemberg',
    'Belgia',
    'Luxemberg',
  ],

];

var key = ['Tema', 'Quiz', 'A', 'B'];

const kuis = (jawaban) => {
  let jumlahBenar = 0
  for (var i = 0; i < pertanyaan.length; i++) {
    for (var j = 0; j < pertanyaan[i].length - 1; j++) {
      console.log(`${key[j]} : ${pertanyaan[i][j]}`);
    }
    if (pertanyaan[i][pertanyaan[i].length - 1].toLowerCase() === jawaban[i].toLowerCase()) {
      console.log('Benar');
      jumlahBenar += 1
    } else {
      console.log('coba lagi');
    }
    console.log(' ');
  }
  console.log(`Total Score ${jumlahBenar *  100 / pertanyaan.length}`)
};

var j = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
}

kuis(Object.values(j));
