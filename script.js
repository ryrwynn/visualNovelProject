let edwinTable = new Background("baseImages/edwinTime.png", "edwin");
let edwinBedroom = new Background("baseImages/edwinBedroom.png", "edwin");
let edwinSea = new Background("baseImages/edwinSea.png", "edwin");
let edwinChurch = new Background("baseImages/edwinChurch.png", "edwin");
let edwinForest = new Background("baseImages/forest.png", "edwin");
let glitchedForest = new Background("baseImages/forestGlitched.png", 'edwin');

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

let concertHallGlitched = new Background("baseImages/concertHallGlitched.png", "glassHotel");
let concertHall = new Background("baseImages/concertHall.png", "glassHotel");
let coffeeHouse = new Background("baseImages/coffeeHouse.png" , "glassHotel");
let park = new Background("baseImages/park.png" , "glassHotel");
let ohioOverpass = new Background("baseImages/ohioOverpass.png" , "glassHotel");

let paul = new Character("Paul", "darkgreen");
let mirella = new Character("Mirella", "red");

let paulSweaty = new Sprite("cgImages/paulSweaty.png");
let paulBasic = new Sprite("cgImages/paulBasic.png");
let mirellaAnnoyed = new Sprite("cgImages/mirellaAnnoyed.png");
let mirellaBasic = new Sprite("cgImages/mirellaBasic.png");
let mirellaChild = new Sprite("cgImages/mirellaChild.png");
let mirellaSister = new Sprite("cgImages/mirellaSister.png");
let gasperyCasualAwkward = new Sprite("cgImages/gasperyCasualAwkward.png");
let gasperyCasualSmile = new Sprite("cgImages/gasperyCasualSmile.png");
let gasperyCasualTalking = new Sprite("cgImages/gasperyCasualTalking.png");

let glitch = new Ending("First Glitch", "cg1.png");
let glitch2 = new Ending("Second Glitch", "cg2.png")

let scene3a = new Scene("scene3a", "", park);
scene3a.createDialogue(mirella, "<i>I woke up in a daze, aware that I had walked far from that coffee house into a park sitting down on a park bench. The man from before, Gaspery, sits down next to me</i>", "Mirella", "mirellaBasic", "show", "left");


let scene2a = new Scene("scene2a", scene3a, coffeeHouse);
scene2a.createDialogue(gaspery, "So your sister, Vincent, she's the one who recorded those videos you used?", "Gaspery", "gasperyCasualSmile", "show", "center");
scene2a.createDialogue(paul, "Yeah, sometime before she passed she gave me permission to, err, use them in my performances.", "Paul", "paulSweaty", "show", "left");
scene2a.createDialogue(mirella, "<br><i>A kind of involuntary shudder seems to pass through him as he spoke. He stares right past me, his eyes blown wide, swallowing nervously, as if looking at a ghost.</i>", "Mirella", "mirellaBasic", "show", "right");
scene2a.createDialogue(mirella,"<i>Sometime before she passed? This fu-- </i>", "Mirella", "mirellaAnnoyed", "show", "right");
scene2a.createDialogue(mirella, "<i>Just- need to calm down. I take a deep breath and close my eyes. Thankfully Paul seems to have noticed.</i>", "Paul", "paulBasic", "show", "left");
scene2a.createDialogue(gaspery, "There was a moment in you video, something like an anomaly. Have you ever seen anything like it in person?");
scene2a.createDialogue(paul, "Only on LSD. Man, this one time-");
scene2a.createDialogue(mirella,"What happened to Vincent?", "Mirella", "paulSweaty", "show", "left");
scene2a.createDialogue(paul, "She fell off a ship. Around...two years ago? Two years last month.");
scene2a.createDialogue(mirella, "A ship? Like a cruise?");
scene2a.createDialogue(paul, "No. After the whole Ponzi scheme thing, well you might not know but-");
scene2a.createDialogue(mirella, "My husband was an investor. Why was she on a boat?");
scene2a.createDialogue(paul, "I don't really know. All I know is she was living at sea as a cook on some shipping vessel. We didn't keep in tough but I think, I think she was really happy.");
scene2a.createDialogue(mirella, "But how did she...?");
scene2a.createDialogue(paul, "Fell off. No one really knows. It was in bad weather; there wasn't even a body.");
scene2a.createDialogue(mirella, "<i>I take a long breath in. Paul looks down at the table, so visibly uncomfortable. One might've thought I was the one dead here.</i>","Mirella", "mirellaBasic", "show", "right");
scene2a.createDialogue(mirella, "I appreciate this conversation");

