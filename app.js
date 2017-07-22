var request = require('request');
var express = require('express');
var app = express();
app.set("view engine", "ejs");

app.get("/results", function(req, res){
    request("http://www.omdbapi.com/?s=guardians&apikey=thewdb", function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data: data} );
        }
    })
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie app has started..");
});