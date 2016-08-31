const express = require('express');
const app = express();
const path = require('path');
const compression = require('compression');


// Production middlewares
const publicPath = '/';
const outputPath = path.resolve(process.cwd(), 'build');

  // compression middleware compresses your server responses which makes them
  // smaller (applies also to assets). You can read more about that technique
  // and other good practices on official Express.js docs http://mxs.is/googmy
  app.use(compression());
  app.use(publicPath, express.static(outputPath));

  app.get('/handicapper/', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')));
  app.get('/handicapper/appcache/manifest.html', (req, res) => {res.sendFile(path.resolve(outputPath, 'appcache/manifest.html'))});
  app.get('/handicapper/appcache/manifest.appcache', (req, res) => {res.sendFile(path.resolve(outputPath, 'appcache/manifest.appcache/'))});

  app.get('/handicapper/build/:file', (req, res, next) => {
    let file = req.params.file;
    let filePath = path.resolve(outputPath, file);
    res.sendFile(path.resolve(outputPath, filePath));
  });

  app.get('/handicapper/:file', (req, res, next) =>  {
    let file = req.params.file;
    let filePath = path.resolve(outputPath, file);
    if (file === '/login') {
      res.sendFile();
    }
    res.sendFile(path.resolve(outputPath, 'index.html'));
    return;
  });

  const port = 62102;

  app.listen(port, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`listening on port ${port}`);
    console.log(outputPath);
  });
