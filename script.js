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
let gasperyBloodTalking = new Sprite("cgImages/gasperyBloodTalking.png");

let hotelRoom = new Background("baseImages/hotel.png", "olive");
let airport = new Background("baseImages/airport.png", "olive");
let nightCityNew = new Background("baseImages/nightCityNew.png", "olive");
let nightCityOld = new Background("baseImages/nightCityOld", "future");
let office = new Background("baseImages/office.png", "future");
let parkOlive = new Background("baseImages/park.png", "olive");
let lectureHall = new Background("baseImages/lectureHall.png", "olive");
let airportSunset = new Background("baseImages;airportSunset.png", "olive");
let bookstore = new Background("baseImages/bookstore.png", "olive");
let hotelFuture = new Background("baseImages/hotel.png", "future");

let olive = new Character("Olive", "olive");
let zoey = new Character("Zoey", "Navy");
let natalie = new Character("Natalie", "brown");
let husband = new Character("Husband", "navy");
let arretta = new Character("Arretta", "pink");
let ephrem = new Character("Ephrem", "green");

let oliveBasic = new Sprite("cgImages/oliveBasic.png");
let oliveTalking = new Sprite("cgImages/oliveTalking.png");
let oliveAnnoyed = new Sprite("cgImages/oliveAnnoyed.png");
let arrettaSprite = new Sprite("cgImages/arretta.png");
let zoeyScience = new Sprite("cgImages/zoeyScience.png");
let zoeyCasual = new Sprite("cgImages/zoeyCasual.png");
let gasperyLoser = new Sprite("cgImages/gasperyLoser.png");
let gasperyOld = new Sprite("cgImages/gasperyOld.png");
let ephremSprite = new Sprite("cgImages/ephrem.png");
let husbandSprite = new Sprite("cgImages/husband.png");
let natalieSprite = new Sprite("cgImages/Natalie.png");
let burr = new Sprite("cgImages/burr.png");
let femaleNpc = new Sprite("cgImages/femaleNpc");
let gasperySuitAwkward = new Sprite("cgImages/gasperySuitAwkward.png");
let gasperySuitSmile = new Sprite("cgImages/gasperySuitSmile.png");
let gasperySuitTalking = new Sprite("cgImages/gasperySuitTalking.png");

let glitch = new Ending("First Glitch", "glitch1.png");
let glitch2 = new Ending("Second Glitch", "glitch2.png");
let overpass = new Ending("The Underpass", "underpass.png");

