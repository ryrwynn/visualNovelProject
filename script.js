let edwinTable = new Background("baseImages/edwinTime.png", "edwin");
let edwinBedroom = new Background("baseImages/edwinBedroom.png", "edwin");
let edwinSea = new Background("baseImages/edwinSea.png", "edwin");
let edwinChurch = new Background("baseImages/edwinChurch.png", "edwin");
let edwinForest = new Background("baseImages/forest.png", "edwin");
let glitchedForest = new Background("baseImages/forestGlitched.png", 'edwin');

let generic = new Character("NPC", "grey");

let edwin = new Character("Edwin", "brown");
let edwinMother = new Character("Mother", "brown");
let edwinFather = new Character("Father", "brown");

let paul = new Character("Paul", "darkgreen");
let mirella = new Character("Mirella", "darkgreen");

let olive = new Character("Olive", "olive");
let husband = new Character("Husband", "olive");
let arretta = new Character("Arretta", "olive");

let gaspery = new Character("Gaspery", "navy");
let zoey = new Character("Zoey", "navy");
let natalie = new Character("Natalie", "navy");
let ephrem = new Character("Ephrem", "navy");

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

let paulSweaty = new Sprite("cgImages/paulSweaty.png");
let paulBasic = new Sprite("cgImages/paulBasic.png");
let mirellaAnnoyed = new Sprite("cgImages/mirellaAnnoyed.png");
let mirellaBasic = new Sprite("cgImages/mirellaBasic.png");
let mirellaChild = new Sprite("cgImages/mirellaChild.png");
let mirellaSister = new Sprite("cgImages/mirellaSister.png");
let gasperyCasualAwkward = new Sprite("cgImages/gasperyCasualAwkward.png");
let gasperyCasualSmile = new Sprite("cgImages/gasperyCasualSmile.png");
let gasperyCasualTalking = new Sprite("cgImages/gasperyCasualTalking.png");
let gasperyBloodTalking = new Sprite("cgImages/gasperyBloodTalking.png");

let hotelRoom = new Background("baseImages/hotel.png", "olive");
let airport = new Background("baseImages/airport.png", "olive");
let nightCityOld = new Background("baseImages/nightCityOld", "future");
let office = new Background("baseImages/office.png", "future");
let parkOlive = new Background("baseImages/park.png", "olive");
let lectureHall = new Background("baseImages/lectureHall.png", "olive");
let airportSunset = new Background("baseImages;airportSunset.png", "olive");
let bookstore = new Background("baseImages/bookstore.png", "olive");
let hotelFuture = new Background("baseImages/hotel.png", "future");
let vincentForest = new Background("baseImages/forest.png", "glassHotel");
let prison = new Background("baseImage/prison.png", "glassHotel");
let farm = new Background("baseImages/farm.png", "future");

let oliveBasic = new Sprite("cgImages/oliveBasic.png");
let oliveTalking = new Sprite("cgImages/oliveTalking.png");
let oliveAnnoyed = new Sprite("cgImages/oliveAnnoyed.png");
let arrettaSprite = new Sprite("cgImages/arretta.png");
let zoeyScience = new Sprite("cgImages/zoeyScience.png");
let zoeyCasual = new Sprite("cgImages/zoeyCasual.png");
let gasperyLoser = new Sprite("cgImages/gasperyLoser.png");
let gasperyOldSad = new Sprite("cgImages/gasperyOldSad.png");
let gasperyOld = new Sprite("cgImages/gasperyOld.png");
let ephremSprite = new Sprite("cgImages/ephrem.png");
let husbandSprite = new Sprite("cgImages/husband.png");
let natalieSprite = new Sprite("cgImages/Natalie.png");
let burr = new Sprite("cgImages/burr.png");
let femaleNpc = new Sprite("cgImages/femaleNpc");
let gasperySuitAwkward = new Sprite("cgImages/gasperySuitAwkward.png");
let gasperySuitSmile = new Sprite("cgImages/gasperySuitSmile.png");
let gasperySuitTalking = new Sprite("cgImages/gasperySuitTalking.png");
let gasperySuitSad = new Sprite("cgImages/gasperySuitSad.png")
let vincentChild = new Sprite("cgImages/vincentChild.png");
let edwinOld = new Sprite("cgImages/edwinOld.png");
let gasperyPrisonSad = new Sprite("cgImages/gasperyPrisonSad.png");
let hazeltonSprite = new Sprite("cgImages/hazelton.png");
let gasperyPrisonSmile = new Sprite("cgImages/gasperyPrisonSmile.png");

let end = new Background("baseImage/end.png", "future");

let glitch = new Ending("First Glitch", "glitch1.png");
let glitch2 = new Ending("First Glitch", "glitch1.png");
let overpass = new Ending("The Underpass", "underpass.png");
let stagnation = new Ending("Stagnation", "stagnation.png");
let alcoholic = new Ending("Dimming Stars", "dim.png");
let prisonSad = new Ending("Get Out", "getOut.png");
let trueEd = new Ending("Sea of Tranquility", "trueEd.png");

let right3d = new Scene("right3d", trueEd, airport);
right3d.createDialogue(gaspery, "<i>I sit cross legged on the ground of the Oklahoma City airship terminal, playing songs Talia had taught me and a lullaby I had written for her.</i>", "Gaspery", "gasperyOld", "show", "center");
right3d.createDialogue(gaspery, "<i>At some point, it happened. There was Olive Llewellyn, on her way to an interview. A young man, anxious and flighty, had just stepped out of a broom closet. The warp in the fabric of the world intensified, rippling in the same way it already had a hundred times--</i>", "Gaspery", "gasperySuitSmile","show", "right");
right3d.createDialogue(gaspery, "<i>--lilting notes on my violin as I desperately clung to Talia’s lullaby, bittersweet and beautiful, the deafening whoosh of an airship falling into the sky, the afternoon sun penetrating through, setting green leaves aglow--</i>", "Gaspery", "gasperySuitSmile", "hide","right");
right3d.createDialogue(gaspery, "<i>--as I from the present met my younger self from the future, another Gaspery somewhere else in the timeline existed, by the tree in 1912, 1994, Edwin, Vincent--</i>");
right3d.createDialogue(gaspery, "<i>The man from the utility closet had neared me.</i>", "Gaspery", "gasperySuitSmile", "show", "left");
right3d.createDialogue(gaspery, "Excuse me, Alan Sami? I’m conducting research for a music historian and I was wondering if you’d let me buy you lunch.");
right3d.createDialogue(gaspery, "<i>It was me, with my notably discordant accent.</i>", "Alan Sami");
right3d.createDialogue(gaspery, "Alright, son.", "Alan Sami");
right3d.createDialogue(gaspery, "<i>I would keep him off balance. I would quote Shakespear at him him because I knew he didn't know his Shakespeare yet. I would all him son because he hates being called son, and his irritation would distract him.*</i>", "Alan Sami");
right3d.createDialogue(gaspery, "<i>In the end, no one had noticed that I was the one who had caused the anomaly. My existence in multiple points of time had nicked the fabric of the world, and now that I had met myself again, the stray thread tucked itself back in.</i>", "Alan Sami");
right3d.createDialogue(gaspery, "Why did you decide to collect money playing the violin here?");
right3d.createDialogue(gaspery, "I wasn’t playing for money at all, people would just throw it at me. I figured if I put my hat upside down there, at least all of it’d land in the same place.” He fidgets and doesn’t seem to be truly listening.", "Alan Sami");
right3d.createDialogue(gaspery, "Would you mind telling me what you do when you’re not playing the violin?");
right3d.createDialogue(gaspery,"Well, I walk my dog around the city. It’s always busy here, I suppose that’s a delight. Me and Odio, we stand like tired stones in a riverbed. Everywhere, people move around us, so fast, going so far.", "Alan Sami");
right3d.createDialogue(gaspery, "Thank you for talking with me", "Gaspery", "gasperySuitSmile", "hide", "left");
right3d.createDialogue(gaspery, "<i>But they don’t know that I’ve already traveled so, so far, and that I wish to move no further.</i>", "Gaspery");

