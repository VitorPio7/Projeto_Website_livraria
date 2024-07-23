import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))



app.get("/", (req, res) => {
    res.render('index.ejs');
})

app.get("/about", (req, res) => {
    res.render('about.ejs')
})
app.get("/FAQs", (req, res) => {
    res.render('Faqs.ejs')
})

app.listen(3000, () => {
    console.log("Rodando na porta 3000")
})
