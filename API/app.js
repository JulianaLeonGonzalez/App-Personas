const express = require('express');

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({extended: false}));


app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
 
app.use(require('./routes/person'));
app.listen(3000);
