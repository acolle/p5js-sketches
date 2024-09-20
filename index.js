const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

const staticUrl = path.join(__dirname, 'public');
server.use(express.static(staticUrl));

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/html/index.html'));
})

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
