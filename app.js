const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({origin: "*", exposedHeaders: ['Content-Disposition']}));
app.use('/public/', express.static(path.resolve('public')));
app.use('/api/', routes);
app.all('*', (req, res) => { res.status(404).json({message: 'Page Not Found!'}) });

module.exports = app;