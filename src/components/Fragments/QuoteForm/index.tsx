/* eslint-disable unicorn/no-document-cookie */
import { httpClient } from "@lib/http";
import Router from "next/router";
import { FC, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import {
  ButtonsWrapper,
  Form,
  HomeButton,
  Input,
  InputWrapper,
  Note,
  QuoteContainer,
  QuotedAuthor,
  SubmitButton,
  Wrapper,
} from "./quoteform.style";

export const QuoteFormFragment: FC = () => {
  const [quote, setQuote] = useState("");
  const [username, setUsername] = useState("");

  const [debouncedQuote] = useDebounce(quote, 500);

  useEffect(() => {
    (async () => {
      const response = await httpClient.get("/username");

      if (response.status != 200) {
        console.log(response.status);
      }

      setUsername(response.data);
    })();
  }, []);

  return (
    <QuoteContainer>
      <Wrapper>
        <Form
          onSubmit={(event) => {
            event.preventDefault();

            (async () => {
              if (quote.length <= 10) return;

              const response = await httpClient.post("/quotes/add", {
                author: "username",
                content: quote,
              });

              console.log(response.status);

              if (response.status == 200) {
                alert(
                  "Sucessfully uploaded your quote. Thanks for your contribution."
                );
                Router.push("/");
              } else if (response.status == 403) {
                alert("You have already posted your quote.");
              } else if (response.status == 401) {
                alert("Invalid session. Copy your quote and refresh the page.");
              }
            })();
          }}
        >
          <InputWrapper>
            <Input
              onChange={(event) => {
                setQuote(event.target.value);
              }}
              maxLength={230}
              placeholder="Quote"
            />
            <QuotedAuthor>- {username}</QuotedAuthor>
          </InputWrapper>

          <Note>
            Note: You can <strong>not</strong> delete or change this after you
            pressed submit.
          </Note>

          <ButtonsWrapper>
            <HomeButton
              onClick={() => {
                (async () => {
                  await httpClient.post("/logout");
                  Router.push("/");
                })();
              }}
            >
              Go back
            </HomeButton>
            <SubmitButton
              type="submit"
              style={
                debouncedQuote.length <= 10
                  ? {
                      opacity: 0.5,
                      cursor: "initial",
                      pointerEvents: "none",
                    }
                  : undefined
              }
            >
              Submit
            </SubmitButton>
          </ButtonsWrapper>
        </Form>
      </Wrapper>
    </QuoteContainer>
  );
};
