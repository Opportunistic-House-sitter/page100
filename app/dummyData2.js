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
    amazonLink: "http://www.amazon.com/Count-Monte-Cristo-Alexandre-Dumas/dp/1853267333",
    image: "https://covers.openlibrary.org/b/id/902510-M.jpg"
  });

  var book52  = new Book({
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
};