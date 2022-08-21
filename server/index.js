const path = require('path');
const express = require('express');

const PORT = 31415;

var app = express();

app.use(express.json());

app.use(require('./routes/profile'));
app.use(require('./routes/tweet'));
app.use(require('./routes/feed'));

app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

const server = app.listen(PORT, function() {
  console.info('🌍 Listening on port ' + server.address().port);
});
