import  express  from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res)=>{
    res.send("Hola Mundo!");
});
app.get("/holaquetal", (req, res)=>{
    res.send("Muy bien, ¿y tu?");
});

app.listen(PORT, () => {
    return console.log(`App is listening at port ${PORT}`);
})