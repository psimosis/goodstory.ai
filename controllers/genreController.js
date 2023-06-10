//import {Genero} from "../models/genero"
const Genero = require("../models/genero")
const GenreRepository = require("../repositories/genreRepository")
const DBError = require('../utils/error');
const obtenerUsusario = require('./userController')

async function crearGenero(req, res) {
    const nombre = req.body.nombre
    const descripcion = req.body.descripcion
    const username = req.body.username

    if (!nombre || !descripcion || !username) {
        res.status(400)
        throw new Error("Datos de género inválidos")
    }

    const genero = new Genero(nombre, descripcion, username)
    const repo = GenreRepository.getInstance();
        
    try {
        repo.crear(genero)
        res.status(200).json({
            "status": "Genre Created"
        }).send;
    } catch(e) {
        res.status(e.statusCode)
        throw new DBError(e.message, e.statusCode);
    }

    /*try {
        req.body = { username };
        const usuario = await userController.obtenerUsusario(req, res);
        userController.obtenerUsusario(username)

        const genero = new Genero(nombre, descripcion, username)
        const repo = GenreRepository.getInstance();
        
        try {
            repo.crear(genero)
            res.status(200).json({
                "status": "Genre Created"
            }).send;
        } catch(e) {
            res.status(e.statusCode)
            throw new DBError(e.message, e.statusCode);
        }

    } catch (e) {
        if (e instanceof DBError) {
            if (e.message === "User not found") {
                res.status(403);
                res.send("Forbidden access to the requested resource");
            }
        }
    }*/
}

async function listarGeneros (req, res) {
    try {
        const repo = GenreRepository.getInstance();
        const lista = await repo.listar();
        res.status(200)
        res.send(lista)
    } catch(e) {
        res.status(500)
        res.json({
            "status": "Internal server error"
        }).send
    }
}

module.exports = { crearGenero, listarGeneros};