const express = require('express');

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({extended: false}));
app.use(require('./routes/person'));
app.listen(8080);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  next();
});
