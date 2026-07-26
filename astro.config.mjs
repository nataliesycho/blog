// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Update `site` to your real domain once you deploy — it's used for the
// sitemap, RSS feed, and canonical/OG URLs.
export default defineConfig({
  site: "https://blog-lilac-five-99.vercel.app",
  integrations: [sitemap()],
});
