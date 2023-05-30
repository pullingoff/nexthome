const fs = require("fs");
const globby = require("globby");
const prettier = require("prettier");
const path = require("path");

const getDate = new Date().toISOString();
const MY_DOMAIN = "https://haeun.vercel.app";
const formatted = (sitemap) => prettier.format(sitemap, { parser: "html" });

(async () => {
  const pages = await globby([
    // include
    "../src/pages/**/*.tsx",
    "../src/pages/*.tsx",
    // exclude
    "!../src/pages/_*.tsx",
  ]);

  const pagesSitemap = `
        ${pages
          .filter((page) => !page.includes("["))
          .map((page) => {
            const path = page
              .replace("../src/pages/", "")
              .replace(".tsx", "")
              .replace(/\/index/g, "");
            const routePath = path === "index" ? "" : path;
            return `
                <url>
                    <loc>${MY_DOMAIN}/${routePath}</loc>
                    <lastmod>${getDate}</lastmod>
                </url>
            `;
          })
          .join("")}
    `;

  const generatedSitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset 
            xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
        >
        ${pagesSitemap}
        </urlset>
    `;

  const formattedSitemap = [formatted(generatedSitemap)].toString();
  const filePath = "../public/sitemap/sitemap-common.xml";

  const dirname = path.dirname(filePath);
  fs.mkdirSync(dirname, { recursive: true });

  fs.writeFileSync(filePath, formattedSitemap, "utf8");
})();
