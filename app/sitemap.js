// app/sitemap.js

import { getAllPosts } from '../src/lib/posts';

const URL = 'https://claritydev.net';

export default async function sitemap() {
  const posts = (await getAllPosts()).map(({ slug, frontMatter }) => ({
    url: `${URL}/blog/${slug}`,
    lastModified: frontMatter.date,
  }));

  const routes = ['', '/about', '/blog'].map(route => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}