let right3c = new Scene("right3c", right3d, farm);
right3c.createDialogue(gaspery, "<i>Amber sun washes over the wooden walls of an old-fashioned style room, painting the room in a sepia veil. It feels as I’ve been transported into a different time, and I suspect I have, but not into the past.</i>", "Gaspery", "gasperyPrisonSmile", "show", "right");
right3c.createDialogue(zoey, "I’ve taken you to the year 2172. You should settle down and, you know, maybe get to know the neighbors.", "Zoey", "zoeyCasual", "show", "left");
right3c.createDialogue(gaspery, "Zoey… But, how? I mean, thank you.");
right3c.createDialogue(gaspery, "<i>But instead she embraces me, for the first time maybe since we were kids, and for the last time in my life.</i>");
right3c.createDialogue(zoey, "I don’t know if I’ll see you again.");
right3c.createDialogue(gaspery, "<i>And she vanishes, leaving me here bleeding and bewildered.</i>", "Gaspery", "zoeyCasual", "hide", "left");
right3c.createDialogue(gaspery, "<i>Zoey payed the owners of the house a grand enough sum to allow me to continue to live my life out here. It was a farm, owned by an elderly couple who eagerly helped me with all my needs.</i>", "Gaspery", "gasperyCasualSmile", "show", "left");
right3c.createDialogue(gaspery, "In time, my health improves. New technology had healed my heart, and they had even found me a plastic surgeon to change my face to fit my new, forged identity on paper.");
right3c.createDialogue(gaspery, "It was a new face, and a familiar one.*");
right3c.createDialogue(gaspery, "I picked up some new hobbies as well. The old couple gifted me a violin and offered me violin lessons with one of our neighbors, Lina.");
right3c.createDialogue(gaspery, "That day we drove over to her house, I realized why Zoey had suggested I meet my neighbors.");
right3c.createDialogue(natalie, "Hello, Gaspery.", "Talia", "natalieSprite", "show", "right");
right3c.createDialogue(gaspery, "<i>We spent many evenings together on the porch, between our violins.</i>");
right3c.createDialogue(gaspery, "How did you end up here?");
right3c.createDialogue(natalie, "Zoey came and took me away with her, to the Far Colonies. She said the Time Institute would come after me, that it wasn’t safe.", "Talia");
right3c.createDialogue(gaspery, "<i>She had an air of peace and content about her. Tan, sunkissed skin, and a dreamy gaze that settled on the stretches of farmland around us, the chin of the dog, Odio, resting on her lap.</i>");
right3c.createDialogue(natalie, "Something about me repeating classified information.", "Talia");
right3c.createDialogue(gaspery, "You did do that. I had warned you, hadn’t I");
right3c.createDialogue(gaspery,"<i>But we spoke lightly for it was all in the past. </i>");
right3c.createDialogue(gaspery, "<i>For presently, all it is is us, the nights together on the porch, when we cook together, walk the fields with our Odio, listening to the sound of airships ascending to the moon like fireflies.</i>");
right3c.createDialogue(gaspery, "What them, those intelligent people at the Time Institute, had failed to realize was that even if it all was a simulation, the correct response would be: <i>So what?</i>");
right3c.createDialogue(gaspery, "<i>We were married within the year. During all of it, all of the blissful, picturesque days on the farm, I knew it was coming. I knew it, but I did not love her any less.</i>");
right3c.createDialogue(gaspery, "<i>And one day</i>", "Gaspery", "natalieSprite", "hide", "right");
right3c.createDialogue(gaspery, "<br.Quietly<br>in the night<br>of an aneurysm when she was seventy-five");
right3c.createDialogue(gaspery, "I moved through the motions of our everyday life for some time afterwards, delaying my predetermined steps.", "Gaspery", "gasperyOld", "show", "center");
right3c.createDialogue(gaspery, "The porch still glowed from the violently colored sunsets even as they slipped into deeper evening hues. Maybe it would be wrong to call it ‘predetermined’");
right3c.createDialogue(gaspery, "I think I simply happened to glimpse the precognition of the world as it ran its computer code, now chained to the resigned agony of knowing.");
right3c.createDialogue(gaspery, "And anyways, I had begun to miss the company of people.");

let right3b = new Scene("right3b", right3c, prison);
right3b.createDialogue(gaspery, "The Time Institute brings breakers of its rules to a different time period, frames them for a crime, and allows the government of that era to spend the money and resources on housing them.", "Gaspery", "gasperyPrisonSmile", "show", "center");
right3b.createDialogue(gaspery, "At first, prison is a strange sensation. I feel like I am myself, five years ago, living listlessly, aimlessly.");
right3b.createDialogue(gaspery, "I spend my days reading Shakespeare that was missing from my education previously. My bunkmate is talkative, overly so, but not bad company. He carries the aura of someone who still holds hope in the future.");
right3b.createDialogue(gaspery, "I spent an indistinguishable day, for they blurred and bled into each other, scratching out words in the paint above my bedpost.");
right3b.createDialogue(generic, "No stars burn forever, huh? I like that. Power of positive thinking.", "Hazelton", "hazeltonSprite", "show", "left");
right3b.createDialogue(gaspery, "My bunkmate is talkative, overly so, but not bad company. He carries the aura of someone who still holds hope in the future. But he would have had to seen the future to know what I meant, how a whole world could fall to pieces over an illness, how his life had crumbled to dust.");
right3b.createDialogue(generic, "You know I keep meaning to tell you this, but you know you're talking out loud right.", "Hazelton");
right3b.createDialogue(gaspery, "WHAT.", "Gaspery", "hazeltonSprite", "hide", "left");
right3b.createDialogue(gaspery, "Decades pass.");
right3b.createDialogue(gaspery, "The same, grey walls. ");
right3b.createDialogue(gaspery, "I am diagnosed with some heart trouble, I’m not quite sure what, but the kind that is deadly in this time period. They’ve moved me to the hospital wing of the prison facility and my view is white walls, white cloaks moving about me, and needles.");
right3b.createDialogue(gaspery, "A knife slits the thin skin over my wrist one day and--");
right3b.createDialogue(gaspery, "I need you to work with me here--", "Zoey", "zoeyCasual", "show", "left");
right3b.createDialogue(gaspery, "<i>She removes the tracker in my wrist, places a new tracker under my tongue, and presses a familiar device into my hand--</i>");


let right3a = new Scene("right3a", right3b, ohioOverpass);
right3a.createDialogue(gaspery, "<i>And I finally arrive in my final destination. Where I was always going to end up. 2000 Ohio.</i>", "Gaspery", "gasperySuitSmile", "show", "center");
right3b.createDialogue(zoey, "Gaspery...", "Zoey", "zoeyCasual", "show", "left");
right3b.createDialogue(ephrem, "I’m sure you know what procedure calls for now Gaspery.", "Ephrem", "ephremSprite", "show", "right");
right3b.createDialogue(gaspery, "I do.");
right3b.createDialogue(ephrem, "Check Edwin's file, Zoey.");
right3b.createDialogue(zoey, "…He died 48 hours later than in the original timeline, from the pandemic.");
right3b.createDialogue(ephrem, "See, Gaspery? There was no point in disobeying the rules. He died anyways.");
right3b.createDialogue(gaspery, "<i>He seems disappointed but apathetic. Zoey looks at me as if hope has been ripped from her soul.</i>");
right3b.createDialogue(gaspery, "There was a point, Ephrem, you simply cannot see it. I would do it again without regrets.","Ephrem", "zoeyCasual", "hide", "left");
right3a.createDialogue(gaspery, "<i>Something hits the back of my head and I awake to find myself holding a gun. A man dead in front of me.</i>", "Gaspery", "gasperyBloodTalking", "show", "center");
right3a.createDialogue(gaspery, "<i>The police are here</i>", "Gaspery", "ephremSprite", "hide", "right");

