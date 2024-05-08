let edwinTable = new Background("baseImages/edwinTime.png", "edwin");

let generic = new Character("NPC", "grey");

let edwin = new Character("Edwin", "brown");
let edwinMother = new Character("Mother", "black");
let edwinFather = new Character("Father", "navy");

let edwinBase = new Sprite("cgImages/edwinBase.png");
let edwinMotherSprite = new Sprite("cgImages/edwinMother.png");
let edwinFatherSprite = new Sprite("cgImages/edwinFather.png");

let scene1 = new Scene("", edwinTable);
scene1.createDialogue(edwin, "<i>If I hear one more word about her goddamned ayah...</i>", "Edwin", "edwinBase", "show", "left");
scene1.createDialogue(edwinMother, "<br>You know, I so often find myself thinking about the beauty of British India. The colors were remarkable, but the heat! So incredibly oppressive.", "Mother", "edwinMotherSprite", "show", "right");
scene1.createDialogue(edwin, "Well, that’s a bit ironic, isn’t it?", "Edwin");
scene1.createDialogue(edwinMother, "What do you mean?", "Mother");
scene1.createDialogue(edwin, "<br>A British woman, enjoying privileges gained only through conquest and violence, complaining about the ‘oppressive’ heat?", "Edwin");
scene1.createDialogue(edwinFather, "<br><br>Yes, well, we won, didn’t we? Not exactly something new. We fought, we won, India is ours. Simple as that. I’m sure the natives of England weren’t too happy twenty generations ago either, but, well, that’s life, isn’t it?", "Father", "edwinFatherSprite", "show","center");
scene1.createDialogue(edwin, "Surely we ought to strive to be a bit more civilized than the maniacal grandson of a Viking raider?", "Edwin");
scene1.createDialogue(generic, ". . .", "Family", "none", "hide");
scene1.createDialogue(edwinFather, "<br>Every advantage you’ve ever had in this life, Edwin, has been because you have descended from the “maniacal grandson of a Viking raider.” You’d do well to be more grateful.", "Father", "edwinFatherSprite", "show", "center");
scene1.createDialogue(edwinFather, "<br>Pack your bags. You’re going to Canada. I’ve already made the arrangements. And you are to stay the hell out of England!", "Father");

Scene.setScene(scene1);
