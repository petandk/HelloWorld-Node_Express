"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("Hola Mundo!");
});
app.get("/holaquetal", (req, res) => {
    res.send("Muy bien, ¿y tu?");
});
app.listen(PORT, () => {
    return console.log(`App is listening at port ${PORT}`);
});