let right3 = new Scene("right3", right3a, edwinBedroom);
right3.createDialogue(gaspery, "I’m here to tell you something. Do you remember what happened in the forest at Caiette?", "Gaspery", "gasperySuitSmile", "show", "right");
right3.createDialogue(edwin, "It was just another hallucination, was it not?", "Edwin", "edwinOld", "show","left");
right3.createDialogue(gaspery, "What you saw was real, a corruption of time, albeit I can’t really explain, but I can assure you that it was real. I’m a time traveler.");
right3.createDialogue(gaspery, "You’re not insane, Mr. Edwin, at least not at that moment. I hope that brings you some ease.");
right3.createDialogue(edwin, "<i>I was hesitant to believe it. He seemed crazier than me. But it did relieve me, as he said.</i>");
right3.createDialogue(edwin, "Thank you for telling me.");
right3.createDialogue(gaspery, "I must go now-- an errand, or, appointment I must go to.");
right3.createDialogue(edwin, "The man walks away, through the gates, but it feels as if he has just vanished from my world through the soft rays of afternoon sun.");
right3.createDialogue(edwin, "<i>I take in the world around me, the slight edge of chill on the air as the Earth’s northern hemisphere cools down into night. The garden around me erupts in color for the first time. Here, I think, now, I might eventually be satisfied.</i>");

let wrong3a = new Scene("wrong3a", prisonSad, prison);
wrong3a.createDialogue(gaspery, "The prison walls, made of rigid concrete, should have stayed the same shape. Yet everyday they encroach further in, pervading into my space and mind.", "Gaspery", "gasperyPrisonSad", "show", "center");
wrong3a.createDialogue(gaspery, "No matter what I did, I would have ended up in prison regardless. The Time Institute showed me Edwin’s file after I returned. He had died 48 hours earlier than he did in the original timeline in a struggle over taking his medication.");
wrong3a.createDialogue(gaspery, "I am haunted by guilt. Maybe it was he who saw ghosts, but now I am the one who sees his shadowy being in the corner of my cell, watching, always watching.");
wrong3a.createDialogue(gaspery, "I should have done something, something to help him. I've become something less than human, and he won't forgive me for it.");
wrong3a.createDialogue(gaspery, "Get out my mind.");
wrong3a.createDialogue(gaspery, "Get out my mind.");
wrong3a.createDialogue(gaspery, "Get out my mind.");
wrong3a.createDialogue(gaspery, "Get out my mind.");
wrong3a.createDialogue(gaspery, "Get out my mind.");
wrong3a.createDialogue(gaspery, "GET OUT OF MY MIND.");

let wrong3 = new Scene("wrong3", wrong3a, edwinBedroom);
wrong3.createDialogue(edwin, "It can't be", "Edwin", "edwinOld", "show","left");
wrong3.createDialogue(gaspery, "<i>I must not get distracted. I resolve to complete my investigation of the corruption and return to the Time Institute with valuable information.</i>", "Gaspery", "gasperySuitSmile", "show", "right");
wrong3.createDialogue(gaspery, "Do you remember me? You met me at Caiette, six years ago.");
wrong3.createDialogue(edwin, "...I- Father Roberts?");
wrong3.createDialogue(gaspery, "Yes, Father Roberts, that’s me. Do you remember what you saw in the forest, at the maple tree back then?");
wrong3.createDialogue(edwin, "You can’t be real. No one there knows who Father Roberts is. You arrived on a ship that didn’t <i>exist.</i>");
wrong3.createDialogue(gaspery, "<i>Edwin’s voice raises to a labored shout. His bloodshot eyes are laced with insanity and he grabs my shoulders, his war-hardened fingers clawing into me.</i>");
wrong3.createDialogue(edwin, "How were you in Caiette, Father Roberts? You seem so real but so impossible.");
wrong3.createDialogue(gaspery, "I… I don’t know. There was no boat. You won’t believe me if I tell you.");
wrong3.createDialogue(edwin, "Then I am crazy.");
wrong3.createDialogue(gaspery, "<i> A hint of relief and resignation in his voice, as if admitting it had set him free. </i>");
wrong3.createDialogue(gaspery, "I-I should go.");
wrong3.createDialogue(gaspery, "<i>Rattled, I break the hold of Edwin’s deranged stare and program my watch to take me back to the Time Institute.</i>");
wrong3.createDialogue(gaspery, "<i>The watch clicks and the still garden slips away from me, transporting me back to my time.</i>", "Gaspery", "gasperySuitSmile", "hide", "right");
wrong3.createDialogue(edwin, "<i>I’m still reeling. The man in front of me is now gone. Behind me, the garden gate creaks open and I hear my mother’s hesitant footsteps pad on the lawn towards me.</i>");
wrong3.createDialogue(edwinMother, "I heard shouting from inside. Are you alright, my dear?", "Mother", "edwinMotherSprite", "show", "center");
wrong3.createDialogue(edwin, "<i>I can’t turn to face her, but my hands, outstretched, still grapple at an imaginary being.</i>");
wrong3.createDialogue(edwinMother, "Edwin, oh… Edwin.");

let menu3 = new Menu("I’m a time traveler.", right3,"Do you remember what you saw in the forest, at the maple tree back then?", wrong3);

let scene2e = new Scene("scene2e", menu3, edwinBedroom);
scene2e.createDialogue(edwin, "<i>I spend my days at my family’s estate, tending to the garden, reading in the library, and occasionally sitting down for dinners.</i>", "Edwin", "edwinOld", "show", "left");
scene2e.createDialogue(edwin, "<i>I am something of a war hero yet a ghost. After losing my beloved, Gilbert on the war front, I have started talking to his ghost as well.</i>");
scene2e.createDialogue(edwin, "<i>Mother and father no longer know how to regard me; they say I’ve changed. I don’t know how to answer that. Was I changed, or was I left behind on that battlefield, now an empty, dysfunctional husk?</i>");
scene2e.createDialogue(edwin, "<i>I stay awake for as many days as I can, avoiding sleep, because when it eventually comes, it is slew of bullets and blood and death and the thunderous cacophony of war.</i>");
scene2e.createDialogue(edwin, "<i>My brother and I sit in the garden every day for hours. With the sun on our backs and the wind weaving through the summer’s peonies, he is here again with me.,/i>");
scene2e.createDialogue(edwin, "<i>A figure waits for me on the terrace bench one afternoon. Is it Gilbert? But when sit down beside him, an unfamiliar man faces me.</i>", "Edwin", "gasperySuitSmile", "show", "right");
scene2e.createDialogue(edwin, "You’re not a ghost. You’re not my hallucination.");

let scene1e = new Scene("scene1e", scene2e, office);
scene1e.createDialogue(gaspery, "<i>I get sucked back to my time as soon as I leave the room</i>", "Gaspery", "gasperySuitSmile", "show", "left");
scene1e.createDialogue(zoey, "What have you done, Gaspery...", "Zoey", "zoeyScience", "show", "right");
scene1e.createDialogue(gaspery, "What do you mean?");
scene1e.createDialogue(zoey, "Arretta told the Institute already..");
scene1e.createDialogue(gaspery, "<i>Zoey’s voice shakes and she looks hopeless. A flood of guilt consumes me for a second and I’m thrown back into the old me, irresponsible and a burden.</i>", "Gaspery", "gasperySuitSad", "show", "left");
scene1e.createDialogue(zoey, "You know what the consequences are for interfering with the timeline. You’re lucky that Olive Llewellyn's survival of the pandemic didn’t have a noticeable effect on the Time Institute, but they aren’t going to let you walk away from this.");
scene1e.createDialogue(gaspery, "<i>My sister looks broken and disbelieving and pleading.</i>");
scene1e.createDialogue(gaspery, "There’s something else I need to check. I need to confirm something with Edwin St. Andrew, in the year 1918.");
scene1e.createDialogue(gaspery, "1918, shortly before he is sent to the mental asylum where he dies.");
scene1e.createDialogue(zoey, "1918? That’s six years after the glitch-- Gaspery, you can’t go now--");
scene1e.createDialogue(gaspery, "If I can get more definitive evidence, the Time Institute might give me a more favorable sentence. Zoey, let me go, please.");
scene1e.createDialogue(zoey, "I’m… overriding the decommissioning order on you and plugging in the coordinates. But… I can’t protect you if you come back.");
scene1e.createDialogue(gaspery, "<i>She turns to me with a world of pain in her eyes, a silent plea for me to never return, to stay lost in time, running from the reaches of the Time Institute.</i>");

