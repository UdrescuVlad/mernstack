const express = require('express');
const app = express();

// const fileServerMW = express.static('public');
// app.use('/', fileServerMW);
//cele 2 randuri de sus se mai puteau scrie:
app.use(express.static('public'));

app.listen(3000, function() {
    console.log('App started on port 3000');
});