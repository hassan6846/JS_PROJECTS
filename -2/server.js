// quote variable
const quotesData = [
  {
    quote:
      "The art of war is of vital importance to the state. It is a matter of life and death, a road either to safety or to ruin. Hence it is a subject of inquiry which can on no account be neglected.",
    author: "Sun Tzu",
  },
  {
    quote:
      "If you know the enemy and know yourself, you need not fear the result of a hundred battles.",
    author: "Sun Tzu",
  },
  {
    quote:
      "Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.",
    author: "Sun Tzu",
  },
  {
    quote: "The supreme art of war is to subdue the enemy without fighting.",
    author: "Sun Tzu",
  },
  {
    quote:
      "Peaceful coexistence is a foreign policy which is not directed against any other country, which does not encroach upon the interests of any other country, which does not attempt to impose its will upon any other country, and which is open to the possibility of mutual concessions with any country that is interested in such coexistence.",
    author: "Nikita Khrushchev",
  },
  {
    quote: "We will bury you.",
    author: "Nikita Khrushchev",
  },
  {
    quote:
      "The press should be not only a collective propagandist and a collective agitator, but also a collective organizer of the masses.",
    author: "Nikita Khrushchev",
  },
  {
    quote:
      "I once said, We will bury you, and I got into trouble with it. Of course we will not bury you with a shovel. Your own working class will bury you.",
    author: "Nikita Khrushchev",
  },
  {
    quote:
      "We cannot expect the Americans to jump from capitalism to communism, but we can assist their elected leaders in giving Americans small doses of socialism, until they suddenly awake to find they have communism.",
    author: "Nikita Khrushchev",
  },
  {
    quote:
      "The bourgeoisie has stripped of its halo every occupation hitherto honoured and looked up to with reverent awe. It has converted the physician, the lawyer, the priest, the poet, the man of science, into its paid wage labourers.",
    author: "Karl Marx",
  },
  {
    quote:
      "Capital is dead labour, which, vampire-like, lives only by sucking living labour, and lives the more, the more labour it sucks.",
    author: "Karl Marx",
  },
  {
    quote:
      "The ideas of the ruling class are in every epoch the ruling ideas, i.e. the class which is the ruling material force of society, is at the same time its ruling intellectual force.",
    author: "Karl Marx",
  },
  {
    quote:
      "The history of all hitherto existing society is the history of class struggles.",
    author: "Karl Marx",
  },
  {
    quote:
      "The only thing necessary for the triumph of evil is for good men to do nothing.",
    author: "Edmund Burke",
  },
  {
    quote:
      "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    author: "Helen Keller",
  },
  {
    quote:
      "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres.",
    author: "1 Corinthians 13:4-7",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
  },
  {
    quote: "An eye for an eye only ends up making the whole world blind.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "The world is a dangerous place to live; not because of the people who are evil, but because of the people who don't do anything about it.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote:
      "The most incomprehensible thing about the world is that it is comprehensible.",
    author: "Albert Einstein",
  },
  {
    quote:
      "The only reason for time is so that everything doesn't happen at once.",
    author: "Albert Einstein",
  },
  {
    quote: "The secret to creativity is knowing how to hide your sources.",
    author: "Albert Einstein",
  },
  {
    quote:
      "The only thing that you absolutely have to know, is the location of the library.",
    author: "Albert Einstein",
  },
  {
    quote: "The hardest thing in the world to understand is the income tax.",
    author: "Albert Einstein",
  },
  {
    quote: "The only real limitation is the one you set yourself.",
    author: "Albert Einstein",
  },
  {
    quote: "The measure of intelligence is the ability to change.",
    author: "Albert Einstein",
  },
  {
    quote:
      "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
    author: "Albert Einstein",
  },
  {
    quote:
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    author: "Albert Einstein",
  },
  {
    quote:
      "There are two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    author: "Albert Einstein",
  },
  {
    quote: "Things should be made as simple as possible, but not simpler.",
    author: "Albert Einstein",
  },
  {
    quote:
      "We can't solve problems by using the same kind of thinking we used when we created them.",
    author: "Albert Einstein",
  },
  {
    quote:
      "We can't solve problems by using the same kind of thinking we used when we created them.",
    author: "Albert Einstein",
  },
  {
    quote:
      "We still do not know one thousandth of one percent of what nature has revealed to us.",
    author: "Albert Einstein",
  },
  {
    quote:
      "When you are courting a nice girl an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That's relativity.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Who are we to enslave whole peoples and feel that we have the right to do so?",
    author: "Albert Einstein",
  },
];

const quoteHTML = document.querySelector(".quote-text");
const authorHTML = document.querySelector(".quote-author");
const btn = document.querySelector("button");
// random number btw 0 & 12
btn.addEventListener("click", () => {
  const RandomValue = Math.floor(Math.random() * quotesData.length);
  const randomQuote = quotesData[RandomValue];
  quoteHTML.innerHTML = randomQuote.quote;
  authorHTML.innerHTML = randomQuote.author;
});

const randomIndex = Math.floor(Math.random() * quotesData.length);
const randomQuote = quotesData[randomIndex];
quoteHTML.innerHTML = randomQuote.quote;
authorHTML.innerHTML = randomQuote.author;
