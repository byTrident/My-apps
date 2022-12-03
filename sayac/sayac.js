const arttir = document.getElementById("arttir");
const azalt = document.getElementById("azalt");
const sonuc = document.getElementById("sonuc");

let sayac = 0;

function sayacArttir(){
    sayac++;

    sonuc.innerHTML = sayac;
}

function sayacAzalt(){
    sayac--;

    sonuc.innerHTML = sayac;
}