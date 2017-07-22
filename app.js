var request = require('request');
var express = require('express');
var app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
});

app.get("/results", function(req, res){
    var query = req.query.search; //save value obtained from key "search" in the search template form
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb"; //make url var and concatenate query so we have shorter request to make below
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data: data} );
        }
    })
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie app has started..");
});