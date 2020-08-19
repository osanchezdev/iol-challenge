const path = require('path');
const fs = require('fs');

const express = require('express');

const PORT = process.env.PORT || 3006;
const app = express();

app.get('/', (req, res) => {
  const indexFile = path.resolve('./build/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    return res.send(data);
  });
});

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
