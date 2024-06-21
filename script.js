//1.variabel dengan let

let nama = "Khalifardy Miqdarsah";

//show data
console.log(nama);

//ubah variabel nama
nama = "miko";

console.log(nama);

//2. variabel dengan var
var nameDepan = "ragnar";

console.log(nameDepan);

//Behaviour let
let namaBelakang = "Lothbrok";
{
  let namaBelakang = "Oeratmangoen";
  console.log(namaBelakang);
}

console.log(namaBelakang);

//Behaviour var
var namaTengah = "Khalifardy";
{
  var namaTengah = "Miqdarsah";
  console.log(namaTengah);
}
console.log(namaTengah);

//3. variabel dengan const
const umur = 20;
console.log(umur);

//Data String
let dataString = "data string";

//1.escapinf sttring
let data1 = 'miko berkata"tetep asyikk"';
console.log(data1);

let data2 = "berjalan di tepi pantai,\n tertiup angin berhembus";
console.log(data2);

//2. string literal
let um = 10;
let na = "dia";

console.log(`${na} berumur ${um} tahun`);

//operasi string
let data5 = "abcdef";
console.log(data5.charAt(1));

//menyambung string
let depan = "khalifardy";
let belakang = "miqdarsah";

let namaLengkap = depan.concat(" ", belakang);
console.log(namaLengkap);

//mendaoatkan index string
console.log(namaLengkap.indexOf("a"));

//substring
console.log(namaLengkap.substring(5, 11));

//slice
console.log(namaLengkap.slice(5, 11));

//ganti string
let namabaru = namaLengkap.replace("khalifardy", "miko");
console.log(namabaru);

//lower
console.log(namabaru.toLowerCase());

//upper
console.log(namabaru.toUpperCase());

//extract data number
let dataString3 = "10";
console.log(typeof dataString3);

let dataInteger = parseInt(dataString3);
console.log(typeof dataInteger);

let dataString4 = "10.5";
let dataFloat = parseFloat(dataString4);
console.log(dataFloat);
