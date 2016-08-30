const express = require('express');
const app = express();
const path = require('path');
const compression = require('compression');


// Production middlewares
const publicPath = '/';
const outputPath = path.resolve(process.cwd(), 'build');
// const productionOutput = 'http://thesportsmatrix.com/admin/';
const productionOutput = 'https://misc-rnnukmcdu8mee.netdna-ssl.com/tsm/admin/build';


  // compression middleware compresses your server responses which makes them
  // smaller (applies also to assets). You can read more about that technique
  // and other good practices on official Express.js docs http://mxs.is/googmy
  app.use(compression());
  app.use(publicPath, express.static(outputPath));

  app.get('/admin/', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')));
  app.get('/admin/build/main.*.js', (req, res) => {res.sendFile(path.resolve(outputPath, 'main.7e604d806c347d0050f1.js'))});
  app.get('/admin/build/vendor.*.js', (req, res) => {res.sendFile(path.resolve(outputPath, 'vendor.4338e5b794c25e63f6cb.js'))});
  app.get('/admin/build/main.*.css', (req, res) => {res.sendFile(path.resolve(outputPath, 'main.d84f944b166f9128a9bac6169e27aab1.css'))});
  app.get('/admin/build/45.*.chunk.js', (req, res) => {res.sendFile(path.resolve(outputPath, '45.60ec5b75f07a1656e681.chunk.js'))});
  app.get('/admin/appcache/manifest.html', (req, res) => {res.sendFile(path.resolve(outputPath, 'appcache/manifest.html'))});
  app.get('/admin/appcache/manifest.appcache', (req, res) => {res.sendFile(path.resolve(outputPath, 'appcache/manifest.appcache/'))});

  app.get('/admin/45.*.chunk.js', (req, res) => {res.sendFile(path.resolve(outputPath, '45.60ec5b75f07a1656e681.chunk.js'))});
  
  // app.get('/admin/appcache/manifest.html', (req, res) => {res.send('hello')});

  const port = 62102;

  app.listen(port, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`listening on port ${port}`);
    console.log(outputPath);
    console.log(productionOutput);
  });