let right2 = new Scene("right2", scene1e, bookstore);
right2.createDialogue(gaspery, "This will sound silly, but my editor over at Contigencies Magazine likes me to end interviews with a fun question.*", "Gaspery", "gasperySuitAwkward", "show", "right");
right2.createDialogue(gaspery, "So this is kind of a question about destiny. Barring some unforeseen catastrophe, assuming that our technology continues to advance, we'll probably have time travel in the next century.*");
right2.createDialogue(olive, "Hey are you okay, you're turning pale", "Olive", "oliveBasic", "show", "left");
right2.createDialogue(gaspery, "If a time traveler appeared before you and told you to drop everything and go home immediately, would you do it?*");
right2.createDialogue(olive, "How would I know you were a time traveler.*");
right2.createDialogue(gaspery, "Well for example, suppose this person were an adult. Now suppose this person, this adult in his thirties, had a name you'd made up for a book that you only published five years ago.");
right2.createDialogue(arretta, "How's it going in here?", "Aretta","arettaSprite", "show", "center");
right2.createDialogue(gaspery, "Perfect!");
right2.createDialogue(olive, "You could've change your name..");
right2.createDialogue(gaspery, "I could have, but I haven't.");
right2.createDialogue(olive, "I'm heading home.", "Olive", "gasperySuitAwkward", "hide", "right");
right2.createDialogue(arretta, "But your tour-");

let wrong2a = new Scene("wrong2a", alcoholic, hotelFuture);
wrong2a.createDialogue(gaspery, "<i>I quit the Time Institute after that.</i>", "Gaspery", "gasperyLoser", "show", "center");
wrong2a.createDialogue(natalie, "You're back", "Natalie", "natalieSprite", "show", "right");
wrong2a.createDialogue(gaspery, "I guess I did.");
wrong2a.createDialogue(natalie, "Need a drink?");
wrong2a.createDialogue(gaspery, "Yes, please");
wrong2a.createDialogue(gaspery, "<i>I drink the night away, and the day after that. Eventually Natalie tries to stop me, but what can she do. I'm a grown adult, capable of making my own decisions- but I still chose to ignore Ol-</i>", "Gaspery", "natalieSprite", "show", "right");
wrong2a.createDialogue(gaspery, "<i>And I sat in the hotel room, night after night. Zoey sends me a small stipend, maybe guilt. I don't know. But eventually when I'm 70 the checks stop.</i>");
wrong2a.createDialogue(gaspery, "<i>Everyday when I try to go outside I'm wracked with constant sweat, a sense of panic, until I feel anemic. So I don't leave. Even when Zoey, Zoey my older sister. Even when the funeral invite comes</i>");
wrong2a.createDialogue(gaspery, "<i>And she's gone, everyone is gone. I wished I just said something. Just once in my life</i>", "Gaspery", "gasperyOldSad", "show", "center");

let wrong2 = new Scene("wrong2", wrong2a, office);
wrong2.createDialogue(gaspery, "Yes, thank you for you're time and interview", "Gaspery", "gasperySuitSmile", "show", "center");
wrong2.createDialogue(gaspery, "<i>I see myself say goodbye to Olive, despite knowing, <b>knowing<b> she's going to die.</i>");
wrong2.createDialogue(zoey, "Hey. You did it.", "Zoey", "zoeyScience", "show", "left");
wrong2.createDialogue(gaspery, "Yeah-");
wrong2.createDialogue(zoey, "You did what was best for you.");

let menu2 = new Menu("If say a time traveler appeared before you and told you to drop everything and go home immediately, would you do it?", right2, "Thank you for you're time and interview", wrong2);

let scene3d = new Scene("scene3d", menu2, bookstore);
scene3d.createDialogue(gaspery, "<i>I arrive in 2203, posing as a magazine interviewer to meet with Olive</i>", "Gaspery", "gasperySuitAwkward", "show", "right");
scene3d.createDialogue(gaspery, "I don't mean to make you uncomfortable or put you on the sport. BUt i'm curious if you experienced something strange in the Oklahoma City Airship Terminal.*", "Gaspery", "oliveBasic", "show", "left");
scene3d.createDialogue(olive, "I don't mind talking about this but I'm afraid I'll seem too eccentric if it makes it into the final version of the interview. Could we go off the record for a moment?*");
scene3d.createDialogue(gaspery, "Yes");
scene3d.createDialogue(olive, "I was in the terminal. I was walking toward my flight, and I remember I walked by a guy playing a violin. And then all of a sudden, everything went dark and I was in a forest. Just for a second-*");
scene3d.createDialogue(gaspery, "Just like in your novel!");
scene3d.createDialogue(gaspery, "Can you tell me anything else");
scene3d.createDialogue(olive, "No it was just so fast, I just-");
scene3d.createDialogue(olive, "Does it mean anything?");
scene3d.createDialogue(gaspery, "<i>I- know my directions but. This is interview is over. I got what I came for and yet.");
scene3d.createDialogue(gaspery, "<i>How can I, knowing she will die from the pandemic in just, just a couple days. I-</i>");

let cut2 = new Scene("cut2", scene3d, office);
cut2.createDialogue(gaspery, "<i>I immediately puke over the pristine floor of the Time Institute", "Gaspery", "gasperyPreistSmile", "show", "center");
cut2.createDialogue(zoey, "That was so much better. I assume you say it", "Zoey", "zoeyScience", "show", "left");
cut2.createDialogue(zoey, "Well you have one last mission to Olive to find out about the violin music, but after that you can quit.");
cut2.createDialogue(gaspery, "<i>Just one more</i>");

let cut1 = new Scene("cut1", cut2, vincentForest);
cut1.createDialogue(gaspery, "<i>I stumble through the forest to the old growth maple tree where Edwin once stood, waiting for Vincent and her camera. The island exactly that same as it was in 1912</i>", "Gaspery", "gasperyPreistSmile", "show", "right");
cut1.createDialogue(gaspery, "So trying to get information out of Edwin didn’t go as planned, but I’m back again, the same island.");
cut1.createDialogue(gaspery, "<i>I sit there for hours among the fronds, wet with the rain that must have fallen in the morning. My knees ache as I wait for the glitch.</i>", "Gaspery", "gasperyPreistSmile", "hide", "right");
cut1.createDialogue(gaspery, "<i>It is around four in the afternoon when I see her, a blue-haired teenager, eyes rimmed in black, a digital camera carefully balanced on slim fingers.</i>", "Gaspery", "vincentChild", "show", "left");
cut1.createDialogue(gaspery, "It seems to happen in slow motion. She steers the camera to capture our surroundings, slowly, then upwards towards the spreading canopy of the tree--");
cut1.createDialogue(gaspery, "<i>--teetering notes on a violin, haunting and beautiful, a faint whoosh so thunderous as to be felt rather than heard, all encompassing, the afternoon sun penetrating through, setting green leaves aglow--</i>");
cut1.createDialogue(gaspery, "<i>--all at once it was the airship terminal, the maple tree, Olive Llewelynn, Edwin St. Andrew, Vincent, and me--</i>");
cut1.createDialogue(gaspery, "<i>And then I am back.</i>", "Gaspery", "vincentChild", "hide", "left");
cut1.createDialogue(gaspery, "<i>A wave of nausea crashes into me and I am grateful to be on my knees already, otherwise I’d have fallen and revealed myself.</i>");
cut1.createDialogue(gaspery, "<i>Vincent is up before I, dashing away.</i>");
cut1.createDialogue(gaspery, "<i>It feels fatalistic to know exactly how she will meet her end, many decades later, a victim of fraud, after falling from money and fortune. After falling from the hull of a ship in storm. To know it carries a certain sense of guilt.</i>");
cut1.createDialogue(gaspery, "<i>How could anyone know it, such a miserable knowledge, and ignore it? What lack of humanity could justify it? At this moment I understand what Zoey mean when she warned me from taking the job.</i>");
cut1.createDialogue(gaspery, "<i>When I return to the Time Institute this time around, it might be one of the last times I will step into the place and time to which I belong.</i>");

