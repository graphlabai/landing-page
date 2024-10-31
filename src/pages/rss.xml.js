import rss, { pagesGlobToRssItems } from "@astrojs/rss";
export async function GET(context) {
  return rss({
    title: "GraphLab",
    description:
      "Vi hjelper innovative organisasjoner med å utvikle skreddersydde veikart, AI-strategiutvikling, compliance-rådgivning og teknisk implementering av AI-løsninger.",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./blog/*.{md,mdx}")),
  });
}
