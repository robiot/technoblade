import { FC } from "react";
import { FaAngleDown, FaPlus } from "react-icons/fa";

import {
  AddQuoteButton,
  DownArrow,
  MainImage,
  SmallerSubtitle,
  Subtitle,
  Title,
  Wrapper,
} from "./landing.style";

export const LandingFragment: FC = () => {
  return (
    <Wrapper>
      <MainImage src="/hd.jpg" />
      <Title>technoblade.love</Title>

      <Subtitle>A place where Technoblade always will remain.</Subtitle>

      <SmallerSubtitle>
        If you haven't already. Please watch{" "}
        <a href="https://www.youtube.com/watch?v=DPMluEVUqS0" target="_blank">
          this video
        </a>
      </SmallerSubtitle>

      <a href="/quotes/add">
        <AddQuoteButton>
          <FaPlus fontSize={20} />
          Add your Quote
        </AddQuoteButton>
      </a>

      <DownArrow href="#quotes">
        <FaAngleDown fontSize={30} />
      </DownArrow>
    </Wrapper>
  );
};
