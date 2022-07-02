import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1.2rem;
  scroll-margin-top: 1rem;
`;

export const Quote = styled.div`
  background-color: ${({ theme }) => theme.palette.secondary.background};
  display: flex;
  flex: 40%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 7rem;
  gap: 1rem;
  padding: 2rem;
  text-align: center;
  border-radius: 1rem;

  p {
    margin: 0;
    padding: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 2rem 1rem;
    flex: 100%;
  }
`;

export const QuoteText = styled.p`
  font-size: 1.5rem;
`;
