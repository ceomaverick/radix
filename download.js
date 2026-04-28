const https = require('https');
const fs = require('fs');

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
};

const file = fs.createWriteStream("public/images/snicons/turnkeyimage.jpg");
https.get("https://picsum.photos/seed/infra/1000/600", options, function(response) {
   if (response.statusCode === 302 || response.statusCode === 301) {
       https.get(response.headers.location, options, (res) => res.pipe(file));
   } else {
       response.pipe(file);
   }
   file.on('finish', () => {
       file.close();
       console.log('Download complete');
   });
}).on('error', (err) => {
    console.error(err.message);
});