let scene6c = new Scene("scene6c", "", office);
scene6c.createDialogue(gaspery, "<i>By some twist of fate, I run into an old school friend, Ephrem, as I make my way up the Time Institute stairs the next day.</i>", "Gaspery", "gasperyLoser", "show", "center");
scene6c.createDialogue(gaspery, "<i>I meet him over tea in his office, and somehow Zoey catches wind of this, and they play tug-of-war with me in between.</i>","Gaspery", "ephremSprite", "show", "left");
scene6c.createDialogue(ephrem, "<br>Look, the work we do here at the Time Institute is incredibly interesting. You’d think that because of the butterfly effect, the presence of a time-traveler would irrevocably alter the course of time, but it doesn’t.", "Ephrem", "zoeyScience", "show", "right");
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
scene4c.createDialogue(gaspery, "<br><i>She maneuvers the holographic screen in front of her and shows it to me. It’s a passage written by Olive Llewellyn, my mother’s favorite author. It’s the book containing the minor character which my mother had named me after.</i>");
scene4c.createDialogue(gaspery, "<br><i>It reads, “Willis had stopped in the bustle of the airport, listening to a violinist playing for spare change to forget the worries of his mind for a minute.</i>");
scene4c.createDialogue(gaspery, "<br><i>The tune was lovely, like it carried the violinist’s memories of a countryside at dusk, and he let himself be lost in it until-- a flash of light--</i>");
scene4c.createDialogue(gaspery, "<br><i>--a wave of motion sickness, blinding white sun, branches of a maple tree and papery green leaves spiraling around him--</i>");
scene4c.createDialogue(gaspery, "<br><i>And then he was back. Willis thought he had lost his mind for a second.” The passage of the book ended and Gaspery looked up at Zoey. She fiddled with the holographic screen again, and showed Gaspery a video.</i>");
scene4c.createDialogue(zoey, "“The composer’s name is Paul James Smith. He was famous for composing music to accompany short video clips.");
scene4c.createDialogue(gaspery, "<br><i>The screen erupts to life before me. The person behind the camera takes smooth, gliding steps through a lush, summery forest on Earth, all the while a violin melody plays in the background.</i>");
scene4c.createDialogue(gaspery, "<br><i>Suddenly, the video glitches and the screen goes black and the violin notes cascade down into a cacophony of confusion and disorientation, and then it is back to normal.</i>");
scene4c.createDialogue(zoey, "Now read this.");
scene4c.createDialogue(gaspery, "<br><i>She pulls up a digital scan of a letter written in a loopy, slanted font such that I couldn’t read and she has to translate it for me with a function on her screen.</i>");
scene4c.createDialogue(gaspery, "<br><i>I skim the letter, from a man named Edwin to his older brother, Gilbert. After pleasantries and well wishes, Edwin details a strange experience he’d had by a maple tree.</i>");
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
scene3c.createDialogue(natalie, "<br>You might not think, but we have very specific requirements for this job. Do you remember the employment screening that you were required to do? It reads that you have a very high attention.", "Natalie", "natalieSprite", "show", "right");
scene3c.createDialogue(gaspery, "<i>She looks up at me through spectacles with a displaced vacancy. She seems familiar to me. What was her name, Natashia? Natalie? I can’t place it.</i>");
scene3c.createDialogue(natalie, "Would you agree, Mr. Roberts? Can you pay attention to detail?");
scene3c.createDialogue(gaspery, "<i>I am basically meant to be a security presence. We finish up the orientation and she dismisses me, but--</i>");
scene3c.createDialogue(gaspery, "I know you");
scene3c.createDialogue(gaspery, "Talia..");
scene3c.createDialogue(natalie, "You’re from school, right? The end of the cul-de-sac.", "Talia");
scene3c.createDialogue(gaspery, "<br><i>And so I began to work long night shifts, peaceful, watching hours in the muted glamor of the hotel, yet unfulfilled. I saw Talia walk through the lobby occasionally but never spoke with her.</i>", "Gaspery", "natalieSprite", "hide", "right");

let scene2c = new Scene("scene2c", scene3c, office);
scene2c.createDialogue(gaspery, "<i>No star burns forever.*</i>", "Gaspery", "gasperyLoser", "show", "left");
scene2c.createDialogue(gaspery, "<i>I feel like no one really understands the idea that the literal world-—the solar system, and everyone in it—-will cease to exist someday.</i>");
scene2c.createDialogue(gaspery, "<i>It’s not to say that the smaller losses aren’t equally as annihilating.</i>");
scene2c.createDialogue(gaspery, "<br><i>School wasn’t my thing. By my mid thirties, my mother was dying. My older sister, Zoey, and I, were with her at her bedside constantly. In sleep, she murmured vague concepts from her work, and the simulation hypothesis.</i>");
scene2c.createDialogue(gaspery, "<br><i>Zoey was always the brighter child, eagerly following in my mother’s footsteps. She listened to my mother’s words like music, slumped over mom’s hospital bed, head in her forearms.</i>", "Gaspery", "zoeyCasual", "show", "right");
scene2c.createDialogue(gaspery, "Do you know what that is? Can you explain it to me?");
scene2c.createDialogue(zoey, "<br>What, the simulation hypothesis? Yeah. Basically, when you think of all the virtual reality and computer simulations we have right now, it’s simple to believe they’ll someday become advanced enough as to be indistinguishable from reality, right?");
scene2c.createDialogue(gaspery, "<i>She answers me readily without budging or lifting her eyelids.</i>");
scene2c.createDialogue(zoey, "So here the catch lies: who’s to say we’re not already living in a simulation?");
scene2c.createDialogue(gaspery, "I see");
scene2c.createDialogue(gaspery, "<i>She goes on, but it becomes background, and I fall asleep by my mother’s side. And when we both wake up, we see that mom has stopped breathing.</i>");
scene2c.createDialogue(gaspery, "<i>So we lay there for some time, breathing in the reality of it, and then go about the preparations.</i>");

