cd public
rm -rf sitemap
mkdir sitemap
cd ..
cd scripts
node ./sitemap-common.js
node ./sitemap-posts.js
node ./zip-sitemaps.js
node ./sitemap.js
