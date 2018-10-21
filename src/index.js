const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

app.use(proxy('localhost:3000'));
app.listen(3003);