let scene1c = new Scene("scene1c", scene2c, nightCityOld);
scene1c.createDialogue(generic, "<br>The old, rundown neighborhood, in Moon Colony 2 of Night City, if where Gaspery spent his childhood. In the background is Olive Llewellyn’s boarded-up childhood home, where Talia’s family now resides. In the distance is the edge of the dome, littered with trash, and in the far distance, the Moon Colony One is seen in its opaque sheen.", "Narrator");
scene1c.createDialogue(gaspery, "<br>The Night City was nicknamed for its lack of an atmosphere that otherwise would have concealed the reaches of space outside a cloak of pale blue and clouds. Whether it was during its two weeks of day, or two weeks of night, the malfunctioning dome made it so residents of Moon Colony Two could only see blackness when they looked up.", "Gaspery", "gasperyLoser", "show", "center");
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
scene2b.createDialogue(olive, "<br>When Europeans had been traveling what would later be called British Columbia, they encountered a strange phenomenon. Despite the hundreds of miles of shores traveled, they would be met with empty islands, devoid of all life. When they finally found villages, they still found this to be true, because the villages had been filled with corpses. Human remains were strewn everywhere, and later, skeletons on the beach.", "Olive", "oliveTalking", "show", "center");
scene2b.createDialogue(olive, "Smallpox had arrived");
scene2b.createDialogue(olive, "Before the Europeans, it was the Romans who had the disease. They believed it came because of the desecration of a temple. It seems silly now, but it shows how illness has carried—still carries—a terrible mystery.");
scene2b.createDialogue(olive, "Even now, over 500 years after smallpox in the 1700s, illness is still a kind of unknown. We don’t know why some people die sickly, or why others with the same illness recover and live long and happy lives. It feels completely random, in the cruelest of ways.");

let scene1b = new Scene("scene1b", scene2b, parkOlive);
scene1b.createDialogue(olive, "<i>There’s something to be said for looking up at a clear blue sky and knowing it isn’t a dome.*</i>", "Olive", "oliveBasic", "show", "left");
scene1b.createDialogue(olive, "<i>I liked to take walks in between being on tour and being at my hotel. It grounded me a little, and also gave me the chance to drink in the pure nature that people on Earth took for granted.</i>");
scene1b.createDialogue(olive, "Ow!");
scene1b.createDialogue(olive, "<i>There's something in my shoe</i>", "olive", "burr", "show", "center");
scene1b.createDialogue(olive, "<i>At first I thought it was biotech, but upon further investigation they turned out to be real. No, real wasn’t the word for it. Everything that can be touched is real.*</i>");
scene1b.createDialogue(olive, "<br><i>What I saw was a symbol of another world, something so Earthlike it might as well have been screaming it from the rooftops. I packed a few of them into a sock for safe keeping</i>", "Olive", "burr", "hide", "center");

let afterFlashback = new Scene("afterFlashback", scene1b, hotelRoom);
afterFlashback.createDialogue(generic, "<br>Olive is a famous author, currently on tour in 2203 for her accredited book, Marienbad. She had been raised on the Moon Colonies, a fact that sometimes raised pity in others, which in turn annoyed her.", "Narrator");
afterFlashback.createDialogue(generic, "<br>She looked forward to phone calls with her husband(an architect), but also hated them, because they reminded her of what she was missing while she was away.", "Narrator");
afterFlashback.createDialogue(husband, "Have I told you about the new project I’ve been assigned?","Husband", "husbandSprite", "show", "right");
afterFlashback.createDialogue(husband, "It's some kind of center for physics or something, but the blueprints are really weird.");
afterFlashback.createDialogue(olive, "What kind of weird?", "Olive", "oliveBasic", "show", "left");
afterFlashback.createDialogue(husband, "<br>There’s like, a tunnel? Connecting to our Security Headquarters. Whatever that’s for. And there’s so many passageways between this building—the physics one—and this other government building, that they’re nearly the same thing. I’m not sure what to think of it.");
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
    Scene.setScene(scene2b);
}
