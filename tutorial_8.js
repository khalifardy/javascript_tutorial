let nama_depan, nama_belakang, nama_lengkap;

document.getElementById("button_merge").onclick = function () {
  nama_depan = document.getElementById("nama_depan").value;
  nama_belakang = document.getElementById("nama_belakang").value;
  nama_lengkap = nama_depan + " " + nama_belakang;
  document.getElementById("nama_lengkap").innerHTML = nama_lengkap;
};

//document.getElementById() mendapatkan elemen berdasarkan id
//fungsi selanjutnya adalah onclick, yang akan menjalankan fungsi ketika tombol di klik
// jika value untuk mendapatkan nilai pada value
// innerHTML untuk mengganti isi dari elemen HTML
