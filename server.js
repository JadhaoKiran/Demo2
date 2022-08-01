var express = require("express")
var app = express();

app.get("/",(req, resp)=>
{
    "<h2> Welcome to Demo</h2>"
    +"<h3>Demo list</h3>"
    +"<ol>"
    +"<li>Kiran</li>"
    +"<li>Kiran</li>"
    +"<li>Kiran</li>"
    +"</ol>"
});

app.listen(7000);
console.log("server start at port no 7000");