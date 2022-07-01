// To add a new quote, copy and paste the text under, and put it under the last quote. You also need to add a comma(,) on the end of the quote before.
/**
 *  {
        quote: "",
        author: ""
    },
 */
export const Quotes: {
  quote: string;
  author?: string; // Optional, if you wan't to be kind of anonymous
  autoQuotes?: boolean; // Default true, if this is set to false, it will not put the text inside of quotes.
  // If you want to use quotes inside of the string, put a \ in front of it. Example:
  // " \"He didn't die, he just escaped our eyes\" Something additional"
}[] = [
  {
    quote: "He will always remain in our hearts <3",
    author: "Elliot",
  },
  {
    quote: "A legend who hid his pain to make others smile. Will remain in my heart, always...",
    author: "Ahnaf",
  },
  {
    quote: "I dropkicked that child in self-defense",
  },
  {
    quote: "Technoblade never dies",
  },
  {
    quote: "He died but with great honor! A true hero.",
    author: "iSoham"
  },
  {
    quote: "So long, blood god",
    author: "MSWord",
  },
];
