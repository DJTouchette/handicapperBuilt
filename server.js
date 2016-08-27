const express = require('express');
const app = express();
const resolve = require('path').resolve;

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`)
});

app.use(express.static(__dirname));

app.listen(3000, () => {
  console.log(`listening on port 3000`);
  console.log(`${__dirname}/build/index.html`);
});
