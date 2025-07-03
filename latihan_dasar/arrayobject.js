let siswa = [
    { nama: 'Ahmad' },
    { nama: 'Budi' },
    { nama: 'Citra' }];
siswa.forEach((siswa) => {
    console.log(`Nama siswa: ${siswa.nama}`)
})

let siswa2 = [
    { nama: 'Ahmad', nilai: 85 },
    { nama: 'Budi', nilai: 70 },
    { nama: 'Citra', nilai: 92 }
];
let siswaLulus = siswa2.filter(siswa => {
    return siswa.nilai >= 75
})
siswaLulus.forEach(siswa => {
    console.log(`Nama : '${siswa.nama}' , Nilai: ${siswa.nilai}`)
})

let siswaKapital = siswa2.map((siswa) => {
    return siswa.nama.toUpperCase()
})
console.log(siswaKapital)

let dataSiswa = [
    { nama: "Ahmad", nilai: 85 },
    { nama: "Budi", nilai: 70 },
    { nama: "Citra", nilai: 92 },
    { nama: "Dewi", nilai: 60 },
    { nama: "Eka", nilai: 78 }
];
let siswaLulus2 = dataSiswa.filter((siswa) => {
    return siswa.nilai >= 75
})
console.log(siswaLulus2)
let namaSiswaLulus = siswaLulus2.map((siswa) => {
    return siswa.nama.toUpperCase()
})
console.log(namaSiswaLulus)
let totalNilai = siswaLulus2.reduce((total, siswa) => {
    return total + siswa.nilai
}, 0)

let rataRataNilai = totalNilai / siswaLulus2.length
console.log(`Total nilai lulus: ${totalNilai}`)
console.log(`Rata-rata nilai lulus: ${rataRataNilai}`)