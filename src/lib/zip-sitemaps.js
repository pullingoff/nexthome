const fs = require('fs');
const zlib = require('zlib');

var dirs = ['public/sitemap'];

dirs.forEach(dir => {
  fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.xml')) {
      const fileContents = fs.createReadStream(dir + '/' + file);
      const writeStream = fs.createWriteStream(dir + '/' + file + '.gz');
      const zip = zlib.createGzip();

      fileContents
        .pipe(zip)
        .on('error', err => console.error(err))
        .pipe(writeStream)
        .on('error', err => console.error(err));
    }
  });
});
