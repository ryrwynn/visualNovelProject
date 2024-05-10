const gameScreen = document.querySelector("#game-screen");
const time = document.querySelectorAll(".time");

const style = document.createElement("style");

const leftSprite = document.querySelector("#left-sprite");
const centerSprite = document.querySelector("#center-sprite");
const rightSprite = document.querySelector("#right-sprite");

const choice1Btn = document.querySelector("#choice1");
const choice2Btn = document.querySelector("#choice2");
const menuDiv = document.querySelector("#menu-div");

const dialogueP = document.querySelector("#dialogue-p");
const dialogueBtn = document.querySelector("#dialogue-btn");
const dialogueSpeaker = document.querySelector("#dialogue-speaker");

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
/**
 * Rest of Todo:
 * [] background image changer
 * [] cg window
 * [] sound adder?
 */

class Character {
    /**
     * constructor for a character
     * @param {Text} name name as appears in dialogue box, can be different from object name
     * @param {Text} textColor the color of text of the dialogue box when that character is speaking
     */
    constructor(name, textColor){
        this.name = name;
        this.textColor = textColor;
        // broken right now !!
        style.innerText += `.${name}-text{
          color: ${textColor}
        }`;
    }
}

class Sprite{
    /**
     * Constructor for Sprite
     * @param {String} url link to another file already in replit using "image.png"
     */
    constructor(url){
        this.url = url;
    }

    /**
     * Show the sprite using spriteObject.showIn, use the name of the sprite item you want to show
     * @param {String} direction only use left, center, right
     * @function shows in the direction that you input
     */
    showIn(direction){
        if(direction == "left"){
            leftSprite.style.backgroundImage = `url("${this.url}")`;
        }
        else if(direction == "center"){
            centerSprite.style.backgroundImage = `url("${this.url}")`;
        }
        else if(direction == "right"){
            rightSprite.style.backgroundImage = `url("${this.url}")`;
        }
        else{
            console.error("only left, center, right are allowed as inputs");
        }
    }

    /**
     * Hide the sprite, use Sprite.hideIn(direction), use the word Sprite
     * @param {left, center, right} direction only use left, center, right
     * @function hides in the direction you input
     */
    hideIn(direction){
        if(direction == "left"){
            leftSprite.style.removeProperty('background-image');
        }
        else if(direction == "center"){
            centerSprite.style.removeProperty('background-image');
        }
        else if(direction == "right"){
            rightSprite.style.removeProperty('background-image');
        }
        else{
            console.error("only left, center, right are allowed as inputs");
        }
    }

    /**
     * Hides all sprites, use Sprite.hideAll(), use the word Sprite
     * @function hides all
     */
    static hideAll(){
        leftSprite.style.removeProperty('background-image');
        centerSprite.style.removeProperty('background-image');
        rightSprite.style.removeProperty('background-image');
    }
}

class Background{
    /**
     * Constructor for Sprite
     * @param {String} url link to another file already in replit using "image.png"
     * @param {String} timePeriod
     */
    constructor(url, timePeriod){
        this.url = url;
        if((timePeriod == "edwin") || (timePeriod == "olive") || (timePeriod == "future")){
            this.timePeriod = timePeriod;
        }
        else if (timePeriod == "glassHotel"){
            this.timePeriod = "glass-hotel";
        }
        else{
            console.error(`${timePeriod} is not valid, it should be edwin, glassHotel, olive, or future - mind the upper cases`);
        }
    }

    show(){
        gameScreen.style.backgroundImage = `url("${this.url}")`;
        // change each object with time to match time period      
        for(let i = 0; i < time.length; i++){
            time[i].classList.remove('edwin-time');
            time[i].classList.remove('olive-time');
            time[i].classList.remove('glass-hotel-time');
            time[i].classList.remove('future-time');
            time[i].classList.add(`${this.timePeriod}-time`);
        }
    }
}

class Dialogue{
    /**
     * 3 input constructor with optional speaker
     * @param {Character} char only use character objects or else it will throw an error
     * @param {String} text text actually being said, can use html tags
     * @param {String} speaker the name that is displayed above the dialogue box of who is speaking, or if there is nothing here then default to character name
     */
    constructor(char, text, speaker){
        // check for right object types
        if(!(char instanceof Character)){
            console.error(`the first input, ${char}, is not valid needs to be a character object!`)
        }
        else{
            this.character = char;
            this.text = text;
            if(speaker === undefined){
                this.speaker = char.name;
            }
            else{
                this.speaker = speaker;
            }
        }
    }
}

