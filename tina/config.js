import { defineConfig } from "tinacms";
import page from "./collections/page.js";
import post from "./collections/post.js";

const branch = process.env.GITHUB_BRANCH || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,    
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [page, post],
  },
});