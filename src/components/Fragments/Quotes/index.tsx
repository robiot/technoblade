import { httpClient } from "@lib/http";
import { FC, useEffect, useState } from "react";

import { Quote, QuoteText, Wrapper } from "./quotes.style";

// const quoteOrNot = (autoQuote?: boolean) =>
//   // eslint-disable-next-line prettier/prettier
//   autoQuote == undefined ? "\"" : autoQuote && "\"";

type QuoteT = {
  author: string;
  content: string;
  created_at: string;
}[];

export const QuotesFragment: FC = () => {
  const [quotes, setQuotes] = useState<undefined | QuoteT>();

  useEffect(() => {
    (async () => {
      const quotes = await httpClient.get("/quotes/all");

      if (quotes.status != 200) return;

      setQuotes(quotes.data.quotes);
    })();
  }, []);

  return (
    <Wrapper id="quotes">
      {quotes == undefined ? (
        <Quote />
      ) : (
        <>
          {quotes.map((quote, index) => (
            <Quote key={index}>
              <QuoteText>"{quote.content}"</QuoteText>
              <p>- {quote.author || "Anonymous"}</p>
            </Quote>
          ))}
        </>
      )}
    </Wrapper>
  );
};
