let unlockedEndings = []
let unlockedImages = [];
let cgImages = document.querySelectorAll(".cgImages");
const unlockedFromStorage = JSON.parse(localStorage.getItem("unlocked"));
const unlockedImagesFromStorage = JSON.parse(localStorage.getItem("unlockedImages"));

const full = document.querySelectorAll(".full");
console.log(full);
const fullscreen = document.querySelector("#fullScreen");

// load previous links from local storage
if(unlockedFromStorage){
    unlockedEndings = unlockedFromStorage;
}

if(unlockedImagesFromStorage){
    unlockedImages = unlockedImagesFromStorage;
}

for(let i = 0; i < unlockedEndings.length; i++){
    cgImages[i].style.backgroundImage = `url(${unlockedImages[i]})`;
    cgImages[i].addEventListener("click",function(){
        fullscreen.style.backgroundImage = `url(${unlockedImages[i]})`;
        for(let j = 0; j < full.length; j++){
            full[j].classList.remove('invisible');
        }   
    });
}

function exit(){
    for(let j = 0; j < full.length; j++){
        full[j].classList.add('invisible');
    }
}

