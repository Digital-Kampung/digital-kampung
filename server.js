const express = require('express');
const path = require('path')
var app = express();
const router = express.Router();

//app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/test.html'))
});


app.use('/', router);
app.listen(process.env.PORT || 3000)
console.log('Running at Port 3000');