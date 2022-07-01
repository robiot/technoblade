# techoblade.love

A website that shows all of your lovely quotes.

As soon as I heard what happened, I knew I needed to contribute with something. So I did what I'm best at.

# Contributing with your own quote.
1. First you will need a github account, which easily can be created. Else check this https://www.wikihow.com/Create-an-Account-on-GitHub
2. Go to this file https://github.com/robiot/technoblade/blob/master/quotes.ts and press the edit button in the top right corner. 
![image](https://user-images.githubusercontent.com/68228472/176874212-4514d16a-a19f-4d56-b507-7b2dd42ba9e4.png)
3. Now a editor willl pop up with lots of text which may seem complicated, but it really isn't. The text selected here is one quote 'object', as it's called. You cas copy it with CTRL+c then paste it a line under.
![image](https://user-images.githubusercontent.com/68228472/176874506-122f6219-2cc9-4a83-b343-729f1bc5b8ef.png)
4. Now it should look something like this. You can nwo change the quote inside the quotation marks next to `quote:` to your quote and the author to your name. If you don't want your name to show, just remove that line completely.
```ts
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
    quote: "Test",
    author: "Yourname",
  },
];
```

### If you need any help, feel free to open a issue here https://github.com/robiot/technoblade/issues, mail me at techo@robiot.dev or send me a dm on discord robiot#3455.

rest in peace ❤️