let scene2d = new Scene("scene2d", cut1, office);
scene2d.createDialogue(gaspery, "<i>In short, the interview went horribly. The accent I had worked so long on perfecting was seen right through. I didn’t get any information from Alan Sami, either. All he said was that the song was a lullaby he’d written for his dead wife, and that was a dead end.</i>", "Gaspery", "gasperySuitSmile", "show", "left");
scene2d.createDialogue(zoey, "You sure screwed that up.", "Zoey", "zoeyScience", "show", "right");
scene2d.createDialogue(gaspery, "<i>She shakes her head at me in disbelief after watching the recording I took.</i>");
scene2d.createDialogue(zoey, "I never imagined I’d see someone do an interview that badly. You looked like an idiot. Well, hopefully you’ll do better on this next one.");
scene2d.createDialogue(zoey, "We’re sending you to Edwin St. Andrew in 1912 and 1994 to try and capture Vincent's experience");

let scene1d = new Scene("scene1d", scene2d, airport)
scene1d.createDialogue(gaspery, "<i>This is my first interview, my first time traveling through time, arriving ini 2195. I’m going to do just fine. I tell myself this before I step out of the dark utility closet into the bustle of the Oklahoma City Airship Terminal.</i>", "Gaspery", "gasperySuitSmile", "show", "left");
scene1d.createDialogue(gaspery, "<i>Light hits my eyes and forces me to readjust. The space is cavernous, a huge dome with blue tinted windows that display the sky stretched out above.</i>");
scene1d.createDialogue(gaspery, "<i>The clear, sonorous notes of a violin pierce through the muddled noises of the airport, a tune that seems to perfectly match some rhythm in my heart, but when I try to make sense of it, it evades me. </i>");
scene1d.createDialogue(gaspery, "<i>I locate the violin player. He’s an old man in his sixties, sitting cross-legged on the floor, with a floppy-eared dog resting its chin on his lap.</i>", "Gaspery", "gasperyOld", "show", "center");
scene1d.createDialogue(gaspery, "Excuse me, sir. I’m conducting an interview for a music historian, and I was wondering if you’d let me interview you?");
scene1d.createDialogue(gaspery, "<i>The old man looks up at me</i>");
scene1d.createDialogue(gaspery, "Sure, son.", "Alan Sami");
scene1d.createDialogue(gaspery, "<i>I hate being called son.</i>", "Gaspery", "gasperySuitAwkward", "show", "left");

let right1 = new Scene("right1", scene1d, office);
right1.createDialogue(gaspery, "That sounds perfect. Thank you, Ephrem.", "Gaspery", "gasperyLoser", "show", "center");
right1.createDialogue(gaspery, "<i>And like that, five years of my life passed. I underwent intensive training the profiles of the people I’d meet, the history of those time periods, the specific syntax and grammar and accents, and so much more.</i>");
right1.createDialogue(gaspery, "<i>But I was happy and excited to be doing something that I loved.</i>", "Gaspery", "gasperySuitSmile", "show", "center");
right1.createDialogue(ephrem, "You’ll speak to Edwin St. Andrew, who experienced the anomaly in 1912. Then Paul Smith, the composer who wrote to the video of the anomaly. Olive Llewelynn, on her last book tour. But first, Alan Sami, the violinist in the airship terminal.", "Ephrem", "ephremSprite", "show", "left");
right1.createDialogue(gaspery, "<i>He told me this before I began training five years ago. I pressed him for details of what happened to Zoey.</i>");
right1.createDialogue(ephrem, "Well… I really shouldn’t be telling you this. It’s strictly classified information.");
right1.createDialogue(ephrem, "Um, well, I heard that she fell in love with a time traveler, but they went rogue and got eliminated by Time Institute.");
right1.createDialogue(gaspery, "Eliminated? They do that?");
right1.createDialogue(ephrem, "Yep, they’ve got many ways of going about it, like framing you for a crime in a different timeline and leaving you there to wither.");
right1.createDialogue(gaspery, "<i>Ephrem leaves as I rub my arm where they implanted the tracker</i>", "Gaspery", "ephremSprite", "hide", "left");
right1.createDialogue(gaspery, "<i>As I’m about to embark on my first mission to interview Alan Sami in the airship terminal, Zoey shows me the controls for the time travel device and the tracker.</i>", "Gaspery", "zoeyScience", "show", "right");
right1.createDialogue(zoey, "It’s how we keep track of where you go. And how we can forcibly call you back, too.");
right1.createDialogue(zoey, "... Good luck.");
right1.createDialogue(gaspery, "She squeezes my hand and I step into the time travel chamber.");

let wrong1a = new Scene("wrong1a", stagnation, hotelFuture);
wrong1a.createDialogue(gaspery, "<i>I return to my nocturnal shifts at the hotel, sitting on my designated chair in the corner of the lobby, watching people ascend and descend from glass elevators, everyone minding their separate busy lives.</i>", "Gaspery", "gasperyLoser", "show", "center");
wrong1a.createDialogue(gaspery, "<i>Many years pass. I suppose that I have spent many years sitting on this same chair as well. This chair that rocks but shouldn't, with its scuffed and stained velvet seat.</i>", "Gaspery", "gasperyOldSad", "show", "center");
wrong1a.createDialogue(gaspery, "<i>It’s like watching a time-lapse video around me, solely me, who sits still and ages. I watch as Talia becomes engaged to a man who lifts her out of this sorry hotel, and I hear nothing else of her, good or bad.</i>");
wrong1a.createDialogue(gaspery, "<i>The feeling of stagnance pervades me as the decades roll on. I can’t imagine anything different from this life, though. Could I have changed anything? Were there opportunities, or was I always destined for nothing?</i>");

let wrong1 = new Scene("wrong1", wrong1a, office);
wrong1.createDialogue(gaspery, "<i>I look at Zoey, and her eyes implore me to listen to her.</i>", "Gaspery", "zoeyScience", "show", "left");
wrong1.createDialogue(gaspery, "<i>It seems she knows more than I do. She is my older sister, after all, and I trust her more than anyone.</i>", "Gaspery", "gasperyLoser", "show", "center");
wrong1.createDialogue(gaspery, "Actually, Ephrem, I’ll be fine. I just started working at the hotel, and I’d feel bad to quit so soon.", "Gaspery");
wrong1.createDialogue(ephrem, "If you’re sure, then, it can’t be helped.", "Ephrem", "ephremSprite", "show", "right");

let menu1 = new Menu("Actually, Ephrem, I’ll be fine.", wrong1, "That sounds perfect. Thank you, Ephrem.", right1);

let scene6c = new Scene("scene6c", menu1, office);
scene6c.createDialogue(gaspery, "<i>By some twist of fate, I run into an old school friend, Ephrem, as I make my way up the Time Institute stairs the next day.</i>", "Gaspery", "gasperyLoser", "show", "center");
scene6c.createDialogue(gaspery, "<i>I meet him over tea in his office, and somehow Zoey catches wind of this, and they play tug-of-war with me in between.</i>","Gaspery", "ephremSprite", "show", "left");
scene6c.createDialogue(ephrem, "Look, the work we do here at the Time Institute is incredibly interesting. You’d think that because of the butterfly effect, the presence of a time-traveler would irrevocably alter the course of time, but it doesn’t.", "Ephrem", "zoeyScience", "show", "right");
scene6c.createDialogue(zoey, "We obviously have very different experiences with the Time Institute.");
scene6c.createDialogue(zoey, "What I can tell you, Gaspery, is that this guy has failed to reach his recruitment goals for the past three years.");
scene6c.createDialogue(ephrem, "I’ll write you down for an interview and screening, Gaspery. How does that sound?");

let scene5c = new Scene("scene5c", scene6c, hotelFuture);
scene5c.createDialogue(gaspery, "When I left that night, Zoey knew she had not convinced me to give up. But I felt that if I let this opportunity slip, I would regret it for the rest of my life.", "Gaspery", "gasperyLoser", "show", "left");
scene5c.createDialogue(gaspery, "<i>I see Talia the next day as we are both getting off our shifts at the hotel.</i>", "Gaspery", "natalie", "show", "right");
scene5c.createDialogue(natalie, "You want to work at the Time Institute? You should be careful. They’ll use you and dispose of you, just like trash.", "Talia");
scene5c.createDialogue(natalie, "...My parents used to work there. Until a mission went horribly wrong and then suddenly we were living in a ramshackle house in a rundown neighborhood.", "Talia");
scene5c.createDialogue(gaspery, "<i>The things she tells me feel like they should be strictly classified. Her voice is bitter and her memories of the Night City are different than mine. I am reminded that she had been born in a wealthier Moon colony.</i>");

