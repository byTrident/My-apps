// ADDEVENTLISTENER

// addeventlistener 2 parametre alır. Birisi Event(olay) nedir 
// 2 olarak bir function alır
let toplam=0;

function urunEkle(txt){
    const yeniUrun=document.createElement("li")
    yeniUrun.innerHTML=txt
    document.getElementById("urun").appendChild(yeniUrun)
  
}



document.getElementById("aile").addEventListener("click",function(){
    let text="Ekonomik Aile  (100  TL)"
    toplam=toplam+100;
    urunEkle(text)
})

document.getElementById("mini").addEventListener("click",function(){
    let text="Ekonomik Mini  (80 TL)"
    toplam=toplam+80;
    urunEkle(text)
})

document.getElementById("margarita").addEventListener("click",function(){
    let text="Margarita  (150 TL)"
    toplam=toplam+150;
    urunEkle(text)
})

document.getElementById("ekoMantar").addEventListener("click",function(){
    let text="Ekonomik Mantarli  (120 TL)"
    toplam=toplam+120;
    urunEkle(text)
})



document.getElementById("topla").addEventListener("click",function(){
const pizzaTutarı=document.createElement("p")
pizzaTutarı.innerHTML=toplam;
document.getElementById("tutar").appendChild(pizzaTutarı)
})