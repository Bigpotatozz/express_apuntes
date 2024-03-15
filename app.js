//SERVIDOR EN EXPRESS
import  express  from "express";
const app = express();

import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.use(express.static("public"));


app.get("/test", (req, res) => {

    res.send("Hello world with express");
    res.end();
})
app.get("/regino", (req, res) => {
    res.send("Chinga tu madre regino");
    res.end();
})


app.get("/generic", (req, res) => {

    res.sendFile(__dirname + "/public/generic.html")
})

app.listen(8080);