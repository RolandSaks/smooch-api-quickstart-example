'use strict';

// Imports
const express = require('express');
const bodyParser = require('body-parser');
const Smooch = require('smooch-core');

// Config
const PORT = 8000;
const KEY_ID = 'your_key_id';
const SECRET = 'your_secret_key';

const smooch = new Smooch({
    keyId: KEY_ID,
    secret: SECRET,
    scope: 'app'
});

// Server https://expressjs.com/en/guide/routing.html
const app = express();

app.use(bodyParser.json());

// Expose /messages endpoint to capture webhooks https://docs.smooch.io/rest/#webhooks-payload
app.post('/message', function(req, res) {
  console.log('webhook PAYLOAD:\n', JSON.stringify(req.body, null, 4));

});

// Listen on port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
