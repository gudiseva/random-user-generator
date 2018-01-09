var express = require("express");
var faker = require("faker");

var app = express();

app.get('/random-user', function(req, res){
    var user = faker.helpers.userCard();
    user.avatar = faker.image.avatar();
    res.setHeader('Content-Type', 'application/json');
    res.json(user);
    //res.send(JSON.stringify(user));
});

app.listen(1111, function(){
    console.log('Random User Generator App - listening on localhost:1111');
});
