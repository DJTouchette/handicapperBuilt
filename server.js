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
  app.get('/admin/build/main.2c59f7e7c57d21dba922.js', (req, res) => {res.sendFile(path.resolve(outputPath, 'main.2c59f7e7c57d21dba922.js'))});
  app.get('/admin/build/vendor.53fcbe612079b3a8d68d.js', (req, res) => {res.sendFile(path.resolve(outputPath, 'vendor.53fcbe612079b3a8d68d.js'))});
  app.get('/admin/build/main.d84f944b166f9128a9bac6169e27aab1.css', (req, res) => {res.sendFile(path.resolve(outputPath, 'main.d84f944b166f9128a9bac6169e27aab1.css '))});

  const port = 62102;

  app.listen(port, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`listening on port ${port}`);
    console.log(outputPath);
    console.log(productionOutput);
  });