let scene4c = new Scene("scene4c", scene5c, office);
scene4c.createDialogue(gaspery, "<i>Some time passed and Zoey’s birthday came up. I thought I would visit her in her office at the Institute.</i>", "Gaspery", "gasperyLoser", "show", "left");
scene4c.createDialogue(gaspery, "<i>I buy a bouquet of flowers and a red velvet cupcake from a bakery by my apartment, which I pray is still her favorite.</i>");
scene4c.createDialogue(gaspery, "<i>But when the elevator brings me up to her office within the smooth concrete facade of the Time Institute building, I find Zoey in disarray.</i>", "Gaspery", "zoeyScience", "show", "right");
scene4c.createDialogue(gaspery, "<i>She thanks me for the flowers and sets them down on the kitchen island and forgets about then within a heartbeat.</i>");
scene4c.createDialogue(zoey, "I need you to take a look at this.");
scene4c.createDialogue(gaspery, "<i>She maneuvers the holographic screen in front of her and shows it to me. It’s a passage written by Olive Llewellyn, my mother’s favorite author. It’s the book containing the minor character which my mother had named me after.</i>");
scene4c.createDialogue(gaspery, "<i>It reads, “Willis had stopped in the bustle of the airport, listening to a violinist playing for spare change to forget the worries of his mind for a minute.</i>");
scene4c.createDialogue(gaspery, "<i>The tune was lovely, like it carried the violinist’s memories of a countryside at dusk, and he let himself be lost in it until-- a flash of light--</i>");
scene4c.createDialogue(gaspery, "<i>--a wave of motion sickness, blinding white sun, branches of a maple tree and papery green leaves spiraling around him--</i>");
scene4c.createDialogue(gaspery, "<i>And then he was back. Willis thought he had lost his mind for a second.” The passage of the book ended and Gaspery looked up at Zoey. She fiddled with the holographic screen again, and showed Gaspery a video.</i>");
scene4c.createDialogue(zoey, "“The composer’s name is Paul James Smith. He was famous for composing music to accompany short video clips.");
scene4c.createDialogue(gaspery, "<i>The screen erupts to life before me. The person behind the camera takes smooth, gliding steps through a lush, summery forest on Earth, all the while a violin melody plays in the background.</i>");
scene4c.createDialogue(gaspery, "<i>Suddenly, the video glitches and the screen goes black and the violin notes cascade down into a cacophony of confusion and disorientation, and then it is back to normal.</i>");
scene4c.createDialogue(zoey, "Now read this.");
scene4c.createDialogue(gaspery, "<i>She pulls up a digital scan of a letter written in a loopy, slanted font such that I couldn’t read and she has to translate it for me with a function on her screen.</i>");
scene4c.createDialogue(gaspery, "<i>I skim the letter, from a man named Edwin to his older brother, Gilbert. After pleasantries and well wishes, Edwin details a strange experience he’d had by a maple tree.</i>");
scene4c.createDialogue(gaspery, "<i>He describes the same phenomena that Olive Llewellyn's book and Paul’s video composition had captured. But, what was the significance of this?</i>");
scene4c.createDialogue(zoey, "Think of a file corruption. What operating system do you use on your device-- Zephyr, right? Remember that bug where you’d open a text file on your phone, and you’d hear whatever music you’d been playing last? It’s something like that.");
scene4c.createDialogue(gaspery, "You’re saying, it’s related to the simulation hypothesis right? It’s some kind of proof that the world is a simulation, a computer code that can malfunction just like anything else?");
scene4c.createDialogue(gaspery, "I think I see. But, what does this have to do with you, Zoey? What is it that you really do in the Time Institute that you can’t tell me?");
scene4c.createDialogue(zoey, "One should think it would be a little obvious of what I do by now, Gaspery, but I’ll explain it to you. Ever since time travel was invented, it’s been kept extremely under the surface by the government, right?");
scene4c.createDialogue(zoey, "But of course, there are still things we do with it. And people who use it illegally. That’s what we’re for, to keep things in check. We make sure to protect the order of all the different timelines.");
scene4c.createDialogue(zoey, "I brought up the anomaly to the higher ups and we’re going to begin an investigation.");
scene4c.createDialogue(gaspery, "Could I help you at all?” <i>I immediately feel bashful at asking the question, like I’m a little kid again, asking if I can help my sister and mom with dinner.</i>");
scene4c.createDialogue(zoey, "Absolutely not. One, it’s extremely dangerous, Gaspery. Two, you need years of experience and training to learn everything you need for a specific mission.");
scene4c.createDialogue(gaspery, "I hate my job. I’ve hated school and every job I’ve ever had, Zoey. This is the first thing I’ve ever been interested in. Please, let me work on this project for the time institute. I’ll spend however many years it’ll take.");
scene4c.createDialogue(gaspery, "<i>Zoey’s eyes convey hurt that stems from more than she lets on to me. I dawns on me that I’ve never known much about her private or romantic life, and it seemed that there was a reason she didn’t want me going on the mission through time.</i>");
scene4c.createDialogue(zoey, "You don’t understand. There’s a certain level of indifference, inhumane indifference, that it takes to do this job well. When you travel through time and meet people, you’ll have learned everything about them, and how they’ll die.");
scene4c.createDialogue(zoey, "...There’s a reason I choose not to go back in time anymore.");

let scene3c = new Scene("scene3c",scene4c, hotelFuture);
scene3c.createDialogue(gaspery, "<i>I didn’t see Zoey again until more than a month later, after being hired as a “hotel detective” at a hotel.</i>", "Gaspery", "gasperyLoser", "show", "left");
scene3c.createDialogue(gaspery, "<i>The woman interviewing me seems to have built a glass wall in between us as she explains the expectations for my job.,/i>");
scene3c.createDialogue(natalie, "You might not think, but we have very specific requirements for this job. Do you remember the employment screening that you were required to do? It reads that you have a very high attention.", "Natalie", "natalieSprite", "show", "right");
scene3c.createDialogue(gaspery, "<i>She looks up at me through spectacles with a displaced vacancy. She seems familiar to me. What was her name, Natashia? Natalie? I can’t place it.</i>");
scene3c.createDialogue(natalie, "Would you agree, Mr. Roberts? Can you pay attention to detail?");
scene3c.createDialogue(gaspery, "<i>I am basically meant to be a security presence. We finish up the orientation and she dismisses me, but--</i>");
scene3c.createDialogue(gaspery, "I know you");
scene3c.createDialogue(gaspery, "Talia..");
scene3c.createDialogue(natalie, "You’re from school, right? The end of the cul-de-sac.", "Talia");
scene3c.createDialogue(gaspery, "<i>And so I began to work long night shifts, peaceful, watching hours in the muted glamor of the hotel, yet unfulfilled. I saw Talia walk through the lobby occasionally but never spoke with her.</i>", "Gaspery", "natalieSprite", "hide", "right");

