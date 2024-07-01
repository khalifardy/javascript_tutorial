let angka_1, angka_2, hasil;

document.getElementById("button_jumlah").onclick = function () {
  angka_1 = document.getElementById("angka_1").value;
  angka_2 = document.getElementById("angka_2").value;
  hasil = parseInt(angka_1) + parseInt(angka_2);
  document.getElementById("hasil").textContent = hasil;
};
