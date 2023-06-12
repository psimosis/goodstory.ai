//import {Genero} from "../models/genero"
const Genero = require("../models/genero")
const GenreRepository = require("../repositories/genreRepository")
const DBError = require('../utils/error');
const UserRepository = require('../repositories/usersRepository')

async function crearGenero(req, res) {

  console.log("hola")
    const nombre = req.body.nombre
    const descripcion = req.body.descripcion
    const username = req.body.username

    if (!nombre || !descripcion || !username) {
        return res.status(400).json({
            "status": "Datos de género inválidos"
        });
    }

    try {
        const userRepo = UserRepository.getInstance();
        await userRepo.obtenerUsuario(username);
    
        const genero = new Genero(nombre, descripcion, username);
        const genreRepo = GenreRepository.getInstance();
        await genreRepo.crear(genero);
    
        return res.status(201).json({
          "status": "Genre Created"
        });
      } catch (error) {
        if (error instanceof DBError) {
          return res.status(403).json({
            "status": error.message
          });
        } else {
          console.error(error);
          return res.status(500).json({
            "status": "Internal server error"
          });
        }
      }
}

async function listarGeneros(req, res) {
    try {
        const repo = GenreRepository.getInstance();
        const lista = await repo.listar();
        res.status(200)
        res.send(lista)
    } catch(e) {
        res.status(500)
        res.json({
            "status": "Internal server error"
        }).send()
    }
}

async function obtenerGenero(req, res) {
    const nombreReq = req.body.nombre
    const usernameReq = req.body.username

    if (!nombreReq || !usernameReq) {
        return res.status(400).json({
            "status": "Datos de género inválidos"
        });
    }

    try {
        const genreRepo = GenreRepository.getInstance();
        const genero = await genreRepo.obtenerGenero({
            nombre: nombreReq,
            username: usernameReq
        })
        return res.status(200).json(genero);
    } catch(e) {
        if (e instanceof DBError) {
            return res.status(e.statusCode).json({
              "status": e.message
            });
          } else {
            console.error(e);
            return res.status(500).json({
              "status": "Internal server error"
            });
          }
    }
}

async function borrarGenero(req, res) {
    const nombreReq = req.body.nombre
    const usernameReq = req.body.username

    if (!nombreReq || !usernameReq) {
        return res.status(400).json({
            "status": "Datos de género inválidos"
        });
    }

    try {
        const genreRepo = GenreRepository.getInstance();
        const generoBorrado = await genreRepo.borrar({
                nombre: nombreReq,
                username: usernameReq
        })
        
        return res.status(204).json({
            status: "Género eliminado",
            genero: generoBorrado.value
        });
    } catch (e) {
        return res.status(500).json({
            "status": e.message
        });
    }
}

module.exports = { crearGenero, listarGeneros, obtenerGenero, borrarGenero};