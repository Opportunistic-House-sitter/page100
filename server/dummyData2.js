
"use strict";
var Book = require("./../server/Book/bookModel.js");

module.exports = function() {

 function errorHandler(err) {
    if (err) {
      console.log("error saving to db");
      console.log(err);
    }
  }

  var book51 = new Book({
    title: "Count of Monte Cristo",
    author: "Alexandre Dumas",
    genre: "Classic",
    sample: "Aramis made no reply. He was eager to leave the Bastile, where the secret which overwhelmed him seemed to double the weight of the walls.",
    amazonLink: "http://www.amazon.com/Count-Monte-Cristo-Alexandre-Dumas/dp/1853277333",
    image: "https://covers.openlibrary.org/b/id/902510-M.jpg"
  });

  var book52 = new Book({
    title: "The Rome Express",
    author: "Arthur Griffiths",
    genre: "Mystery",
    sample: "The Countess protested, but vainly, against this new indignity. What could she do?",
    amazonLink: "The Countess protested, but vainly, against this new indignity. What could she do?",
    image: "https://ia700807.us.archive.org/zipview.php?zip=/33/items/olcovers280/olcovers280-L.zip&file=2809145-L.jpg"
  });

  var book53 = new Book({
    title: "The Red Thumb Mark",
    author: "R. Austin Freeman",
    genre: "Mystery",
    sample: "Accordingly he proceeded to brush the bulb of the thumb with a well-soaked badger-hair nail-brush, and, having rinsed it in water, dried it with a silk handkerchief, and gave it a final rub on a piece of chamois leather.",
    amazonLink: "http://www.amazon.com/Red-Thumb-Mark-Austin-Freeman/dp/1604507519/ref=sr_1_1?s=books&ie=UTF8&qid=1435559253&sr=1-1&keywords=the+red+thumb+mark&pebp=1435559256251&perid=0MQP2S01PXGA8EAXMQYX",
    image: "https://ia600807.us.archive.org/zipview.php?zip=/18/items/olcovers31/olcovers31-L.zip&file=310197-L.jpg"
  });

  var book54 = new Book({
    title: "Dead Men's Money",
    author: "J. S. Fletcher",
    genre: "Mystery",
    sample: "But when we had got back to our own district we were quickly at a dead loss. The folk at Cornhill station remembered the man well enough. He had arrived there about half-past eight the previous evening.",
    amazonLink: "http://www.amazon.com/Dead-Mens-Money-J-Fletcher/dp/1484136519/ref=sr_1_1?s=books&ie=UTF8&qid=1435559436&sr=1-1&keywords=dead+men%27s+money&pebp=1435559437688&perid=1AQ995TS9MHG3V9B0P6F",
    image: "https://ia700807.us.archive.org/zipview.php?zip=/33/items/olcovers200/olcovers200-L.zip&file=2003115-L.jpg"
  });

  var book55 = new Book({
    title: "The Diamond Lens",
    author: "Fitz-James O'brien",
    genre: "Fiction",
    sample: "I can not at all describe the effect that these extraordinary communications had upon me. I felt completely bewildered. No biological theory could account for the discovery of the lens.",
    amazonLink: "http://www.amazon.com/Diamond-Lens-Fitz-James-Obrien/dp/1444459600/ref=sr_1_1?s=books&ie=UTF8&qid=1435559849&sr=1-1&keywords=the+diamond+lens&pebp=1435559852224&perid=1VTXPVHFS3KEA4VF6M7Q",
    image: "https://ia700802.us.archive.org/zipview.php?zip=/2/items/olcovers86/olcovers86-L.zip&file=867226-L.jpg"
  });

  var book56 = new Book({
    title: "A Crystal Age ",
    author: "W. H. Hudson",
    genre: "Fiction",
    sample: "Naturally, at this juncture, I began to draw a parallel between my case and that of an ancient historical personage, whose name is familiar to most.",
    amazonLink: "http://www.amazon.com/Crystal-Age-William-Henry-Hudson/dp/1682041689/ref=sr_1_1?s=books&ie=UTF8&qid=1435560118&sr=1-1&keywords=a+crystal+age&pebp=1435560120271&perid=10JXXPHDSS2JTDEW9W7Q",
    image: "https://ia700807.us.archive.org/zipview.php?zip=/2/items/olcovers282/olcovers282-L.zip&file=2821417-L.jpg"
  });

  var book57 = new Book({
    title: "The Teeth of the Tiger",
    author: "Maurice Leblanc",
    genre: "Fiction",
    sample: "He had only to push both doors to open them; and, with his electric lantern in his hand, he went up to the bed. Hippolyte Fauville was sleeping with his face turned to the wall.",
    amazonLink: "http://www.amazon.com/Teeth-Tiger-Maurice-Leblanc/dp/1514626373/ref=sr_1_3?s=books&ie=UTF8&qid=1435560494&sr=1-3&keywords=the+teeth+of+the+tiger",
    image: "https://ia700807.us.archive.org/zipview.php?zip=/7/items/olcovers298/olcovers298-L.zip&file=2981409-L.jpg"
  });

  var book58 = new Book({
    title: "The Trial",
    author: "Franz Kafka",
    genre: "Modernism",
    sample: "The woman waved down at K. and by raising and lowering her shoulders she tried to show that she was an innocent party in this abduction, although the gesture did not show a lot of regret.",
    amazonLink: "http://www.amazon.com/Trial-Franz-Kafka/dp/1612931030/ref=sr_1_2?s=books&ie=UTF8&qid=1435561315&sr=1-2&keywords=kafka+the+trial",
    image: "https://ia801403.us.archive.org/zipview.php?zip=/20/items/olcovers9/olcovers9-L.zip&file=97644-L.jpg"
  });

  var book59 = new Book({
    title: "The Wendigo",
    author: "Algernon Blackwood",
    genre: "Horror",
    sample: "Between the two lonely figures within, however, there pressed another shadow that was not a shadow from the night.",
    amazonLink: "http://www.amazon.com/Wendigo-Algernon-Blackwood/dp/1482597705/ref=sr_1_1?s=books&ie=UTF8&qid=1435561537&sr=1-1&keywords=the+wendigo+algernon+blackwood&pebp=1435561539831&perid=0P7E3N9DPHWJYE9500T9",
    image: "https://ia600807.us.archive.org/zipview.php?zip=/2/items/olcovers85/olcovers85-L.zip&file=854437-L.jpg"
  });

  var book60 = new Book({
    title: "The Last Days of Pompeii",
    author: "Baron Edward Bulwer Lytton Lytton",
    genre: "Historical Fiction",
    sample: "The reader will now have a tolerable notion of the Pompeian houses, which resembled in some respects the Grecian, but mostly the Roman fashion of domestic architecture.",
    amazonLink: "http://www.amazon.com/Last-Pompeii-Edward-George-Bulwer-Lytton/dp/1495958469/ref=sr_1_1?s=books&ie=UTF8&qid=1435561732&sr=1-1&keywords=the+last+days+of+pompeii&pebp=1435561734193&perid=<1GQMQGZTHC48WE6MECQS></1GQMQGZTHC48WE6MECQS>",
    image: "http://ecx.images-amazon.com/images/I/41ybm7h5bsL.jpg"
  });

  var book61 = new Book({
    title: "The Yellow Wallpaper",
    author: "Charlotte Perkins Gilman",
    genre: "Fiction",
    sample: "At night in any kind of light, in twilight, candle light, lamplight, and worst of all by moonlight, it becomes bars! The outside pattern I mean, and the woman behind it is as plain as can be.",
    amazonLink: "http://www.amazon.com/Yellow-Wallpaper-Charlotte-Perkins-Gilman/dp/091406116X",
    image: "https://ia600806.us.archive.org/zipview.php?zip=/12/items/olcovers17/olcovers17-L.zip&file=175954-L.jpg"
  });

  var book62 = new Book({
    title: "Beowulf",
    author: "Unknown",
    genre: "Classic",
    sample: "Judge of their actions, All-wielding Ruler,\nNo praise could they give the Guardian of Heaven,\nThe Wielder of Glory. Woe will be his who\nThrough furious hatred his spirit shall drive to\nThe clutch of the fire, no comfort shall look for,\nWax no wiser; well for the man who,\nLiving his life-days, his Lord may face\nAnd find defence in his Father's embrace!\n",
    amazonLink: "http://www.amazon.com/Beowulf-Verse-Translation-Bilingual-Edition/dp/0393320979",
    image: "https://jmichaelrios.files.wordpress.com/2012/03/beowulf-cover.jpg"
  });
  var book63 = new Book({
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    genre: "Classic",
    sample: "'What following and in its next bearer's gripe\nIt wrought, is now by Cassius and Brutus\nBark'd off in hell, and by Perugia's sons\nAnd Modena's was mourn'd.  Hence weepeth still\nSad Cleopatra, who, pursued by it,\nTook from the adder black and sudden death.\nWith him it ran e'en to the Red Sea coast;\nWith him compos'd the world to such a peace,\nThat of his temple Janus barr'd the door.\n'",
    amazonLink: "http://www.amazon.com/Divine-Comedy-Inferno-Purgatorio-Paradiso/dp/0451208633/ref=sr_1_1?s=books&ie=UTF8&qid=1435602349&sr=1-1&keywords=divine+comedy",
    image: "https://ia700802.us.archive.org/zipview.php?zip=/33/items/olcovers97/olcovers97-L.zip&file=973268-L.jpg"
  });
  var book64 = new Book({
    title: "The Lake Dwellings of Ireland",
    author: "W. G. Wood-Martin",
    genre: "Non-fiction",
    sample: "It is only after drainage on a great, or rather thorough scale, that anything like complete inspection of the original structure of a lake dwelling, or any extensive “find” can be hoped for, the majority of such sites being surrounded by soft pulpy bog to such a depth and extent as to bewilder the most enthusiastic explorer.",
    amazonLink: "http://www.amazon.com/Lake-Dwellings-Ireland-Lacustrine-Habitations/dp/0946308705/ref=sr_1_1?s=books&ie=UTF8&qid=1435605238&sr=1-1&keywords=lake+dwellings+of+ireland",
    image: "https://ia700800.us.archive.org/zipview.php?zip=/8/items/olcovers573/olcovers573-L.zip&file=5736334-L.jpg"
  });

  var book65 = new Book({
    title: "Gaza: A City of Many Battles",
    author: "Theodore Edward Dowling",
    genre: "Non-fiction",
    sample: "Of seven towns along the Palestine and Syrian coast Ascalon was brought into the most frequent contact with the Crusaders, and Gaza received the fewest visits. ",
    amazonLink: "http://www.amazon.com/GAZA-CITY-MANY-BATTLES-PRESENT-ebook/dp/B0106K61WE/ref=sr_1_1?s=books&ie=UTF8&qid=1435605546&sr=1-1&keywords=gaza+city+of+many+battles&pebp=1435605548193&perid=1HNTR9DDPD0CR5T6GGYY",
    image: "http://img2.imagesbn.com/images/198180000/198186262.JPG"
  });

  var book66 = new Book({
    title: "Walden",
    author: "Henry David Thoreau",
    genre: "Non-fiction",
    sample: "In the savage state every family owns a shelter as good as the best, and sufficient for its coarser and simpler wants; but I think that I speak within bounds when I say that, though the birds of the air have their nests, and the foxes their holes, and the savages their wigwams, in modern civilized society not more than one half the families own a shelter. ",
    amazonLink: "http://www.amazon.com/Walden-Civil-Disobedience-Henry-Thoreau/dp/0451532163/ref=sr_1_1?s=books&ie=UTF8&qid=1435605688&sr=1-1&keywords=walden&pebp=1435605689516&perid=10KDNVN8HE4D87M13FRT",
    image: "https://ia800307.us.archive.org/zipview.php?zip=/0/items/olcovers229/olcovers229-L.zip&file=2294051-L.jpg"
  });

  var book67 = new Book({
    title: "The Prince and the Pauper",
    author: "Mark Twain",
    genre: "Historical-fiction",
    sample: "All those that were present had been well drilled within the hour to remember that the prince was temporarily out of his head, and to be careful to show no surprise at his vagaries.  These 'vagaries' were soon on exhibition before them; but they only moved their compassion and their sorrow, not their mirth.  It was a heavy affliction to them to see the beloved prince so stricken",
    amazonLink: "http://www.amazon.com/Prince-Pauper-Dover-Thrift-Editions/dp/0486411109/ref=sr_1_1?s=books&ie=UTF8&qid=1435605959&sr=1-1&keywords=prince+and+the+pauper",
    image: "https://ia700809.us.archive.org/zipview.php?zip=/1/items/olcovers469/olcovers469-L.zip&file=4694074-L.jpg"
  });

  var book68 = new Book({
    title: "Persuasion",
    author: "Jane Austen",
    genre: "Fiction",
    sample: "The Crofts took possession with true naval alertness, and were to be visited.  Mary deplored the necessity for herself.  'Nobody knew how much she should suffer.  She should put it off as long as she could;' but was not easy till she had talked Charles into driving her over on an early day, and was in a very animated, comfortable state of   imaginary agitation, when she came back. ",
    amazonLink: "http://www.amazon.com/Persuasion-Jane-Austen/dp/150329031X/ref=sr_1_1?s=books&ie=UTF8&qid=1435606272&sr=1-1&keywords=persuasion+jane+austen",
    image: "https://janeausteninvermont.files.wordpress.com/2012/06/book-cover-persuasion-magnum1.jpg"
  });

  var book69 = new Book({
    title: "An Antarctic Mystery",
    author: "Jules Verne",
    genre: "Fiction",
    sample: "At seven o’clock in the evening of the 14th of August, the island being already wrapped in darkness, I was walking on the port after I had dined, walking briskly too, for it was cold, although dry weather. The sky was studded with stars and the air was very keen. I could not stay out long, and was returning to mine inn, when a man crossed my path, paused, came back, and stopped in front of me. It was the captain of the Halbrane.",
    amazonLink: "http://www.amazon.com/Antarctic-Mystery-Jules-Verne-ebook/dp/B00I7XD9I2/ref=sr_1_2?s=books&ie=UTF8&qid=1435612383&sr=1-2&keywords=antarctic+adventure+verne",
    image: "https://ia700807.us.archive.org/zipview.php?zip=/28/items/olcovers78/olcovers78-L.zip&file=780169-L.jpg"
  });

  var book70 = new Book({
    title: "The Lair of the White Worm",
    author: "Bram Stoker",
    genre: "Horror",
    sample: "The fear and restraint which brooded amongst the denizens of the air began to affect all life.  Not only did the birds cease song or chirp, but the lowing of the cattle ceased in the fields and the varied sounds of life died away.  In place of these things was only a soundless gloom, more dreadful, more disheartening, more soul-killing than any concourse of sounds, no matter how full of fear and dread.",
    amazonLink: "http://www.amazon.com/Lair-White-Worm-Bram-Stoker/dp/1512231487/ref=sr_1_2?s=books&ie=UTF8&qid=1435612601&sr=1-2&keywords=lair+of+the+white+worm",
    image: "https://ia700808.us.archive.org/zipview.php?zip=/14/items/olcovers644/olcovers644-L.zip&file=6443956-L.jpg"
  });

  var book71 = new Book({
    title: "The Jewel of Seven Stars",
    author: "Bram Stoker",
    genre: "Horror",
    sample: "We heard the clock in the corridor chiming the quarters with its silver bell till two o'clock; and then a strange feeling came over me.  I could see from Miss Trelawny's movement as she looked round, that she also had some new sensation.  The new detective had just looked in; we two were alone with the unconscious patient for another quarter of an hour.",
    amazonLink: "http://www.amazon.com/Jewel-Seven-Stars-Penguin-Classics-ebook/dp/B002RI9XR4/ref=sr_1_3?s=books&ie=UTF8&qid=1435612745&sr=1-3&keywords=jewel+of+seven+stars",
    image: "https://s-media-cache-ak0.pinimg.com/originals/62/68/b7/6268b759f1e736241321ae10c5f08e3f.jpg"
  });

  var book72 = new Book({
    title: "Faust",
    author: "Johann Wolfgang Von Goethe",
    genre: "Poetry",
    sample: "Why, therefore, yield to such depression?\nA good man does his honest share\nIn exercising, with the strictest care,\nThe art bequeathed to his possession!\nDost thou thy father honor, as a youth?\nThen may his teaching cheerfully impel thee:\nDost thou, as man, increase the stores of truth?\nThen may thine own son afterwards excel thee.\n",
    amazonLink: "http://www.amazon.com/Faust-Johann-Wolfgang-Von-Goethe/dp/1503262146/ref=sr_1_1?s=books&ie=UTF8&qid=1435613110&sr=1-1&keywords=faust&pebp=1435613126202&perid=049E3S1EAK38GA71HRB4",
    image: "https://ia700808.us.archive.org/zipview.php?zip=/7/items/olcovers88/olcovers88-L.zip&file=882601-L.jpg"
  });
  var book73 = new Book({
    title: "Songs of Innocence, and Songs of Experience",
    author: "William Blake",
    genre: "Poetry",
    sample: "In what distant deeps or skies\nBurnt the fire of thine eyes?\nOn what wings dare he aspire?\nWhat the hand dare seize the fire?\n\nAnd what shoulder and what art\nCould twist the sinews of thy heart?\nAnd, when thy heart began to beat,\nWhat dread hand and what dread feet?",
    amazonLink: "http://www.amazon.com/Songs-Innocence-Experience-William-Blake/dp/159986844X/ref=sr_1_2?s=books&ie=UTF8&qid=1435613368&sr=1-2&keywords=blake+songs+of+innocence+and+experience",
    image: "https://ia700807.us.archive.org/zipview.php?zip=/33/items/olcovers200/olcovers200-L.zip&file=2007307-L.jpg"
  });
  var book74 = new Book({
    title: "The Shunned House",
    author: "H. P. Lovecraft",
    genre: "Horror",
    sample: "Meanwhile poor Rhoby Harris, in her madness, gave voice to dreams and imaginings of the most hideous sort. At times her screams became insupportable, and for long periods she would utter shrieking horrors which necessitated her son's temporary residence with his cousin, Peleg Harris, in Presbyterian Lane near the new college building.",
    amazonLink: "http://www.amazon.com/Shunned-House-Tale-Revolting-Horror/dp/1500173355/ref=sr_1_4?s=books&ie=UTF8&qid=1435613725&sr=1-4&keywords=shunned+house",
    image: "http://a5.mzstatic.com/us/r30/Publication/v4/29/31/e6/2931e648-390b-9f59-7e92-575926e52b2b/cover225x225.jpeg"
  });

  var book75 = new Book({
    title: "Great-Heart",
    author: "Daniel Henderson",
    genre: "Non-fiction",
    sample: "On still another occasion Roosevelt was out on the plains when aregular blizzard came. The cattle began to drift before the storm. They were frightened and maddened by the quick, sharp flashes of lightning and the stinging rain. The men darted to and fro before them and beside them, heedless of danger, checking them at each point where they threatened to break through. The thunder was terrific.",
    amazonLink: "http://www.amazon.com/Great-Heart-Story-Theodore-Roosevelt-ebook/dp/B010MHXI0E/ref=sr_1_1?s=books&ie=UTF8&qid=1435613901&sr=1-1&keywords=great+heart+roosevelt",
    image: "http://www.amazon.com/Great-Heart-Story-Theodore-Roosevelt-ebook/dp/B010MHXI0E/ref=sr_1_1?s=books&ie=UTF8&qid=1435613901&sr=1-1&keywords=great+heart+roosevelt"
  });

  var book76 = new Book({
    title: "The Woman in White",
    author: "Wilkie Collins",
    genre: "Mystery",
    sample: "I entered the room again immediately.  The piano stood about half-way down along the inner wall.  On the side of the instrument farthest from the terrace Miss Halcombe was sitting with the letters scattered on her lap, and with one in her hand selected from them, and held close to the candle.",
    amazonLink: "http://www.amazon.com/Woman-White-Penguin-Classics/dp/0141439610/ref=sr_1_1?s=books&ie=UTF8&qid=1435614353&sr=1-1&keywords=woman+in+white",
    image: "https://ia802609.us.archive.org/zipview.php?zip=/26/items/olcovers105/olcovers105-L.zip&file=1057120-L.jpg"
  });

  var book77 = new Book({
    title: "Leviathan",
    author: "Leviathan",
    genre: "Non-fiction",
    sample: "If the Discourse be meerly Mentall, it consisteth of thoughts that the thing will be, and will not be; or that it has been, and has not been, alternately. So that wheresoever you break off the chayn of a mans Discourse, you leave him in a Praesumption of It Will Be, or, It Will Not Be; or it Has Been, or, Has Not Been.",
    amazonLink: "http://www.amazon.com/Leviathan-Penguin-Classics-Thomas-Hobbes/dp/0140431950/ref=sr_1_1?s=books&ie=UTF8&qid=1435614543&sr=1-1&keywords=leviathan+thomas+hobbes",
    image: "https://ia800307.us.archive.org/zipview.php?zip=/0/items/olcovers77/olcovers77-L.zip&file=770359-L.jpg"
  });

  var book78 = new Book({
    title: "Call of the Wild",
    author: "Jack London",
    genre: "Fiction",
    sample: "All that stirring of old instincts which at stated periods drives men out from the sounding cities to forest and plain to kill things by chemically propelled leaden pellets, the blood lust, the joy to kill--all this was Buck's, only it was infinitely more intimate.",
    amazonLink: "http://www.amazon.com/Call-Wild-Global-Classics/dp/1503302946/ref=sr_1_1?s=books&ie=UTF8&qid=1435614613&sr=1-1&keywords=call+of+the+wild&pebp=1435614614860&perid=184G3RG828CPZT50MH2A",
    image: "https://ia700807.us.archive.org/zipview.php?zip=/11/items/olcovers38/olcovers38-L.zip&file=381650-L.jpg"
  });

  var book79 = new Book({
    title: "On the Origin of Species",
    author: "Charles Darwin",
    genre: "Non-fiction",
    sample: "To sum up on the origin of our Domestic Races of animals and plants. I believe that the conditions of life, from their action on the reproductive system, are so far of the highest importance as causing variability. I do not believe that variability is an inherent and necessary contingency, under all circumstances, with all organic beings, as some authors have thought.",
    amazonLink: "http://www.amazon.com/Origin-Species-150th-Anniversary/dp/0451529065/ref=sr_1_1?s=books&ie=UTF8&qid=1435614776&sr=1-1&keywords=on+the+origin+of+species",
    image: "https://ia802702.us.archive.org/zipview.php?zip=/30/items/olcovers25/olcovers25-L.zip&file=253203-L.jpg"
  });

  var book80 = new Book({
    title: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    genre: "Fiction",
    sample: "It had not been the custom that Mistress Mary should do anything but stand and allow herself to be dressed like a doll, but before she was ready for breakfast she began to suspect that her life at Misselthwaite Manor would end by teaching her a number of things quite new to her--things such as putting on her own shoes and stockings, and picking up things she let fall. ",
    amazonLink: "http://www.amazon.com/Secret-Garden-Frances-Hodgson-Burnett/dp/0451528832/ref=sr_1_3?s=books&ie=UTF8&qid=1435614991&sr=1-3&keywords=secret+garden",
    image: "https://s-media-cache-ak0.pinimg.com/originals/56/53/a3/5653a39e3d503c2485abd244d5aa628e.jpg"
  });

  var book81 = new Book({
    title: "Turn of the Screw",
    author: "Henry James ",
    genre: "Horror",
    sample: "The flash of this knowledge--for it was knowledge in the midst of dread--produced in me the most extraordinary effect, started as I stood there, a sudden vibration of duty and courage. I say courage because I was beyond all doubt already far gone. I bounded straight out of the door again, reached that of the house, got, in an instant, upon the drive, and, passing along the terrace as fast as I could rush, turned a corner and came full in sight.",
    amazonLink: "http://www.amazon.com/Turn-Screw-Dover-Thrift-Editions/dp/0486266842/ref=sr_1_1?s=books&ie=UTF8&qid=1435616549&sr=1-1&keywords=turn+of+the+screw&pebp=1435616555626&perid=13RMQEKBD78WNB8GP3ND",
    image: "https://ia802702.us.archive.org/zipview.php?zip=/30/items/olcovers25/olcovers25-L.zip&file=252364-L.jpg"
  });

  var book82 = new Book({
    title: "Hamlet, Prince of Denmark",
    author: "William Shakespeare",
    genre: "Classic",
    sample: "Full thirty times hath Phoebus' cart gone round\nNeptune's salt wash and Tellus' orbed ground,\nAnd thirty dozen moons with borrow'd sheen\nAbout the world have times twelve thirties been,\nSince love our hearts, and Hymen did our hands,\nUnite commutual in most sacred bands.\n",
    amazonLink: "http://www.amazon.com/Hamlet-Folger-Library-Shakespeare-William/dp/074347712X/ref=sr_1_1?s=books&ie=UTF8&qid=1435616875&sr=1-1&keywords=hamlet&pebp=1435616878332&perid=0F3K8GRPEHR7PMJM4T08",
    image: "https://ia700805.us.archive.org/zipview.php?zip=/16/items/olcovers10/olcovers10-L.zip&file=106923-L.jpg"
  });

  var book83 = new Book({
    title: "The Fall of the House of Usher",
    author: "Edgar Allen Poe",
    genre: "Horror",
    sample: "Oppressed, as I certainly was, upon the occurrence of the second and most extraordinary coincidence, by a thousand conflicting sensations, in which wonder and extreme terror were predominant, I still retained sufficient presence of mind to avoid exciting, by any observation, the sensitive nervousness of my companion.",
    amazonLink: "http://www.amazon.com/Fall-House-Usher-Edgar-Allan/dp/1496101243/ref=sr_1_2?s=books&ie=UTF8&qid=1435617181&sr=1-2&keywords=fall+of+the+house+of+usher",
    image: "https://ia700805.us.archive.org/zipview.php?zip=/16/items/olcovers10/olcovers10-L.zip&file=106213-L.jpg"
  });

  var book84 = new Book({
    title: "White Fang",
    author: "Jack London",
    genre: "Fiction",
    sample: "But he was not destined to enjoy that bed.  Before his eyes closed the wolves had drawn too near for safety.  It no longer required an effort of the vision to see them.  They were all about him and the fire, in a narrow circle, and he could see them plainly in the firelight lying down, sitting up, crawling forward on their bellies, or slinking back and forth.",
    amazonLink: "http://www.amazon.com/White-Fang-Jack-London/dp/1505313104/ref=sr_1_1?s=books&ie=UTF8&qid=1435617333&sr=1-1&keywords=white+fang",
    image: "https://ia700805.us.archive.org/zipview.php?zip=/7/items/olcovers699/olcovers699-L.zip&file=6998247-L.jpg"
  });

  var book85 = new Book({
    title: "Autobiography of Yogi",
    author: "Paramhansa Yogananda",
    genre: "Non-fiction",
    sample: "My keen love of travel was seldom hindered by Father. He permitted me, even as a mere boy, to visit many cities and pilgrimage spots. Usually one or more of my friends accompanied me; we would travel comfortably on first-class passes provided by Father. His position as a railroad official was fully satisfactory to the nomads in the family.",
    amazonLink: "http://www.amazon.com/Autobiography-Self-Realization-Fellowship-Paramahansa-Yogananda/dp/0876120796/ref=sr_1_1?s=books&ie=UTF8&qid=1435617467&sr=1-1&keywords=autobiography+of+a+yogi&pebp=1435617470322&perid=191B5PXGT2JA8TQ0ARM5",
    image: "https://ia700804.us.archive.org/zipview.php?zip=/34/items/olcovers104/olcovers104-L.zip&file=1046217-L.jpg"
  });

  var book86 = new Book({
    title: "The Island of Doctor Moreau",
    author: "H. G. Wells",
    genre: "Then began a curious three-cornered altercation. Alternately I appealed to one and another of the three men,--first to the grey-haired man to let me land, and then to the drunken captain to keep me aboard.  I even bawled entreaties to the sailors. Montgomery said never a word, only shook his head.",
    amazonLink: "http://www.amazon.com/Island-Doctor-Moreau-H-G-Wells/dp/1619492334/ref=sr_1_1?s=books&ie=UTF8&qid=1435617952&sr=1-1&keywords=island+of+doctor+moreau&pebp=1435617953649&perid=1NF7N33XWCXBDVAQDYC3",
    image: "https://chrislatray.files.wordpress.com/2010/02/dr_moreau.jpg"
  });

  var book87 = new Book({
    title: "Buffalo Bill from Prairie to Palace",
    author: "John M. Burke",
    genre: "Non-fiction",
    sample: "The first performance given in Manchester was complimentary, and the entire beauty, rank, and fashion of Manchester and the surrounding towns were invited guests. The mayors, town councils, corporation officials, prominent merchants and manufacturers, bishops and clergy of all denominations, and an able-bodied horde of pressmen came down in their thousands. From Liverpool, across country through Leeds and York to Hull and New Castle, and from Carlisle, as far south as Birmingham, everybody of consequence was present, and the immense building was filled to its utmost capacity.",
    amazonLink: "http://www.amazon.com/Buffalo-Bill-Prairie-Authentic-History/dp/116597651X/ref=sr_1_1?s=books&ie=UTF8&qid=1435618593&sr=1-1&keywords=buffalo+bill+from+prairie+to+palace&pebp=1435618595058&perid=0AD5G2VD2WPVXNPPRQYY",
    image: "https://ia600802.us.archive.org/zipview.php?zip=/21/items/olcovers167/olcovers167-L.zip&file=1671710-L.jpg"
  });

  var book88 = new Book({
    title: "The Man Who Would Be King",
    author: "Rudyard Kipling",
    genre: "Fiction",
    sample: "Then I headed for the Great Indian Desert upon the proper date, as I had promised, and the night Mail set me down at Marwar Junction, where a funny little, happy-go-lucky, native managed railway runs to Jodhpore. The Bombay Mail from Delhi makes a short halt at Marwar. ",
    amazonLink: "http://www.amazon.com/Man-Would-King-Other-Stories/dp/0486280519/ref=sr_1_1?s=books&ie=UTF8&qid=1435618929&sr=1-1&keywords=the+man+who+would+be+king",
    image: "https://ia700802.us.archive.org/zipview.php?zip=/18/items/olcovers289/olcovers289-L.zip&file=2890121-L.jpg"
  });

  var book89 = new Book({
    title: "House of Mirth",
    author: "Edith Wharton",
    genre: "Historical-fiction",
    sample: "Mrs. Peniston, under ordinary circumstances, was as much bored by her excellent cousin as the recipient of such services usually is by the person who performs them. She greatly preferred the brilliant and unreliable Lily, who did not know one end of a crochet-needle from the other, and had frequently wounded her susceptibilities by suggesting that the drawing-room should be 'done over.'",
    amazonLink: "http://www.amazon.com/House-Mirth-Dover-Thrift-Editions/dp/0486420493/ref=sr_1_1?s=books&ie=UTF8&qid=1435619182&sr=1-1&keywords=house+of+mirth&pebp=1435619183203&perid=0DTTSMWRK33X2EBT2KM9",
    image: "https://ia800305.us.archive.org/zipview.php?zip=/20/items/olcovers90/olcovers90-L.zip&file=902440-L.jpg"
  });

  var book90 = new Book({
    title: "All About Coffee",
    author: "William H. Ukers",
    genre: "Non-fiction",
    sample: "Former patients in Mocha who sought out the good doctor-priest in his Ousab retreat, for physic with which to cure their ills, were given some of this decoction, with beneficial effect. As a result of the stories of its magical properties, carried back to the city, Sheik Omar was invited to return in triumph to Mocha where the governor caused to be built a monastery for him and his companions.",
    amazonLink: "http://www.amazon.com/All-about-Coffee-History-Beverage/dp/1440556318/ref=sr_1_1?s=books&ie=UTF8&qid=1435619257&sr=1-1&keywords=all+about+coffee&pebp=1435619259355&perid=1Z4FQ0YK8RTQ7NSHRX47",
    image: "http://img2.imagesbn.com/p/9781614270027_p0_v1_s260x420.JPG"
  });

  var book91 = new Book({
    title: "The Beautiful and the Damned",
    author: " F. Scott Fitzgerald",
    genre: "Historical Fiction",
    sample: "Maury paused, and in his answer, when it came, there was a measure of weariness, a bitter overnote that lingered for a moment in those three minds before it floated up and off like a bubble bound for the moon.",
    amazonLink: "http://www.amazon.com/Beautiful-Damned-Twentieth-Century-Classic/dp/1557420580/ref=sr_1_1?s=books&ie=UTF8&qid=1435619473&sr=1-1&keywords=beautiful+and+the+damned",
    image: "https://ia800308.us.archive.org/zipview.php?zip=/27/items/olcovers29/olcovers29-L.zip&file=295889-L.jpg"
  });

  var book92 = new Book({
    title: "The Symbolism of Freemasonry",
    author: "Albert G. Mackey",
    genre: "Non-fiction",
    sample: "One of these lines of religious thought and sentiment was the idolatrous and pagan world. With it all masonic doctrine, at least in its purity, was extinct, although there mingled with it, and at times to some extent influenced it, an offshoot from the other line, to which attention will be soon directed.",
    amazonLink: "http://www.amazon.com/Symbolism-Freemasonry-Albert-G-Mackey/dp/146359089X/ref=sr_1_1?s=books&ie=UTF8&qid=1435619657&sr=1-1&keywords=symbolism+of+freemasonry",
    image: "http://d.gr-assets.com/books/1328324134l/8291529.jpg"
  });
  var book93 = new Book({
    title: "My Life and Work",
    author: "Henry Ford",
    genre: "Non-fiction",
    sample: "All of our people come into the factory or the offices through the employment departments. As I have said, we do not hire experts--neither do we hire men on past experiences or for any position other than the lowest. Since we do not take a man on his past history, we do not refuse him because of his past history. I never met a man who was thoroughly bad.",
    amazonLink: "http://www.amazon.com/My-Life-Work-Autobiography-Henry/dp/149428300X/ref=sr_1_1?s=books&ie=UTF8&qid=1435619882&sr=1-1&keywords=my+life+henry+ford&pebp=1435619883842&perid=08BKB3HZP97Q3ER2NHWA",
    image: "https://ia700803.us.archive.org/zipview.php?zip=/10/items/olcovers178/olcovers178-L.zip&file=1788302-L.jpg"
  });
  var book94 = new Book({
    title: "Twenty Years After",
    author: "Alexandre Dumas",
    genre: "Fiction",
    sample: "There was little change in the cardinal; still dressed with sedulous care, his hair well arranged and curled, his person perfumed, he looked, owing to his extreme taste in dress, only half his age. But Rochefort, who had passed five years in prison, had become old in the lapse of a few years; the dark locks of this estimable friend of the defunct Cardinal Richelieu were now white; the deep bronze of his complexion had been succeeded by a mortal pallor which betokened debility.",
    amazonLink: "http://www.amazon.com/Twenty-Years-Oxford-Worlds-Classics/dp/0199537267/ref=sr_1_1?s=books&ie=UTF8&qid=1435620092&sr=1-1&keywords=twenty+years+later",
    image: "http://www.amazon.com/Twenty-Years-Oxford-Worlds-Classics/dp/0199537267/ref=sr_1_1?s=books&ie=UTF8&qid=1435620092&sr=1-1&keywords=twenty+years+later"
  });

  var book95 = new Book({
    title: "The Night Land",
    author: "William Hope Hodgson ",
    genre: "Horror",
    sample: "The evil must surely have begun in the Days of the Darkening (which I might liken to a story which was believed doubtfully, much as we of this day believe the story of the Creation). A dim record there was of olden sciences (that are yet far off in our future) which, disturbing the unmeasurable Outward Powers, had allowed to pass the Barrier of Life some of those Monsters and Ab-human creatures, which are so wondrously cushioned from us at this normal present. ",
    amazonLink: "http://www.amazon.com/Night-Land-William-Hope-Hodgson/dp/1482363089/ref=sr_1_1?ie=UTF8&qid=1435620317&sr=8-1&keywords=the+night+land&pebp=1435620321796&perid=174M6Y5FER2TA1RFWPAF",
    image: "http://nightland.website/images/nightcover5.jpg"
  });

  var book96 = new Book({
    title: "The Underground Railroad",
    author: "William Still",
    genre: "Non-fiction",
    sample: "In the meanwhile the brothers had passed safely on to New Bedford, but Clarissa remained secluded, 'waiting for the storm to subside.'' Keeping up courage day by day, for seventy-five days, with the fear of being detected and severely punished, and then sold, after all her hopes and struggles, required the faith of a martyr.",
    amazonLink: "http://www.amazon.com/Underground-Railroad-Authentic-Narratives-First-Hand/dp/048645553X/ref=sr_1_1?ie=UTF8&qid=1435620694&sr=8-1&keywords=william+still+underground+railroad",
    image: "https://ia601407.us.archive.org/zipview.php?zip=/1/items/olcovers275/olcovers275-L.zip&file=2757634-L.jpg"
  });

  var book97 = new Book({
    title: "Four Weird Tales",
    author: "Algernon Blackwood",
    genre: "Fiction",
    sample: "But the questions, once started in his mind, continued. He must find explanation of one kind or another before he could lie down and sleep, and he found it at length in--the stars. The man was an astronomer of sorts; possibly an astrologer into the bargain",
    amazonLink: "http://www.amazon.com/Four-Weird-Tales-Algernon-Blackwood-ebook/dp/B00849DHFO/ref=sr_1_1?ie=UTF8&qid=1435620821&sr=8-1&keywords=four+weird+tales&pebp=1435620822681&perid=1AX7NXXK3C2NFQDRBBA1",
    image: "https://ia700809.us.archive.org/zipview.php?zip=/5/items/olcovers187/olcovers187-L.zip&file=1876764-L.jpg"
  });

  var book98 = new Book({
    title: "Chronicles of the Imp",
    author: "Jeffery Farnol",
    genre: "Fiction",
    sample: "About his waist was a broad-buckled belt, which supported a wooden cutlass, two or three murderous wooden daggers and a brace of toy pistols; while upon his legs were a pair of top-boots many sizes too large for him, so that walking required no little care.",
    amazonLink: "http://www.amazon.com/Chronicles-Imp-Jeffery-Farnol/dp/B00GZMXR4S/ref=sr_1_1?ie=UTF8&qid=1435620995&sr=8-1&keywords=chronicles+of+the+imp&pebp=1435620996670&perid=1GEAZXX80797ED70EJVK",
    image: "https://www.gutenberg.org/cache/epub/49282/pg49282.cover.medium.jpg"
  });

  var book99 = new Book({
    title: "Three Men in a Boat",
    author: "Jerome K. Jerome ",
    genre: "Fiction",
    sample: "Montmorency hailed this compromise with much approval.  He does not revel romantic solitude.  Give him something noisy; and if a trifle low, so much the jollier.  To look at Montmorency you would imagine that he was an angel sent upon the earth, for some reason withheld from mankind, in the shape of a small fox-terrier. ",
    amazonLink: "http://www.amazon.com/Three-Men-Boat-Jerome-K/dp/1512099899/ref=sr_1_1?ie=UTF8&qid=1435621169&sr=8-1&keywords=three+men+in+a+boat",
    image: "https://ia700805.us.archive.org/zipview.php?zip=/16/items/olcovers10/olcovers10-L.zip&file=100505-L.jpg"
  });

  var book100 = new Book({
    title: "The Secret Adversary",
    author: "Agatha Christie",
    genre: "Mystery",
    sample: "'On the contrary, I have every reason to believe he is an Englishman. He was pro-German, as he would have been pro-Boer. What he seeks to attain we do not know--probably supreme power for himself, of a kind unique in history. We have no clue as to his real personality. It is reported that even his own followers are ignorant of it.'",
    amazonLink: "http://www.amazon.com/Secret-Adversary-Agatha-Christie/dp/1495950816/ref=sr_1_1?ie=UTF8&qid=1435621403&sr=8-1&keywords=the+secret+adversary&pebp=1435621405269&perid=10W7JVD1Y41J4GX6DW92",
    image: "https://ia700807.us.archive.org/zipview.php?zip=/21/items/olcovers213/olcovers213-L.zip&file=2131875-L.jpg"
  });


    book51.save(errorHandler);
    book52.save(errorHandler);
    book53.save(errorHandler);
    book54.save(errorHandler);
    book55.save(errorHandler);
    book56.save(errorHandler);
    book57.save(errorHandler);
    book58.save(errorHandler);
    book59.save(errorHandler);
    book60.save(errorHandler);
    book61.save(errorHandler);
    book62.save(errorHandler);
    book63.save(errorHandler);
    book64.save(errorHandler);
    book65.save(errorHandler);
    book66.save(errorHandler);
    book67.save(errorHandler);
    book68.save(errorHandler);
    book69.save(errorHandler);
    book70.save(errorHandler);
    book71.save(errorHandler);
    book72.save(errorHandler);
    book73.save(errorHandler);
    book74.save(errorHandler);
    book75.save(errorHandler);
    book76.save(errorHandler);
    book77.save(errorHandler);
    book78.save(errorHandler);
    book79.save(errorHandler);
    book80.save(errorHandler);
    book81.save(errorHandler);
    book82.save(errorHandler);
    book83.save(errorHandler);
    book84.save(errorHandler);
    book85.save(errorHandler);
    book86.save(errorHandler);
    book87.save(errorHandler);
    book88.save(errorHandler);
    book89.save(errorHandler);
    book90.save(errorHandler);
    book91.save(errorHandler);
    book92.save(errorHandler);
    book93.save(errorHandler);
    book94.save(errorHandler);
    book95.save(errorHandler);
    book96.save(errorHandler);
    book97.save(errorHandler);
    book98.save(errorHandler);
    book99.save(errorHandler);
    book100.save(errorHandler);

};
