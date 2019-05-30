const express = require('express');

const app = express();
//const port = 3000;
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = process.env.PORT || 3000

// Set public folder as root
app.use(express.static('public'));

// Provide access to node_modules folder
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

// Redirect all traffic to index.html
app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info('listening on %d', port);
});