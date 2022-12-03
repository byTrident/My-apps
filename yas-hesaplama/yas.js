const dogumTarihi = document.getElementById("dogumTarihi")
const yasHesapla = document.getElementById("yasHesapla")
const goster = document.getElementById("goster")


function YasiGoster(){
    let yil = new Date().getFullYear()
    // ParseInt => string bir degeri integer donustur
    let yas = yil - parseInt(dogumTarihi.value)
    goster.innerHTML = yas
}