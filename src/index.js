const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('../controllers/cadastro')(app);

app.listen(5000);