let afterGlitch2 = new Scene("afterGlitch2", scene2a, concertHall);
afterGlitch2.createDialogue(generic, "Backstage, Mirella Kessler waits to talk to Paul. His half-sister, Vincent, vanished off the face of the Earth after her husband was revealed to be the head of a 20 billion dollar Ponzi scheme.", "Narrator", "mirellaBasic", "show", "right");
afterGlitch2.createDialogue(generic, "<br>Mirella and Vincent had been close until Mirella’s husband had killed himself due to financial ruin after the scheme collapsed. Vincent had somehow turned untraceable—perhaps in an attempt to escape her old life—so Mirella had to resort to stalking her family instead. Her search had led her to Paul, who had apparently made a name for himself as an abstract composer.", "Narrator");
afterGlitch2.createDialogue(mirella, "<i>I look around backstage and see a middle aged man, who I guess must also been waiting for Paul.</i>", "Mirella", "gasperyCasualSmile", "show", "center");
afterGlitch2.createDialogue(mirella, "<i>Paul finally got arrived backstage. We shook hands as he introduced himself.</i>", "Mirella", "paulBasic", "show", "left");
afterGlitch2.createDialogue(gaspery, "Gaspery Roberts. I loved your show.", "???");
afterGlitch2.createDialogue(paul, "Thank you! It's always great to meet a fan.");
afterGlitch2.createDialogue(mirella, "<i>I watch Paul put sanitizer on his hand with an apologetic smile,  weird</i>");
afterGlitch2.createDialogue(paul, "It’s nothing personal. I’ve just been antsy ‘cause of this whole Wuhan thing", "Paul", "paulSweaty", "show", "left");
afterGlitch2.createDialogue(mirella, "<i>Gaspery smiled at Paul kindly. It looked similar to the way teachers look at students they plan to use as “their favorite ‘no.’” He had a weird accent, but I couldn’t for the life of her figure out where it was from.</i>", "Mirella", "gasperyCasualAwkward", "show", "center");
afterGlitch2.createDialogue(gaspery, "No worries. Fomites aren't a major mode of transmission of Covid-19, anyways.");
afterGlitch2.createDialogue(mirella, "<i>Fomites? Covid-19? What the hell was this guy talking about?", "Mirella", "gasperyCasualSmile", "show", "center");
afterGlitch2.createDialogue(gaspery, "Oh, right, it's only January");
afterGlitch2.createDialogue(mirella, "???");
afterGlitch2.createDialogue(gaspery, "*Ehem*, anyways, Paul, could I maybe ask you a couple quick questions about your performance?", "Gaspery", "gasperyCasualTalking", "show", "center");
afterGlitch2.createDialogue(paul, "Of course? And you...?", "Paul", "gasperyCasualSmile", "show", "center");
afterGlitch2.createDialogue(mirella, "Mirella Kessler. I was friends with you sister.");
afterGlitch2.createDialogue(paul, "...", "Paul", "paulSweaty", "show", "left");
afterGlitch2.createDialogue(paul, "Of course. Why don't we, uh, get a drink", "Paul", "paulBasic", "show", "left");

let scene1a = new Scene("scene1a", glitch2, concertHall);
scene1a.createDialogue(generic, "<br>Paul Smith, sometimes known as ‘musical genius,’ or, on a bad day, ‘recovering addict,’ sits atop a stage, speaking into a microphone and sweating from the overhead lights. He presses Play on his laptop.", "Narrator", "paulSweaty", "show", "left");

