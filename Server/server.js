const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const host = 'localhost';
const port = 8000;

const adminUsername = 'admin';
const adminPassword = 'admin123';


app.use(express.static(path.join(__dirname, '../Website')));
app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

app.use(bodyParser.urlencoded({
    extended: false
 }));

app.post('/',function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    username == adminUsername && password == adminPassword 
    ? res.redirect('/?login=' + 'succesful' + '&name=' + username)
    : res.redirect('/?login=' + "failed");
});
