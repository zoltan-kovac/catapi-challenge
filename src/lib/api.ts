import { TheCatAPI } from "@thatapicompany/thecatapi";

export const api = new TheCatAPI(import.meta.env.VITE_X_API_KEY, {
  host: "https://api.thecatapi.com/v1",
});

export const headers = {
  "content-type": "application/json",
  "x-api-key": `${import.meta.env.VITE_X_API_KEY}`,
};
