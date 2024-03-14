//SERVIDOR EN EXPRESS
import  express  from "express";
const app = express();


app.get("/test", (req, res) => {

    res.send("Hello world with express");
    res.end();
})
app.get("/regino", (req, res) => {
    res.send("Chinga tu madre regino");
    res.end();
})

app.listen(8080);