class Menu{ 
    /**
     * constructor for menu object
     * @param {String} choice1 first onscreen text for choices, can include html tags
     * @param {Scene} scene1 name of scene it goes to if first choice is chosen
     * @param {String} choice2 second onscreen text for choices, can include html tags
     * @param {Scene} scene2 name of scene it goes to if second choice is chosen
     */
    constructor(choice1, scene1, choice2, scene2){
        // check for the right object types
        if((scene1 instanceof Scene) && (scene2 instanceof Scene)){
            this.choice1 = choice1;
            this.choice2 = choice2;
            this.scene1 = scene1;
            this.scene2 = scene2;
        }
        else{
            if(!(scene1 instanceof Scene)){
                console.error(`${scene1} is not a valid scene that exists!`);
            }
            else{
                console.error(`${scene2} is not a valid scene that exists!`);
            }
        }
    }

    /**
     * shows the menu option(to be called in scene) and changes the event listener
     */
    show(){
        menuDiv.classList.remove("invisible");
        choice1Btn.innerHTML = this.choice1;
        choice2Btn.innerHTML = this.choice2;
        let scene1 = this.scene1;
        let scene2 = this.scene2;
        choice1Btn.removeEventListener("click", function(){});
        choice2Btn.removeEventListener("click",function (){});
        choice1Btn.addEventListener("click",function(){
            Scene.setScene(scene1);
            Menu.hide();
        })
        choice2Btn.addEventListener("click", function(){
            Scene.setScene(scene2);
            Menu.hide();
        })
        // disable dialogue button
        dialogueBtn.disabled = true;
    }

    /**
     * hides all the choice options
     */
    static hide(){
        menuDiv.classList.add("invisible");
        dialogueBtn.disabled = false;
    }
}

// Scenes are things that actually appear in the screen
class Scene{
    static currentScene;
    static previousScene;
    /**
     * Constructor for scene object
     *@param {String} name;
     * @param {Scene} next if there is no menu input a Scene object, if the scene ends in a menu input a Menu object, or if it is end input a Ending object
     * @param {Background} background this is the background the scene(can not be changed)
     */
    constructor(name, next, background){
        this.name = name;
        this.dialogueArray = [];
        this.currentDialogue = 0;
        this.previousDialogue;
        this.functionArray = [];
        this.background = background;
        if(next instanceof Scene){
            this.next = next;
        }
        else if(next instanceof Menu){
            this.menu = next;
        }
        else if(next instanceof Ending){
            this.ending = next;
        }
        else {
            console.log("need to input either an Scene object or a Menu object to the constructor");
        }
    }

    /**
     * Add another dialogue option to the end
     * @param {Dialogue} dialogue add another dialogue option to dialogue array
     * @param {String} sprite this is the sprite, however please pass the name of the variable as a string, can optionally be an array of the order of sprite to be shown
     * @param {String} showHide this is whether you want to hide or show this variables can optionally be an array of all the show hide, same order as the sprite array
     * @param {String} direction this is the direction the sprite will be shown in : left, center, right
     */
    addDialogue(dialogue, sprite, showHide, direction){
        this.dialogueArray.push(dialogue);
        if((sprite instanceof Array) && (showHide instanceof Array)){
            if(sprite.length == 1){
                this.functionArray.push(`${sprite[0]}.${showHide[0]}In('${direction}')`);
            }

            else if (sprite.length == 2){
                this.functionArray.push(`${sprite[0]}.${showHide[0]}In('left');
                ${sprite[1]}.${showHide[1]}In('center');`);
            }

            else if (sprite.length == 3){
                this.functionArray.push(`${sprite[0]}.${showHide[0]}In('left');
                ${sprite[1]}.${showHide[1]}In('center');
                ${sprite[2]}.${showHide[2]}In('center');`);
            }
        }
        else if((sprite != undefined)&&(direction != undefined)){
            this.functionArray.push(`${sprite}.${showHide}In('${direction}')`);
        }
        else if((sprite != undefined)&&(direction == undefined)&&(showHide == "hide")){
            this.functionArray.push("Sprite.hideAll()");
        }
        else{
            this.functionArray.push(function(){return "no function";})
        }
    }

