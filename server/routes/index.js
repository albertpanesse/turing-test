var express = require('express');
var router = express.Router();
var path = require('path');

router.all('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../../react-client/dist/index.html`));
});

module.exports = router;