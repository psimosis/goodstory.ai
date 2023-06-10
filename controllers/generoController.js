//import {Genero} from "../models/genero"
const Genero = require("../models/genero")

async function crearGenero(req, res) {
    const nombre = req.body.nombre
    const descripcion = req.body.descripcion

    if (!nombre || !descripcion) {
        throw new Error("Datos de género inválidos")
    }
    const genero = new Genero()
}

module.exports = { crearGenero };