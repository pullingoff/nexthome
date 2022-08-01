// import fs from 'fs';
// import { globby } from 'globby';
// import prettier from 'prettier';
const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');

// 이게 최종 sitemap 결과물임

const getDate = new Date().toISOString();

const webrootDomain = 'https://haeun.vercel.app';

const formatted = sitemap => prettier.format(sitemap, { parser: 'html' });

(async () => {
  const pages = await globby(['public/sitemap/*.gz']);

  const sitemapIndex = `
    ${pages
      .map(page => {
        const path = page.replace('public/', '');
        return `
          <sitemap>
            <loc>${`${webrootDomain}/${path}`}</loc>
            <lastmod>${getDate}</lastmod>
          </sitemap>`;
      })
      .join('')}
  `;

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapIndex}
    </sitemapindex>
  `;

  const formattedSitemap = [formatted(sitemap)].toString();

  fs.writeFileSync('public/sitemap.xml', formattedSitemap, 'utf8');
})();
