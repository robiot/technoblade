import { Footer } from "@components/Footer";
import { LandingFragment } from "@components/Fragments/Landing";
import { QuotesFragment } from "@components/Fragments/Quotes";
import { Container } from "@components/Standard";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Technoblade.love"
        description="A place where Technoblade always will remain. RIP"
      />
      <Container>
        <LandingFragment />

        <QuotesFragment />

        <Footer />
      </Container>
    </>
  );
};

export default Home;
