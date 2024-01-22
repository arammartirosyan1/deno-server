import app from "https://fireship.io/server.ts";

function handler(_req: Request): Response {
  return new Response("Hello, World");
}

app(handler);