let afterGlitch1 = new Scene("afterGlitch1", scene1a, edwinChurch);
afterGlitch1.createDialogue(edwin, "<br><i>I’m on the beach, kneeling and vomiting. In an attempt to ground myself, I wade into the ice cold waters of the ocean; it seeps through my clothes and into my soul, it feels like, and in the distance I see the priest—Roberts—making his way toward the church and I hurry to follow him</i>","Edwin", "edwinFrightened", "show", "left");
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

let scene4 = new Scene("scene4", glitch, edwinForest);
scene4.createDialogue(edwin, "<i>It was beautiful. I loved taking long walks through the forest—the indifference of nature had a strangely calming quality to it.</i>","Edwin", "edwinHappy", "show", "center");
scene4.createDialogue(generic, "<i>bushes rustling</i>", "***", "", "hide");
scene4.createDialogue(edwin, "Who's there?", "Edwin", "edwinBase", "show", "left");
scene4.createDialogue(gaspery, "<br>Good morning. Forgive me, I didn’t mean to startle you. I’m Roberts. I’m filling in for Father Pike, the usual priest, I believe?", "???", "gasperyPreistAwkward", 'show', "right");
scene4.createDialogue(edwin, "Edwin St. Andrew. Pleasure to meet you.", "Edwin");
scene4.createDialogue(gaspery, "Likewise. Have a nice day", "Roberts");
scene4.createDialogue(edwin, "<i>I stepped forward, into the trees--</i>", "Edwin", "gasperyPreistAwkward", "hide", "right");

let scene3 = new Scene("scene3", scene4, edwinSea);
scene3.createDialogue(edwin, "<i>After that, I was lost. I had a brief period of optimism where I believed that I could be a farmer, despite never having touched a spade. I painted. I drank. I ended up in a small settlement in Caiette.</i>", "Edwin");

let scene2 = new Scene("scene2", scene3, edwinBedroom);
scene2.createDialogue(edwinFather, "Pack your bags. You’re going to Canada. I’ve already made the arrangements. And you are to stay the hell out of England!", "Father", "edwinFatherSprite", "show", "left");

let scene1 = new Scene("scene1", scene2, edwinTable);
scene1.createDialogue(edwin, "<i>If I hear one more word about her goddamned ayah...</i>", "Edwin", "edwinBase", "show", "left");
scene1.createDialogue(edwinMother, "<br>You know, I so often find myself thinking about the beauty of British India. The colors were remarkable, but the heat! So incredibly oppressive.", "Mother", "edwinMotherSprite", "show", "right");
scene1.createDialogue(edwin, "Well, that’s a bit ironic, isn’t it?", "Edwin");
scene1.createDialogue(edwinMother, "What do you mean?", "Mother");
scene1.createDialogue(edwin, "<br>A British woman, enjoying privileges gained only through conquest and violence, complaining about the ‘oppressive’ heat?", "Edwin");
scene1.createDialogue(edwinFather, "<br>Yes, well, we <i>won</i>, didn’t we? Not exactly something new. We fought, we won, India is ours. Simple as that. I’m sure the natives of England weren’t too happy twenty generations ago either, but, well, that’s life, isn’t it?", "Father", "edwinFatherSprite", "show","center");
scene1.createDialogue(edwin, "Surely we ought to strive to be a bit more civilized than the maniacal grandson of a Viking raider?", "Edwin", "edwinUpset", "show", "left");
scene1.createDialogue(generic, ". . .", "Family", "none", "hide");
scene1.createDialogue(edwinFather, "<br>Every advantage you’ve ever had in this life, Edwin, has been because you have descended from the “maniacal grandson of a Viking raider.” You’d do well to be more grateful.", "Father", "edwinFatherSprite", "show", "center");

if(localStorage.getItem("currentScene")){
    eval(`Scene.setScene(${localStorage.getItem("currentScene")})`);
}
else{
    Scene.previousScene = scene1;
    Scene.setScene(scene1a);
}
