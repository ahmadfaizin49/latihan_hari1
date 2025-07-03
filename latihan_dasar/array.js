// let buah = ["apel", "jeruk", "mangga"];
// buah.push('pisang')
// let buahDiHapus = buah.pop()
// console.log(buahDiHapus)
// console.log(buah)
// console.log(buah[0])

// console.log(buah.length)

// soal 1
let buah = ["apel", "jeruk", "mangga"];
// 	ForEach Menjalankan kode untuk setiap elemen
buah.forEach((buah, index) => {
    console.log(`Buah ke-${index + 1}:${buah}`)
})

for (let i = 0; i < buah.length; i++) {
    console.log(`Buah ke-${i + 1}:${buah[i]}`)
}

//soal 2

let buah2 = ["apel", "jeruk", "mangga"];
// map mengembalikan array baru
let buahUppercase = buah2.map(buah => {
    return buah.toUpperCase()
})
console.log(buahUppercase)

//soal 3 

let angka = [1, 2, 3, 4];
angka.forEach(angka => {
    console.log(angka * 2)
})

let hasilAngka = angka.map(angka => {
    return angka * 2
})
console.log(hasilAngka)

//soal 4
let nama = ["Ahmad", "Budi", "Citra"];
nama.forEach((nama, index) => {
    console.log(`${index + 1}. ${nama}`)
})

let namaBaru = nama.map((nama, index) => {
    return `${index + 1}. ${nama}`
})
console.log(namaBaru)

//soal 5
let nama2 = ["ahmad", "budi", "citra", "dina"];
let namaLabel = nama2.map((nama, index) => {
    return `${index + 1}. ${nama.toUpperCase()}`
})
console.log(namaLabel);

nama2.forEach(nama => {
    return console.log(`Nama: ${nama}, panjang: ${nama.length}`)
})

//soal 6 

// let angka3 = [1, 5, 10, 3, 8, 12];
// let angkaLebih5 = angka3.filter(angka => {
//     return angka > 5
// })
// console.log(angkaLebih5);
// console.log(angka3.reduce((acc, angka) => acc + angka, 0));

//soal 7 
let angka4 = [2, 7, 10, 3, 8, 1, 6];
let angkaGenap = angka4.filter(angka => {
    return angka % 2 === 0
})
console.log(angkaGenap);
let total = angkaGenap.reduce((acc, curr) => acc + curr, 0)
console.log(total);
