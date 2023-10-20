const lampungIntro = [
    ["Menara_siger.jpg", "perhentian magis di ujung barat Pulau Sumatra yang mempesona"],
    ["lampung-background.jpg", "Pesisir panjang dan pegunungan hijau bawah sinar matahari tropis"],
    ["budaya-lampung.jpg", "Budaya yang kaya dan adat istiadat"],
    ["festival-lampung.webp", "Festival-festival yang meriah dan tradisi-tradisi unik"]
]
const main = document.querySelector(".content main");
const caption = document.getElementsByTagName("h3")[0];
const row = document.createElement("div");
let index = 0;



// home section silder
function setIntro(index){
    const element = `<img src="/assets/images/${lampungIntro[index][0]}" alt="background lampung" class="lampung-image">
    <h4>${lampungIntro[index][1]}</h4>`
    row.innerHTML = element;
    main.insertBefore(row, caption);
}

// set html
row.classList.add("slider");
row.innerHTML = setIntro(index);
setIntro(index);
setTimeout(()=>{
    document.querySelector(".content main .slider img").classList.add("slide-out");
},4000);
setInterval(function(){
    index  = (index + 1) % lampungIntro.length;
    setIntro(index);
    document.querySelector(".content main .slider img").classList.add("slide-in");
    setTimeout(()=>{
        document.querySelector(".content main .slider img").classList.add("slide-out");
    }, 4000)
}, 5000)





    