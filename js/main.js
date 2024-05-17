// Answer
// --------------------------
var authorName = [
  "Oscar Wilde",
  "Mahatma Gandhi",
  "Thomas A. Edison",
  "George Bernard Shaw",
  "Mae West",
  "Thomas Edison",
  "Margaret Thatcher",
];

var originalQuote = [
  "Be yourself; everyone else is already taken.",
  "Be the change that you wish to see in the world.",
  "I have not failed. I've just found 10,000 ways that won't work.",
  "Life isn't about finding yourself. Life is about creating yourself.",
  " You only live once, but if you do it right, once is enough.",
  " Genius is one percent inspiration and ninety-nine percent perspiration.",
  " If you want something said, ask a man; if you want something done, ask a woman.",
];

var usedIndexes = [];

function randomText() {
  if (usedIndexes.length === authorName.length) {
    usedIndexes = []; 
  }

  var num;
  do {
    num = Math.floor(Math.random() * authorName.length);
  } while (usedIndexes.includes(num));

  usedIndexes.push(num);

  var quote = originalQuote[num] + " _ (     " + authorName[num] + "     )";
  document.getElementById("quoteDisplay").innerText = quote;
}

// other  Answer
// --------------------------

// var originalWriterName = [
//     "Oscar Wilde",
//     "Mahatma Gandhi",
//     "Thomas A. Edison",
//     "George Bernard Shaw",
//     "Mae West",
//       "Thomas Edison",
//       "Margaret Thatcher",
//   ];

//   var originalQuote = [
//     "Be yourself; everyone else is already taken.",
//     "Be the change that you wish to see in the world.",
//     "I have not failed. I've just found 10,000 ways that won't work.",
//     "Life isn't about finding yourself. Life is about creating yourself.",
//   " You only live once, but if you do it right, once is enough.",
//   " Genius is one percent inspiration and ninety-nine percent perspiration.",
//   " If you want something said, ask a man; if you want something done, ask a woman.",
//   ];

//   var writerName = [];
//   var quote = [];

//   function randomText() {
//     writerName = originalWriterName.slice();
//     quote = originalQuote.slice();
//   }

//   function randomText() {
//     var quoteDisplay = document.getElementById("quoteDisplay");
//     quoteDisplay.innerHTML = "";

//     if (writerName.length === 0) {
//       resetQuotes();
//     }

//     var num = Math.floor(Math.random() * writerName.length);
//     quoteDisplay.innerHTML = "<p><strong>" + writerName[num] + "</strong>: " + quote[num] + "</p>";
//     writerName.splice(num, 1);
//     quote.splice(num, 1);
//   }
//     resetQuotes();

// Seconde Answer
// --------------------------
// function add() {
//   var numRandom = Quotes[Math.floor(Math.random() * Quotes.length)].Quotes;
//   if (numRandom === numRandom) {
//     document.getElementById("contint").innerHTML = numRandom++;
//   } else {
//     document.getElementById("contint").innerHTML = numRandom;
//   }
// }

// console.log(add);
// var quotes = [
//   {
//     quote: "The only way to do great work is to love what you do.",
//     author: "Steve Jobs",
//   },
//   {
//     quote: "Innovation distinguishes between a leader and a follower.",
//     author: "Steve Jobs",
//   },
//   {
//     quote: "Life is what happens when you're busy making other plans.",
//     author: "John Lennon",
//   },
//   {
//     quote:
//       "The only thing necessary for the triumph of evil is for good men to do nothing.",
//     author: "Edmund Burke",
//   },
//   {
//     quote:
//       "The best time to plant a tree was 20 years ago. The second best time is now.",
//     author: "Chinese Proverb",
//   },
//   {
//     quote:
//       "In three words I can sum up everything I've learned about life: It goes on.",
//     author: "Robert Frost",
//   },
// ];

// var lastRandomIndex = -1;

// function randomText() {
//   var randomIndex;
//   do {
//     randomIndex = Math.floor(Math.random() * quotes.length);
//   } while (randomIndex === lastRandomIndex);

//   lastRandomIndex = randomIndex;

//   var quoteText = quotes[randomIndex].quote;
//   var quoteAuthor = quotes[randomIndex].author;
//   document.getElementById("quoteDisplay").innerHTML =
//     '"' + quoteText + '"<br><strong>- ' + quoteAuthor + "</strong>";
// }
// Third Answer
// --------------------------
// const quotes = [
//   "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
//   "The way to get started is to quit talking and begin doing. - Walt Disney",
//   "Your time is limited, don’t waste it living someone else’s life. - Steve Jobs",
//   "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
//   "If you look at what you have in life, you’ll always have more. - Oprah Winfrey",
// ];

// let lastQuoteIndex = -1;

// function randomText() {
//   let index;
//   do {
//     index = Math.floor(Math.random() * quotes.length);
//   } while (index === lastQuoteIndex);
//   lastQuoteIndex = index;

//   document.getElementById("quoteDisplay").innerText = quotes[index];
// }
