const gameScreen = document.querySelector("#game-screen");

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
    static hideIn(direction){
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
     * @param {Scene} next if there is no menu input a Scene object, if the scene ends in a menu input a Menu object
     * @param {Ending} end this is the ending that is unlocked when done with this scene
     */
    constructor(next, end){
        this.dialogueArray = [];
        this.currentDialogue = 0;
        this.previousDialogue;
        this.functionArray = [];
        if(next instanceof Scene){
            this.next = next;
        }
        else if(next instanceof Menu){
            this.menu = next;
        }
        else if(next == "end"){
            this.ending = end;
        }
        else {
            console.log("need to input either an Scene object or a Menu object to the constructor");
        }
    }

    /**
     * Add another dialogue option to the end
     * @param {Dialogue} dialogue add another dialogue option to dialogue array
     * @param {String} sprite this is the sprite, however please pass the name of the variable as a string
     * @param {String} showHide this is whether you want to hide or show this variables
     * @param {String} direction this is the direction the sprite will be shown in : left, center, right
     */
    addDialogue(dialogue, sprite, showHide, direction){
        this.dialogueArray.push(dialogue);
        if((sprite != undefined)&&(direction != undefined)&&(showHide == "show")){
            this.functionArray.push(`${sprite}.showIn('${direction}')`);
        }
        else if((sprite != undefined)&&(direction != undefined)&&(showHide == "hide")){
            this.functionArray.push(`${sprite}.hideIn('${direction}')`);
        }
        else if((sprite != undefined)&&(direction == undefined)&&(showHide == "hide")){
            this.functionArray.push("Sprite.hideAll()");
        }
        else{
            this.functionArray.push(function(){return "no function";})
        }
    }

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
            Scene.setScene(next);
        }
        // else if scene is a special ending
        else if (scene.end != undefined){
            console.log(end);
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
        this.previousScene = this.currentScene;
        this.currentScene = nextScene;
        // every time a new scene is set change the dialogue clicked to the new scene dialogue clicked    
        this.currentScene.renderDialogue(this.currentScene.currentDialogue); 
    }
}

//placeholder
class Ending{

}

// add the event listener to the dialogue button
dialogueBtn.addEventListener("click", function(event){
    Scene.dialogueClicked(Scene.currentScene);
})

// append the style with everything on it
document.head.appendChild(style);
