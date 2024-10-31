import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import devtoolBreakpoints from "astro-devtool-breakpoints";

export default defineConfig({
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables",
    },
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true,
  },
  site: "https://lexingtonthemes.com",
  integrations: [tailwind(), sitemap(), mdx(), devtoolBreakpoints()],
  output: "static",
  adapter: github({
    // If this is a project repo (username.github.io/repo-name)
    // Replace `repo-name` with the actual repository name
    base: "/landing-page",
  }),
});
