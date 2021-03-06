import { httpClient } from "@lib/http";
import { NextPage } from "next";
import Router from "next/router";
import queryString from "query-string";
import { useEffect } from "react";

const OauthCallback: NextPage = () => {
  useEffect(() => {
    const parsedQuery = queryString.parse(window.location.search);

    if (parsedQuery.code) {
      (async () => {
        await httpClient.post("/oauth/callback", { code: parsedQuery.code });
        Router.push("/quotes/add");
      })();
    }
  }, []);

  return <div>Logging you in...</div>;
};

export default OauthCallback;
