const data = {
    nama : "wisnu",
    kelas : 11,
    umur : 19,
    alamat : "Puri Surya Jaya, Gedangan Sidoarjo"
}

// {with no destructure}
// non-literals
const biodata1 = data.nama + " adalah siswa kelas " + data.kelas + " Multimedia berumur " + data.umur + " tahun, alamatnya di " + data.alamat 
// literals
const biodata2 = `${data.nama} adalah siswa kelas ${data.kelas} Multimedia berumur ${data.umur} tahun, alamatnya di ${data.alamat}`


// {with destructure & literals}
const {nama, kelas, umur, alamat} = data;
const biodata3 = `${nama} adalah siswa kelas ${kelas} Multimedia berumur ${umur} tahun, alamatnya di ${alamat}`

console.log(biodata3);


// some tips when you afraid undifined data u can do this code
// const {nama = "", kelas = 0, umur = 0, alamat = ""} = data;
