let edwinTable = new Background("baseImages/edwinTime.png", "edwin");
let edwinBedroom = new Background("baseImages/edwinBedroom.png", "edwin");
let edwinSea = new Background("baseImages/edwinSea.png", "edwin");
let edwinChurch = new Background("baseImages/edwinChurch.png", "edwin");
let edwinForest = new Background("baseImages/forest.png", "edwin");
let glitchedForest = new Background("baseImages/forestGlitched.png", 'edwin');
let concertHallGlitched = new Background("baseImages/concertHallGlitched.png", "glassHotel");
let concertHall = new Background("baseImages/concertHall.png", "glassHotel");

let generic = new Character("NPC", "grey");

let edwin = new Character("Edwin", "brown");
let edwinMother = new Character("Mother", "black");
let edwinFather = new Character("Father", "navy");
let gaspery = new Character("Gaspery", "olive");

let edwinBase = new Sprite("cgImages/edwinBase.png");
let edwinUpset = new Sprite("cgImages/edwinUpset.png");
let edwinHappy = new Sprite("cgImages/edwinHappy.png");
let edwinFrightened = new Sprite("cgImages/edwinFrightened.png");
let edwinMotherSprite = new Sprite("cgImages/edwinMother.png");
let edwinFatherSprite = new Sprite("cgImages/edwinFather.png");
let gasperyPreistAwkward = new Sprite("cgImages/gasperyPreistAwkward.png");
let gasperyPreistSmile = new Sprite("cgImages/gasperyPreistSmile.png");
let gasperyPreistTalking = new Sprite("cgImages/gasperyPreistTalking.png");

let glitch = new Ending("First Glitch", "cgImages/cg1.png");

let scene1a;

let afterGlitch1 = new Scene(scene1a, edwinChurch);
afterGlitch1.createDialogue(edwin, "<br><br><i>I’m on the beach, kneeling and vomiting. In an attempt to ground myself, I wade into the ice cold waters of the ocean; it seeps through my clothes and into my soul, it feels like, and in the distance I see the priest—Roberts—making his way toward the church and I hurry to follow him</i>","Edwin", "edwinFrightened", "show", "left");
afterGlitch1.createDialogue(gaspery, "Are you OK? You look unwell.", "Roberts", "gasperyPreistAwkward", "show", "right");
afterGlitch1.createDialogue(edwin, "<i>There’s something off about him, I can see now. Something about the accent, or the way he’s talking to me, just gives off a wrongness I can’t pinpoint.</i>","Edwin", "edwinBase", "show", "left");
afterGlitch1.createDialogue(edwin, "Why did you say you were here again? What happened to Father Pike?");
afterGlitch1.createDialogue(gaspery, "His sister was sick. He left last night. Are you quite sure you’re well? I..err...", "Roberts");
afterGlitch1.createDialogue(edwin, "...?");
afterGlitch1.createDialogue(gaspery, "Well, I saw you walking through the forest earlier, and it looked like you saw something. Was anything amiss?", "Roberts", "gasperyPreistSmile", "show", "right");
afterGlitch1.createDialogue(edwin, "I thought I had seen... <i>Roberts gaze was too off putting. Something about him was wrong, I just couldn’t put my finger on it. I didn’t trust him.</i>");
afterGlitch1.createDialogue(edwin, "I didn’t hear any boats leave last night—or anytime in the past week, even. How did you get here, Father Roberts?");
afterGlitch1.createDialogue(gaspery, "I’m not sure how that’s relevant. I was wondering what happened back there, in the forest...?", "Roberts", "gasperyPreistTalking", "show", "right");
afterGlitch1.createDialogue(edwin, "<i>I get up to go toward the door, Roberts gets up to follow me. It feels as if he is breathing down my neck, thought Roberts must be at least a foot away.</i>", "Edwin", "gasperyPreistTalking", "hide", "right");
afterGlitch1.createDialogue(edwin, "<i>As I reach the doorway I recognize a figure in the distance; it's Father Pike and I whip around.</i>");
afterGlitch1.createDialogue(edwin, "<i>But Roberts is nowhere to be found, his existence indicated only through the open back door, swinging in the summer breeze.</i>", "Edwin", "", "hide");

let scene4 = new Scene(glitch, edwinForest);
scene4.createDialogue(edwin, "<i>It was beautiful. I loved taking long walks through the forest—the indifference of nature had a strangely calming quality to it.</i>","Edwin", "edwinHappy", "show", "center");
scene4.createDialogue(generic, "<i>bushes rustling</i>", "***", "", "hide");
scene4.createDialogue(edwin, "Who's there?", "Edwin", "edwinBase", "show", "left");
scene4.createDialogue(gaspery, "<br>Good morning. Forgive me, I didn’t mean to startle you. I’m Roberts. I’m filling in for Father Pike, the usual priest, I believe?", "???", "gasperyPreistAwkward", 'show', "right");
scene4.createDialogue(edwin, "Edwin St. Andrew. Pleasure to meet you.", "Edwin");
scene4.createDialogue(gaspery, "Likewise. Have a nice day", "Roberts");
scene4.createDialogue(edwin, "<i>I stepped forward, into the trees--</i>", "Edwin", "gasperyPreistAwkward", "hide", "right");

let scene3 = new Scene(scene4, edwinSea);
scene3.createDialogue(edwin, "<i>After that, I was lost. I had a brief period of optimism where I believed that I could be a farmer, despite never having touched a spade. I painted. I drank. I ended up in a small settlement in Caiette.</i>", "Edwin");

let scene2 = new Scene(scene3, edwinBedroom);
scene2.createDialogue(edwinFather, "Pack your bags. You’re going to Canada. I’ve already made the arrangements. And you are to stay the hell out of England!", "Father", "edwinFatherSprite", "show", "left");

let scene1 = new Scene(scene2, edwinTable);
scene1.createDialogue(edwin, "<i>If I hear one more word about her goddamned ayah...</i>", "Edwin", "edwinBase", "show", "left");
scene1.createDialogue(edwinMother, "<br>You know, I so often find myself thinking about the beauty of British India. The colors were remarkable, but the heat! So incredibly oppressive.", "Mother", "edwinMotherSprite", "show", "right");
scene1.createDialogue(edwin, "Well, that’s a bit ironic, isn’t it?", "Edwin");
scene1.createDialogue(edwinMother, "What do you mean?", "Mother");
scene1.createDialogue(edwin, "<br>A British woman, enjoying privileges gained only through conquest and violence, complaining about the ‘oppressive’ heat?", "Edwin");
scene1.createDialogue(edwinFather, "<br>Yes, well, we <i>won</i>, didn’t we? Not exactly something new. We fought, we won, India is ours. Simple as that. I’m sure the natives of England weren’t too happy twenty generations ago either, but, well, that’s life, isn’t it?", "Father", "edwinFatherSprite", "show","center");
scene1.createDialogue(edwin, "Surely we ought to strive to be a bit more civilized than the maniacal grandson of a Viking raider?", "Edwin", "edwinUpset", "show", "left");
scene1.createDialogue(generic, ". . .", "Family", "none", "hide");
scene1.createDialogue(edwinFather, "<br>Every advantage you’ve ever had in this life, Edwin, has been because you have descended from the “maniacal grandson of a Viking raider.” You’d do well to be more grateful.", "Father", "edwinFatherSprite", "show", "center");

Scene.setScene(scene1);