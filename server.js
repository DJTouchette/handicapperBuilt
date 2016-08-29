const express = require('express');
const app = express();
const path = require('path');
const compression = require('compression');

// Production middlewares
const publicPath = '/';
const outputPath = path.resolve(process.cwd(), 'build');
// const outputPath = path.resolve(process.cwd());

  // compression middleware compresses your server responses which makes them
  // smaller (applies also to assets). You can read more about that technique
  // and other good practices on official Express.js docs http://mxs.is/googmy
  app.use(compression());
  app.use(publicPath, express.static(outputPath));

  app.get('/', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')));
  app.get('/45.60ec5b75f07a1656e681.chunk.js', => res.sendFile(path.resolve(outputPath, '45.60ec5b75f07a1656e681.chunk.js')));
  
  const port = 62102;

  app.listen(port, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`listening on port ${port}`);
    console.log(outputPath);
  });
