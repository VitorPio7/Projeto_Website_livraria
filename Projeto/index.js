import express from "express";
import bodyParser from "body-parser";
import notifier from 'node-notifier';
import path from 'path'
import { dirname } from 'path';
import { fileURLToPath } from "url";
import { render } from "ejs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))



app.get("/", (req, res) => {
    res.render('index.ejs', {

    });
})

app.get("/about", (req, res) => {
    res.render('about.ejs')
})
app.get("/FAQs", (req, res) => {
    res.render('Faqs.ejs')
})
app.post("/submit", (req, res) => {
    res.render("Faqs.ejs", {
        n: req.body.name,
    })
})
app.get("/return", (req, res) => {
    res.render("index.ejs")
})

app.post("/newsletter", (req, res) => {
    res.render("index.ejs", {
        email: req.body.email,
    });
    if (req.body.email) {
        notifier.notify({
            title: 'Congradulation!',
            message: "We've just received your email!",
            icon: path.join(__dirname, 'public/img/logo.png'),
            sound: true,
            wait: true
        })
    } else {
        notifier.notify({
            title: 'Failed!!',
            message: "We've NOT received your email!",
            icon: path.join(__dirname, 'public/img/logo.png'),
            sound: true,
            wait: true
        })
    }
})

app.listen(3000, () => {
    console.log("Rodando na porta 3000")
})