    /**
     * 
     * @param {Character} char character for text color
     * @param {String} text 
     * @param {String} speaker 
     * @param {String} sprite 
     * @param {String} showHide 
     * @param {String} direction 
     */
    createDialogue(char, text, speaker, sprite, showHide, direction){
        let d = new Dialogue(char, text, speaker);
        this.addDialogue(d, sprite, showHide, direction);
    }

    /**
     * go on to next dialogue in array of the scene that is passed to it
     * @param {Scene} scene this is the scene that the dialogue is coming from
     */
    static dialogueClicked(scene){
        scene.previousDialogue = scene.currentDialogue;
        scene.currentDialogue = scene.previousDialogue + 1;
        // if the dialogue array is still in index
        if(scene.currentDialogue < scene.dialogueArray.length){ 
            scene.renderDialogue(scene.currentDialogue);
            console.log("render dialogue");
        }
        else if (scene.menu != undefined ){
            scene.menu.show();
            console.log("menu rendered");
        }
        // else if the dialogue array is through, and there is a defined next scene and there is no meu
        else if(scene.next != undefined){
            Scene.setScene(scene.next);
        }
        // else if scene is a special ending
        else if (scene.ending != undefined){
            scene.ending.unlocked();
            Ending.special(scene.ending);
        }
        else{
            console.error(`did not define a menu or a next scene in ${scene}`);
        }
    }

    /**
     * Renders the dialogue that is passed as parameter
     * @param {Dialogue} cur 
     */
    renderDialogue(index){
        dialogueP.innerHTML = this.dialogueArray[index].text;
        dialogueSpeaker.innerHTML = this.dialogueArray[index].speaker;
        dialogueP.classList = `${this.dialogueArray[index].character.name}-text`;
        eval(this.functionArray[index]);
    }

    /**
     * when the end of the dialogue array is reached set current scene as old scene and change current scene
     * @param {Scene} nextScene 
     */
    static setScene(nextScene){
        Scene.previousScene = Scene.currentScene;
        Scene.currentScene = nextScene;
        Scene.currentScene.background.show();
        Sprite.hideAll();
        localStorage.setItem("currentScene", nextScene.name);
        Scene.currentScene.currentDialogue = 0;
        // every time a new scene is set change the dialogue clicked to the new scene dialogue clicked    
        Scene.currentScene.renderDialogue(Scene.currentScene.currentDialogue); 
    }

    static backClick(){
        Scene.previousScene.currentDialogue = 0;
        Scene.setScene(Scene.previousScene);
    }

    static reset(){
        eval(`Scene.setScene(scene1)`);
    }
}

//placeholder
class Ending{
    /**
     * Constructor for ending
     * @param {String} name this is the name of the ending
     * @param {String} url this is the url for the cg image
     */
    constructor(name, url){
        this.name = name;
        this.url = url;
    }

    unlocked(){
        if(!(unlockedEndings.includes(this.name))){
            unlockedEndings.push(this.name);
            // save myLeads array to local storage
            localStorage.setItem("unlocked", JSON.stringify(unlockedEndings));
            unlockedImages.push(this.url);
            localStorage.setItem("unlockedImages",JSON.stringify(unlockedImages));
        }
    }

    static special(event){
        switch(event){
            case(glitch):
                Sprite.hideAll();
                for(let i = 0; i < time.length; i ++){
                    time[i].classList.add('invisible');
                }
                glitchedForest.show()
                setTimeout(set1, 300);
                function set1(){
                    for(let i = 0; i < time.length; i ++){
                        time[i].classList.remove('invisible');
                    }
                    Scene.setScene(afterGlitch1);
                }
                break;
            case(glitch2):
                Sprite.hideAll();
                for(let i = 0; i < time.length; i ++){
                    time[i].classList.add('invisible');
                }
                concertHallGlitched.show()
                setTimeout(set2, 1000);
                function set2(){
                    for(let i = 0; i < time.length; i ++){
                        time[i].classList.remove('invisible');
                    }
                    Scene.setScene(afterGlitch2);
                }
                break;
            case(overpass):
                Scene.setScene(afterFlashback);
                break;
        }
    }
}

// add the event listener to the dialogue button
dialogueBtn.addEventListener("click", function(){
    Scene.dialogueClicked(Scene.currentScene);
})

// append the style with everything on it
document.head.appendChild(style);

/*const myFirstName = 'John'
Object.keys({myFirstName})[0]

// returns "myFirstName"
*/