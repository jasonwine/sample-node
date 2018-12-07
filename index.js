
let express = require("express"); 
let app = express();

let helper = require("./helper");

let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json())


app.get("/ping", (req, res, next) => { 
    res.json("Successfull"); 
});

app.post("/readbody", (req, res, next) => { 
    res.json("TEST is " + req.body.test); 
}); 

app.get("/add/:first/:second", (req, res, next) => {
    res.json(helper.addNumber(req.params.first, req.params.second))
    
});

app.get("/subtract/:first/:second", (req, res, next) => {
    res.json(helper.subtractNumber(req.params.first, req.params.second))
    
});
app.listen(3000, () => { 
    console.log("Server running on port 3000"); 
});