import { http } from "msw";

export const handler = [
  http.get("/api/products", () => {
    return new Response("hello sunki!");
  }),
  http.get("/api/hi", () => {
    return new Response("Hi Sunki!");
  }),
];
