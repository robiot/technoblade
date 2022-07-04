import { Button } from "@components/Standard";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 4rem 0;
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainImage = styled.img`
  width: 10rem;
  max-width: 100%;
  margin-bottom: 2rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: none;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 4rem;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h2`
  margin: 1rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 1rem;
  }
`;

export const SmallerSubtitle = styled.h3`
  margin: 0;
  text-align: center;

  a {
    color: #8ab4f8;
    text-decoration: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-top: 1rem;
    font-size: 0.9rem;
  }
`;

export const AddQuoteButton = styled(Button)`
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.palette.accent.green.default};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 100%;
  }
`;

export const DownArrow = styled.a`
  position: absolute;
  bottom: 0;
  margin-bottom: 1rem;
`;

export const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
`;
