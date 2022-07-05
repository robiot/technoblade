import { Title } from "@components/Fragments/Landing/landing.style";
import { QuoteFormFragment } from "@components/Fragments/QuoteForm";
import { SignupFragment } from "@components/Fragments/Signup";
import { Container } from "@components/Standard";
import { httpClient } from "@lib/http";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useEffect } from "react";
import { useState } from "react";

const AddQuotes: NextPage = () => {
  const [isAuthed, setIsAuthed] = useState<boolean | undefined>();

  useEffect(() => {
    (async () => {
      const response = await httpClient.get("/auth");

      setIsAuthed(response.status == 200);
    })();
  }, []);

  return (
    <>
      <NextSeo
        title="Add Quote - Technoblade.love"
        description="Add a quote in the memory of Technoblade"
      />
      <Container>
        <br />
        <Title>Add Quote</Title>
        {isAuthed != undefined ? (
          <>{isAuthed ? <QuoteFormFragment /> : <SignupFragment />}</>
        ) : undefined}
      </Container>
    </>
  );
};

export default AddQuotes;
