let unlockedEndings = []
let unlockedImages = [];
const unlockedFromStorage = JSON.parse(localStorage.getItem("unlocked"));
const unlockedImagesFromStorage = JSON.parse(localStorage.getItem("unlockedImages"));

// load previous links from local storage
if(unlockedFromStorage){
    unlockedEndings = unlockedFromStorage;
}

if(unlockedImagesFromStorage){
    unlockedImages = unlockedImagesFromStorage;
}

