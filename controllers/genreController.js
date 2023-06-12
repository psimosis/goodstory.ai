//import {Genero} from "../models/genero"
const Genero = require("../models/genero")
const GenreRepository = require("../repositories/genreRepository")
const DBError = require('../utils/error');
const UserRepository = require('../repositories/usersRepository')
const ApiResponse = require('../helpers/ApiResponse')

async function crearGenero(req, res) {
    const nombre = req.body.nombre
    const descripcion = req.body.descripcion
    const username = req.body.username

    if (!nombre || !descripcion || !username) {
        return ApiResponse.sendErrorResponse(res, 400, "Datos de género inválidos")
    }

    try {
        const userRepo = UserRepository.getInstance();
        await userRepo.obtenerUsuario(username);
    
        const genero = new Genero(nombre, descripcion, username);
        const genreRepo = GenreRepository.getInstance();
        await genreRepo.crear(genero);
    
        return ApiResponse.sendSuccessResponse(res, 201, {
          status: "Genre created"
        })
      } catch (error) {
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
      }
}

async function listarGeneros(req, res) {
    try {
        const repo = GenreRepository.getInstance();
        const lista = await repo.listar();
        return ApiResponse.sendSuccessResponse(res, 200, lista)
    } catch(e) {
      return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}

async function obtenerGenero(req, res) {
    const nombreReq = req.body.nombre
    const usernameReq = req.body.username

    if (!nombreReq || !usernameReq) {
      return ApiResponse.sendErrorResponse(res, 400, "Datos de género inválidos")
    }

    try {
        const genreRepo = GenreRepository.getInstance();
        const genero = await genreRepo.obtenerGenero({
            nombre: nombreReq,
            username: usernameReq
        })
        return ApiResponse.sendSuccessResponse(res, 200, genero)
    } catch(e) {
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}

async function borrarGenero(req, res) {
    const nombreReq = req.body.nombre
    const usernameReq = req.body.username

    if (!nombreReq || !usernameReq) {
        return ApiResponse.sendErrorResponse(res, 400, "Datos de género inválidos")
    }

    try {
        const genreRepo = GenreRepository.getInstance();
        const generoBorrado = await genreRepo.borrar({
                nombre: nombreReq,
                username: usernameReq
        })
        console.log("Género borrado: " + generoBorrado)
        return ApiResponse.sendSuccessResponse(res, 204, {
            status: "Género eliminado",
            genero: generoBorrado
        })
    } catch (e) {
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}

module.exports = { crearGenero, listarGeneros, obtenerGenero, borrarGenero};