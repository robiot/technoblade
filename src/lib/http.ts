import axios from "axios";

const API_URL = "https://api.ahnafzamil.com/techno";

const REDIRECT_URI =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/oauth/callback"
    : "https://technoblade.love/oauth/callback";

export const OAUTH_URI = `https://discord.com/api/oauth2/authorize?client_id=992443485116452906&redirect_uri=${encodeURIComponent(
  REDIRECT_URI
)}&response_type=code&scope=identify`;

export const httpClient = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});
