//SERVIDOR EN EXPRESS
import  express  from "express";
import hbs from 'hbs';
import path  from "path";
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT;
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('home', {
        nombre: "Pagina de node",
        descripcion: "Fernando herrera"
    });
});

app.get('/generic', (req, res) => {

    res.render('generic', {
        nombre: "Pagina de node",
        descripcion: "Fernando herrera"
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: "Pagina de node",
        descripcion: "Fernando herrera"
    });
})

app.listen(PORT);