let scene2c = new Scene("scene2c", scene3c, office);
scene2c.createDialogue(gaspery, "<i>No star burns forever.*</i>", "Gaspery", "gasperyLoser", "show", "left");
scene2c.createDialogue(gaspery, "<i>I feel like no one really understands the idea that the literal world-—the solar system, and everyone in it—-will cease to exist someday.</i>");
scene2c.createDialogue(gaspery, "<i>It’s not to say that the smaller losses aren’t equally as annihilating.</i>");
scene2c.createDialogue(gaspery, "<i>School wasn’t my thing. By my mid thirties, my mother was dying. My older sister, Zoey, and I, were with her at her bedside constantly. In sleep, she murmured vague concepts from her work, and the simulation hypothesis.</i>");
scene2c.createDialogue(gaspery, "<i>Zoey was always the brighter child, eagerly following in my mother’s footsteps. She listened to my mother’s words like music, slumped over mom’s hospital bed, head in her forearms.</i>", "Gaspery", "zoeyCasual", "show", "right");
scene2c.createDialogue(gaspery, "Do you know what that is? Can you explain it to me?");
scene2c.createDialogue(zoey, "What, the simulation hypothesis? Yeah. Basically, when you think of all the virtual reality and computer simulations we have right now, it’s simple to believe they’ll someday become advanced enough as to be indistinguishable from reality, right?");
scene2c.createDialogue(gaspery, "<i>She answers me readily without budging or lifting her eyelids.</i>");
scene2c.createDialogue(zoey, "So here the catch lies: who’s to say we’re not already living in a simulation?");
scene2c.createDialogue(gaspery, "I see");
scene2c.createDialogue(gaspery, "<i>She goes on, but it becomes background, and I fall asleep by my mother’s side. And when we both wake up, we see that mom has stopped breathing.</i>");
scene2c.createDialogue(gaspery, "<i>So we lay there for some time, breathing in the reality of it, and then go about the preparations.</i>");

let scene1c = new Scene("scene1c", scene2c, nightCityOld);
scene1c.createDialogue(generic, "The old, rundown neighborhood, in Moon Colony 2 of Night City, if where Gaspery spent his childhood. In the background is Olive Llewellyn’s boarded-up childhood home, where Talia’s family now resides. In the distance is the edge of the dome, littered with trash, and in the far distance, the Moon Colony One is seen in its opaque sheen.", "Narrator");
scene1c.createDialogue(gaspery, "The Night City was nicknamed for its lack of an atmosphere that otherwise would have concealed the reaches of space outside a cloak of pale blue and clouds. Whether it was during its two weeks of day, or two weeks of night, the malfunctioning dome made it so residents of Moon Colony Two could only see blackness when they looked up.", "Gaspery", "gasperyLoser", "show", "center");
scene1c.createDialogue(gaspery, "It’s not as if I didn’t love my home. It’s the place I miss the most now. I don’t yearn for Earth, a place regarded for its “realness”, as I’ve never been to it. Colony Two is my home.");
scene1c.createDialogue(gaspery, "Across the street, was the childhood home of Olive Llewelynn, the author of my mother’s favorite book. I was eleven when I learned that my name, Gaspery-Jacques, was from a side-character from this book.");
scene1c.createDialogue(gaspery, "The house, boarded-up in that rundown neighborhood, was home to a family with a daughter, I saw her at school every day, playing alone.");
scene1c.createDialogue(gaspery, "The edge of the dome was off-limits by my mother, but I liked to play by there anyway. The area was littered with trash and unruly undergrowth, and through the transparent dome you could see Moon Colony One, with its intact dome with an opaque sheen.");
scene1c.createDialogue(gaspery, "I saw her there, the neighbors daughter, Talia. She said, “I know you”, and then I wondered what went through her mind when she saw that empty, dusty moonscape through the threshold.");

let scene4b = new Scene("scene4b", scene1c, bookstore);
scene4b.createDialogue(olive, "*sigh <i>I feel like I've been signing books for so many endless hours. The line's tapering off, but a couple people just keep appearing every couple minutes.</i>", "Olive", "oliveBasic", "show", "left");
scene4b.createDialogue(generic, "Your husband must be so kind to look after your daughter while you’re away!", "Woman", "femaleNpc", "show", "right");
scene4b.createDialogue(olive, "Sorry, I must have misheard you. I thought you said he was kind to care for his own child.*", "Olive", "oliveAnnoyed", "show", "left");
scene4b.createDialogue(arretta, "Right! Olive, this is Gaspery-Jacques Roberts. He’s here with a magazine for an interview.", "Arretta", "arrettaSprite", "show", "center");
scene4b.createDialogue(olive, "<i>Arreta my savior. Never have I loved a publisher so much.</i>", "Olive", "arrettaSprite", "hide", "center");
scene4b.createDialogue(olive, "Oh!", "Olive", "oliveBasic", "show", "left");
scene4b.createDialogue(gaspery, "It’s my pleasure.","Gaspery","gasperySuitSmile", "show", "right");
scene4b.createDialogue(olive, "What a coincidence! I always thought I made up the name Gaspery-Jacques. I’ve never seen it outside my novel.", "Olive", "oliveTalking", "show", "left");
scene4b.createDialogue(olive, "<i>He had a faint accent I couldn't quite place</i>", "Olive", "oliveBasic", "show", "left");
scene4b.createDialogue(gaspery, "My mother thought she had made it up, too. But on came your book.", "Gaspery", "gasperySuitAwkward", "show", "right");
scene4b.createDialogue(gaspery, "There was a moment when a character experiences some sort of...teleportation? Experience? After hearing the violin.");
scene4b.createDialogue(gaspery, "I was wondering if it was modeled after a personal experience.");
scene4b.createDialogue(olive, "...");
scene4b.createDialogue(olive, "Do you mind if we go off the record?");

let scene3b = new Scene("scene3b", scene4b, airportSunset);
scene3b.createDialogue(generic, "After her lecture, the next morning.", "Narrator", "oliveBasic", "show", "center");
scene3b.createDialogue(olive, "<i>Paradox: I want to go home but I could watch Earth's sunrises forever.*</i>");

let scene2b = new Scene("scene2b", scene3b, lectureHall);
scene2b.createDialogue(olive, "<i>I've given this lecture so much...</i>", "Olive", "oliveTalking", "show", "center");
scene2b.createDialogue(olive, "<i>Earlier, with this taxi driver, I said the virus had been “fairly well contained,” but in terms of viruses, isn’t ‘fairly well contained’ the same as ‘not contained at all?’</i>", "Olive", "oliveBasic", "show", "center");
scene2b.createDialogue(olive, "<i>It’s a binary condition. It’s either contained or it isn’t.</i>");
scene2b.createDialogue(olive, "<i>Ugh. Focus!</i>");
scene2b.createDialogue(olive, "When Europeans had been traveling what would later be called British Columbia, they encountered a strange phenomenon. Despite the hundreds of miles of shores traveled, they would be met with empty islands, devoid of all life. When they finally found villages, they still found this to be true, because the villages had been filled with corpses. Human remains were strewn everywhere, and later, skeletons on the beach.", "Olive", "oliveTalking", "show", "center");
scene2b.createDialogue(olive, "Smallpox had arrived");
scene2b.createDialogue(olive, "Before the Europeans, it was the Romans who had the disease. They believed it came because of the desecration of a temple. It seems silly now, but it shows how illness has carried—still carries—a terrible mystery.");
scene2b.createDialogue(olive, "Even now, over 500 years after smallpox in the 1700s, illness is still a kind of unknown. We don’t know why some people die sickly, or why others with the same illness recover and live long and happy lives. It feels completely random, in the cruelest of ways.");

let scene1b = new Scene("scene1b", scene2b, parkOlive);
scene1b.createDialogue(olive, "<i>There’s something to be said for looking up at a clear blue sky and knowing it isn’t a dome.*</i>", "Olive", "oliveBasic", "show", "left");
scene1b.createDialogue(olive, "<i>I liked to take walks in between being on tour and being at my hotel. It grounded me a little, and also gave me the chance to drink in the pure nature that people on Earth took for granted.</i>");
scene1b.createDialogue(olive, "Ow!");
scene1b.createDialogue(olive, "<i>There's something in my shoe</i>", "olive", "burr", "show", "center");
scene1b.createDialogue(olive, "<i>At first I thought it was biotech, but upon further investigation they turned out to be real. No, real wasn’t the word for it. Everything that can be touched is real.*</i>");
scene1b.createDialogue(olive, "<i>What I saw was a symbol of another world, something so Earthlike it might as well have been screaming it from the rooftops. I packed a few of them into a sock for safe keeping</i>", "Olive", "burr", "hide", "center");

