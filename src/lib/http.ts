import axios from "axios";

const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://api.ahnafzamil.com/techno";

// const CLIENT_ID = "811592714100801619";
const CLIENT_ID = "992443485116452906"; // prod

// const REDIRECT_URI = "http://localhost:3000/oauth/callback";

const REDIRECT_URI =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/oauth/callback"
    : "https://technoblade.love/oauth/callback";

export const OAUTH_URI = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
  REDIRECT_URI
)}&response_type=code&scope=identify`;

export const httpClient = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  validateStatus: (_status) => true,
});
