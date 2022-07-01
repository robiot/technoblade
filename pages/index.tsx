import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { NextSeo } from "next-seo";
import { Quotes } from "../quotes";
import { FaAngleDown, FaGithub } from "react-icons/fa";

const quoteOrNot = (autoQuote?: boolean) => autoQuote == undefined ? '"' : autoQuote == true && '"';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Technoblade.love"
        description="A place where Technoblade always will remain. RIP"
      />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>technoblade.love</h1>

          <h2 className={styles.subtitle}>
            A place where Technoblade always will remain.
          </h2>

          <h3 className={styles.thirdtitle}>
            If you haven't already. Please watch{" "}
            <a
              href="https://www.youtube.com/watch?v=DPMluEVUqS0"
              target="_blank"
            >
              this video
            </a>
          </h3>

          <a
            className={styles.contributeButton}
            href="https://github.com/robiot/technoblade"
            target={"blank"}
          >
            <FaGithub fontSize={20} />
            Contribute with your Quote
          </a>

          <a className={styles.downArrow} href="#quotes">
            <FaAngleDown fontSize={30} />
          </a>
        </main>

        <section id="quotes" className={styles.quotesSection}>
          {Quotes.map((quote, i) => (
            <div className={styles.quote} key={i}>
              <p className={styles.quoteText}>{quoteOrNot(quote.autoQuotes)}{quote.quote}{quoteOrNot(quote.autoQuotes)}</p>
              <p>- {quote.author || "Anonymous"}</p>
            </div>
          ))}
        </section>

        <footer className={styles.footer}>
          <p>
            As soon as I heard what happened, I knew I needed to contribute with
            something. So I did what I'm best at.
          </p>
          <p>Any questions? Send them to techno@robiot.dev</p>
          <p>Made by Robiot and DevGuyAhnaf</p>
          <p>rest in peace ❤️</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
