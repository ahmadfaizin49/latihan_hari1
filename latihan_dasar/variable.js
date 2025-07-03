// let namaLengkap = 'ahmad faizin';
// let umur = 25;
// let menikah = true;
// let statusMenikah = menikah ? 'sudah menikah' : 'belum menikah'

// console.log(`Nama saya ${namaLengkap}, umur saya ${umur} tahun, dan status menikah: ${statusMenikah}`)

//soal 2

let a = 10;
let b = 5;

function tambah(a, b) {
    return a + b;
}
function kurang(a, b) {
    return a - b;
}
function kali(a, b) {
    return a * b;
}
function bagi(a, b) {
    return a / b;
}

console.log(`Hasil penjumlahan ${a} + ${b} = ${tambah(a, b)}`);
console.log(`Hasil pengurangan ${a} - ${b} = ${kurang(a, b)}`);
console.log(`Hasil perkalian ${a} * ${b} = ${kali(a, b)}`);
console.log(`Hasil pembagian ${a} / ${b} = ${bagi(a, b)}`);

//soal 3
let kota = 'jakarta';
kota = 'bandung';
console.log(kota)

//soal 4

const negara = 'indonesia';
//negara = 'malaysia'; // Ini akan menghasilkan error karena 'negara' adalah konstanta
console.log(negara);

//soal 5

let namaDepan = 'Ahmad';
let namaBelakang = 'Faizin';
console.log(`Nama lengkap saya adalah ${namaDepan} ${namaBelakang}`);

//soal 6

// let nama = 'Ahmad'
// let umur = 17;

// let status = umur < 18 ? 'belum dewasa' : 'sudah dewasa'
// console.log(`${nama} ${status}`)

let cekStatusUmur = umur => umur < 12 ? 'anak_anak'
    : umur >= 12 && umur < 18 ? 'remaja'
        : 'dewasa';
let hasil = cekStatusUmur(15)
console.log(hasil)

//soal 8 
let daftarUmur = [10, 15, 20, 8, 17, 25];
let cekStatusUmurArray = (umurArray) => {
    return umurArray.map(umur => {
        return umur < 12 ? 'anak_anak'
            : umur >= 12 && umur < 18 ? 'remaja'
                : 'dewasa';
    });
};
let hasilArray = cekStatusUmurArray(daftarUmur);
hasilArray.forEach((status, index) => {
    console.log(`Umur ${daftarUmur[index]} termasuk kategori: ${status}`);
});

//soal 9

let dataOrang = [
    { nama: "Ahmad", umur: 10 },
    { nama: "Budi", umur: 15 },
    { nama: "Citra", umur: 20 },
    { nama: "Dewi", umur: 8 },
    { nama: "Eko", umur: 17 },
    { nama: "Fajar", umur: 25 }
];
let cekStatus = umur => umur < 12 ? 'anak-anak'
    : umur >= 12 && umur <= 17 ? 'remaja' : 'dewasa'

dataOrang.forEach((orang) => {
    let status = cekStatus(orang.umur);
    console.log(`${orang.nama} (${orang.umur} tahun) adalah ${status}`);
});
