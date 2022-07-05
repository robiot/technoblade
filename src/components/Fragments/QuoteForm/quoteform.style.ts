import { Button, Container } from "@components/Standard";
import styled from "styled-components";

export const QuoteContainer = styled(Container)`
  max-width: 600px;
  padding: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  gap: 1rem;
`;

export const Form = styled.form`
  background-color: ${({ theme }) => theme.palette.secondary.background};
  padding: 1rem 2rem;
  border-radius: 1rem;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const Input = styled.textarea`
  border: 0;
  background-color: ${({ theme }) => theme.palette.tertiary.background};
  padding: 0.7rem 1rem;
  font-size: 1.2rem;
  min-height: 10rem;
  border-radius: 0.6rem;
  resize: none;
  outline: none;
  width: 100% !important;
`;

export const QuotedAuthor = styled.p`
  text-align: end;
`;

export const Submit = styled.textarea`
  border: 0;
  background-color: ${({ theme }) => theme.palette.tertiary.background};
  padding: 0.7rem 1rem;
  font-size: 1.2rem;
  min-height: 10rem;
  border-radius: 0.6rem;
  resize: none;
  outline: none;
  width: 100% !important;
`;

export const Note = styled.p`
  text-align: center;
  margin-bottom: 3rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    flex-direction: column;
  }
`;

export const HomeButton = styled(Button)`
  flex: 1;
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.palette.accent.red.default};
`;

export const SubmitButton = styled(Button)`
  flex: 1;
  padding: 1rem 0;

  background-color: ${({ theme }) => theme.palette.accent.green.default};
`;