let afterFlashback = new Scene("afterFlashback", scene1b, hotelRoom);
afterFlashback.createDialogue(generic, "Olive is a famous author, currently on tour in 2203 for her accredited book, Marienbad. She had been raised on the Moon Colonies, a fact that sometimes raised pity in others, which in turn annoyed her.", "Narrator");
afterFlashback.createDialogue(generic, "She looked forward to phone calls with her husband(an architect), but also hated them, because they reminded her of what she was missing while she was away.", "Narrator");
afterFlashback.createDialogue(husband, "Have I told you about the new project I’ve been assigned?","Husband", "husbandSprite", "show", "right");
afterFlashback.createDialogue(husband, "It's some kind of center for physics or something, but the blueprints are really weird.");
afterFlashback.createDialogue(olive, "What kind of weird?", "Olive", "oliveBasic", "show", "left");
afterFlashback.createDialogue(husband, "There’s like, a tunnel? Connecting to our Security Headquarters. Whatever that’s for. And there’s so many passageways between this building—the physics one—and this other government building, that they’re nearly the same thing. I’m not sure what to think of it.");
afterFlashback.createDialogue(olive, "Well, how’s my lovely daughter? Has Sylvie missed me too much yet?");
afterFlashback.createDialogue(husband, "Of course she's been amazing! In fact-");
afterFlashback.createDialogue(olive, "<i>I miss them so much. I know he's trying his best to avoid it, but I can tell she has, in fact, been missing me.</i>");

let flashback = new Scene("flashback", overpass, ohioOverpass);
flashback.createDialogue(mirella, "Being a child, walking a half-mile from home to school, with her older sister. And hearing those gunshots.");
flashback.createDialogue(generic, "<i>Was that gunshots!", "Mirella", "mirellaChild", "show", "center");
flashback.createDialogue(generic, "It's probably nothing.", "Sister", "mirellaSister", "show", "right");
flashback.createDialogue(mirella, "<i>There is an overpass, I used to be afraid of it</i>");
flashback.createDialogue(gaspery, "Mirella.", "Gaspery(?)", "gasperyBloodTalking","show", "left");
flashback.createDialogue(mirella, "<i>He said my name. I'm sure of it.</i>", "Mirella", "gasperyBloodTalking", "hide", "left");

let scene3a = new Scene("scene3a", flashback, park);
scene3a.createDialogue(mirella, "<i>I woke up in a daze, aware that I had walked far from that coffee house into a park sitting down on a park bench. The man from before, Gaspery, sits down next to me</i>", "Mirella", "mirellaBasic", "show", "left");
scene3a.createDialogue(gaspery, "Hello again.", "Gaspery", "gasperyCasualSmile", "show", "right");
scene3a.createDialogue(mirella, "Who are you, really? I know you don’t really care about Paul’s music either.");
scene3a.createDialogue(gaspery, "Consider me an investigator. It’s a bit complicated, but to be concise I’m interested in the kind of glitches that happened in Paul’s video.");
scene3a.createDialogue(mirella, "Okay...");
scene3a.createDialogue(gaspery, "Look, did your friend ever tell you anything about that clip? When she filmed it? I know she would’ve been quite young when it was recorded but...", "Gaspery", "gasperyCasualTalking","show", "right");
scene3a.createDialogue(mirella, "Wait!, I've seen you before, in an underpass, in Ohio! When I was a kid.", "Mirella", "gasperyCasualSmile", "show", "right");
scene3a.createDialogue(mirella, "It must’ve been, what, 20, 30 years ago? You were getting arrested—");
scene3a.createDialogue(gaspery, "I think you’re mistaking me for someone else.");
scene3a.createDialogue(mirella, "No, I'm sure! I-");
scene3a.createDialogue(mirella, "I have to go.");
scene3a.createDialogue(mirella, "<i>I remember it vividly...</i>");

let scene2a = new Scene("scene2a", scene3a, coffeeHouse);
scene2a.createDialogue(gaspery, "So your sister, Vincent, she's the one who recorded those videos you used?", "Gaspery", "gasperyCasualSmile", "show", "center");
scene2a.createDialogue(paul, "Yeah, sometime before she passed she gave me permission to, err, use them in my performances.", "Paul", "paulSweaty", "show", "left");
scene2a.createDialogue(mirella, "<i>A kind of involuntary shudder seems to pass through him as he spoke. He stares right past me, his eyes blown wide, swallowing nervously, as if looking at a ghost.</i>", "Mirella", "mirellaBasic", "show", "right");
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
afterGlitch2.createDialogue(generic, "Mirella and Vincent had been close until Mirella’s husband had killed himself due to financial ruin after the scheme collapsed. Vincent had somehow turned untraceable—perhaps in an attempt to escape her old life—so Mirella had to resort to stalking her family instead. Her search had led her to Paul, who had apparently made a name for himself as an abstract composer.", "Narrator");
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
scene1a.createDialogue(generic, "Paul Smith, sometimes known as ‘musical genius,’ or, on a bad day, ‘recovering addict,’ sits atop a stage, speaking into a microphone and sweating from the overhead lights. He presses Play on his laptop.", "Narrator", "paulSweaty", "show", "left");

let afterGlitch1 = new Scene("afterGlitch1", scene1a, edwinChurch);
afterGlitch1.createDialogue(edwin, "<i>I’m on the beach, kneeling and vomiting. In an attempt to ground myself, I wade into the ice cold waters of the ocean; it seeps through my clothes and into my soul, it feels like, and in the distance I see the priest—Roberts—making his way toward the church and I hurry to follow him</i>","Edwin", "edwinFrightened", "show", "left");
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
scene4.createDialogue(gaspery, "Good morning. Forgive me, I didn’t mean to startle you. I’m Roberts. I’m filling in for Father Pike, the usual priest, I believe?", "???", "gasperyPreistAwkward", 'show', "right");
scene4.createDialogue(edwin, "Edwin St. Andrew. Pleasure to meet you.", "Edwin");
scene4.createDialogue(gaspery, "Likewise. Have a nice day", "Roberts");
scene4.createDialogue(edwin, "<i>I stepped forward, into the trees--</i>", "Edwin", "gasperyPreistAwkward", "hide", "right");

let scene3 = new Scene("scene3", scene4, edwinSea);
scene3.createDialogue(edwin, "<i>After that, I was lost. I had a brief period of optimism where I believed that I could be a farmer, despite never having touched a spade. I painted. I drank. I ended up in a small settlement in Caiette.</i>", "Edwin");

let scene2 = new Scene("scene2", scene3, edwinBedroom);
scene2.createDialogue(edwinFather, "Pack your bags. You’re going to Canada. I’ve already made the arrangements. And you are to stay the hell out of England!", "Father", "edwinFatherSprite", "show", "left");

let scene1 = new Scene("scene1", scene2, edwinTable);
scene1.createDialogue(edwin, "<i>If I hear one more word about her goddamned ayah...</i>", "Edwin", "edwinBase", "show", "left");
scene1.createDialogue(edwinMother, "You know, I so often find myself thinking about the beauty of British India. The colors were remarkable, but the heat! So incredibly oppressive.", "Mother", "edwinMotherSprite", "show", "right");
scene1.createDialogue(edwin, "Well, that’s a bit ironic, isn’t it?", "Edwin");
scene1.createDialogue(edwinMother, "What do you mean?", "Mother");
scene1.createDialogue(edwin, "A British woman, enjoying privileges gained only through conquest and violence, complaining about the ‘oppressive’ heat?", "Edwin");
scene1.createDialogue(edwinFather, "Yes, well, we <i>won</i>, didn’t we? Not exactly something new. We fought, we won, India is ours. Simple as that. I’m sure the natives of England weren’t too happy twenty generations ago either, but, well, that’s life, isn’t it?", "Father", "edwinFatherSprite", "show","center");
scene1.createDialogue(edwin, "Surely we ought to strive to be a bit more civilized than the maniacal grandson of a Viking raider?", "Edwin", "edwinUpset", "show", "left");
scene1.createDialogue(generic, ". . .", "Family", "none", "hide");
scene1.createDialogue(edwinFather, "Every advantage you’ve ever had in this life, Edwin, has been because you have descended from the “maniacal grandson of a Viking raider.” You’d do well to be more grateful.", "Father", "edwinFatherSprite", "show", "center");

if(localStorage.getItem("currentScene")){
    eval(`Scene.setScene(${localStorage.getItem("currentScene")})`);
}
else{
    Scene.previousScene = scene1;
    Scene.setScene(scene1);
}
