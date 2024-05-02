let char1 = new Character("sally", "pink");

let char2 = new Character("mike","blue");

let kuromiP = new Sprite("kuromi.png");

kuromiP.showIn("left");


let trigS = new Sprite("trig.jpg");

trigS.showIn("right");


let scn1 = new Scene();
let scn2 = new Scene();
scn1.addDialogue(new Dialogue(char1, "choice 1 text 1"));
scn1.addDialogue(new Dialogue(char2, "choice 1 text 2"));
scn2.addDialogue(new Dialogue(char1, "choice 2 text 1"), "any", "hide");
scn2.addDialogue(new Dialogue(char1, "choice 2 text 2"));

let menu1 = new Menu("choice 1", scn1, "choice 2", scn2);

let scn3 = new Scene(menu1);
scn3.addDialogue(new Dialogue(char2, "first text"));
scn3.addDialogue(new Dialogue(char1,"second text"), "kuromiP", "show", "right");

Scene.setScene(scn3);
