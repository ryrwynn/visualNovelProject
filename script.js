let char1 = new Character("sally", "red");

let char2 = new Character("mike","blue");

let spr1 = new Sprite("kuromi.png");

spr1.showIn("left");


let spr2 = new Sprite("trig.jpg");

spr2.showIn("right");


let scn1 = new Scene();
let scn2 = new Scene();
scn1.addDialogue(new Dialogue(char1, "choice 1 text 1"));
scn1.addDialogue(new Dialogue(char2, "choice 1 text 2"));
scn2.addDialogue(new Dialogue(char1, "choice 2 text 1"));
scn2.addDialogue(new Dialogue(char1, "choice 2 text 2"));

let menu1 = new Menu("choice 1", scn1, "choice 2", scn2);

let scn3 = new Scene(menu1);
scn3.addDialogue(new Dialogue(char2, "first text"));
scn3.addDialogue(new Dialogue(char1,"second text"));

Scene.setScene(scn3);

dialogueBtn.addEventListener("click", function(event){
    Scene.dialogueClicked(Scene.currentScene);
})
