let char1 = new Character("sally", "pink");

let char2 = new Character("mike","blue");

let kuromiP = new Sprite("kuromi.png");

kuromiP.showIn("left");

let back1 = new Background("kuromi.png", "edwin");
let back2 = new Background("trig.jpg", "olive");
let back3 = new Background("kuromi.png", "glassHotel");


let trigS = new Sprite("trig.jpg");

trigS.showIn("right");


let scn1 = new Scene("end", back1);
let scn2 = new Scene("end", back2);
scn1.addDialogue(new Dialogue(char1, "choice 1 text "));
scn1.addDialogue(new Dialogue(char2, "choice 1 text 2"));
scn2.addDialogue(new Dialogue(char1, "choice 2 text 1"), "any", "hide");
scn2.addDialogue(new Dialogue(char1, "choice 2 text 2"));

let menu1 = new Menu("choice 1", scn1, "choice 2", scn2);

let scn3 = new Scene(menu1, back3);
scn3.addDialogue(new Dialogue(char2, "first text here i want to test how long this box can go and if the aspect ratio is good so i need to keep typing l much nahayayayayau heyahosid ahhhh <i>testing out italiscs </i> <b> testing out bold </b>"));
scn3.addDialogue(new Dialogue(char1,"second text"), "kuromiP", "show", "right");

Scene.setScene(scn3);
