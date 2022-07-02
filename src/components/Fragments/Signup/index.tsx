import { OAUTH_URI } from "@lib/http";
import { FC } from "react";

import { Subtitle } from "../Landing/landing.style";
import { LoginButton, Wrapper } from "./signup.style";

export const SignupFragment: FC = () => {
  return (
    <Wrapper>
      <Subtitle>Please log in so that we can verify you are a human</Subtitle>
      <LoginButton onClick={() => (window.location.href = OAUTH_URI)}>
        Log In with Discord
      </LoginButton>
    </Wrapper>
  );
};
