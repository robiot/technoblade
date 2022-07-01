import { Quotes } from "quotes";
import { FC } from "react";

import { Quote, QuoteText, Wrapper } from "./quotes.style";

const quoteOrNot = (autoQuote?: boolean) =>
  // eslint-disable-next-line prettier/prettier
  autoQuote == undefined ? "\"" : autoQuote && "\"";

export const QuotesFragment: FC = () => {
  return (
    <Wrapper id="quotes">
      {Quotes.map((quote, index) => (
        <Quote key={index}>
          <QuoteText>
            {quoteOrNot(quote.autoQuotes)}
            {quote.quote}
            {quoteOrNot(quote.autoQuotes)}
          </QuoteText>
          <p>- {quote.author || "Anonymous"}</p>
        </Quote>
      ))}
    </Wrapper>
  );
};
