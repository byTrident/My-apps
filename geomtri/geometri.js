const u1 = document.getElementById("u1");
const u2 = document.getElementById("u2");
const u3 = document.getElementById("u3");
const h = document.getElementById("h");

let uAlan = document.getElementById("uAlan");
let uCevre = document.getElementById("uCevre");
const k1 = document.getElementById("k1");
let kAlan = document.getElementById("kAlan");
let kCevre = document.getElementById("kCevre");
const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
let dAlan = document.getElementById("dAlan");
let dCevre = document.getElementById("dCevre");

const alan= document.getElementById("alan");
const cevre= document.getElementById("cevre")

function uAlanGoster() {
    let uAl=(u1.value * h.value)/2
    alan.innerHTML=uAl;
}

function uCevreGoster() {
    let sonuc=parseInt(u2.value)+ parseInt(u3.value)+parseInt(u1.value)
cevre.innerHTML=sonuc
}