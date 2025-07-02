// soal 1
let nama = 'ahmad'
let hasil = ''

for (let i = nama.length - 1; i >= 0; i--) {
    hasil += nama[i]
}

console.log(hasil)

// soal 2
let nama2 = 'budi'
let hasil2 = ''

for (let i = nama2.length - 1; i >= 0; i--) {
    hasil2 += nama2[i]
}
console.log(hasil2)

// soal 3

let nama3 = 'amir'
let hasil3 = ''

for (let i = nama3.length - 1; i >= 0; i--) {
    hasil3 += nama3[i]
}
console.log(hasil3)

// soal 4

let nama4 = 'santoso'
let hasil4 = ''

for (let i = nama4.length - 1; i >= 0; i--) {
    hasil4 += nama4[i]
}
console.log(hasil4)

//soal 5 

let nama5 = 'udin'
let hasil5 = ''

for (let i = nama5.length - 1; i >= 0; i--) {
    hasil5 += nama5[i]
}
console.log(hasil5)

//soal 6

let soal6 = 'saya belajar bahasa java script'
let jumlahVokal = 0;

for (let i = 0; i < soal6.length; i++) {
    let huruf = soal6[i].toLowerCase()
    if (huruf === 'a' || huruf === 'i' || huruf === 'u' || huruf === 'e' || huruf === 'o') {
        jumlahVokal++
    }
}
console.log(`jumlah huruf vokal : ${jumlahVokal}`)

//soal 7
let soal7 = 'mudah belajar java script'
let jumlahVokalSoal7 = 0;

for (let i = 0; i < soal7.length; i++) {
    let hsoal7 = soal7[i].toLowerCase()
    if (hsoal7 === 'a' || hsoal7 === 'i' || hsoal7 === 'u' || hsoal7 === 'e' || hsoal7 === 'o') {
        jumlahVokalSoal7++
    }
}
console.log(`jumlah huruf vokal : ${jumlahVokalSoal7}`)

//soal 8 

let soal8 = 'pasti mudah belajar'
let jumlahVokalSoal8 = 0;

for (let i = 0; i < soal8.length; i++) {
    let hsoal8 = soal8[i].toLowerCase()

    if (hsoal8 === 'a' || hsoal8 === 'i' || hsoal8 === 'u' || hsoal8 === 'e' || hsoal8 === 'o') {
        jumlahVokalSoal8++
    }
}
console.log(`jumlah huruf vokal : ${jumlahVokalSoal8}`)

//soal 9

let soal9 = 'semoga cepat bisa'
let jumlahVokalSoal9 = 0

for (let i = 0; i < soal9.length; i++) {
    let hsoal9 = soal9[i].toLowerCase()
    if (hsoal9 === 'a' || hsoal9 === 'i' || hsoal9 === 'u' || hsoal9 === 'e' || hsoal9 === 'o') {
        jumlahVokalSoal9++
    }
}
console.log(`jumlah huruf vokal : ${jumlahVokalSoal9}`)

//soal 10

let soal10 = 'saya belajar javascript'
let konsonan10 = 0
let vokal = ['a', 'i', 'u', 'e', 'o']

for (let i = 0; i < soal10.length; i++) {
    let hsoal10 = soal10[i].toLowerCase()
    if (hsoal10 >= 'a' && hsoal10 <= 'z' && !vokal.includes(hsoal10)) {
        konsonan10++
    }
}
console.log(`jumlah konsonan : ${konsonan10}`)