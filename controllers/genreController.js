//import {Genero} from "../models/genero"
const Genero = require("../models/genero")
const GenreRepository = require("../repositories/genreRepository")
const DBError = require('../utils/error');
const UserRepository = require('../repositories/usersRepository')
const ApiResponse = require('../helpers/ApiResponse')
const ErrorClasses = require('../utils/error');


async function crearGenero(req, res) {
    const nombre = req.body.nombre
    const descripcion = req.body.descripcion
    const username = req.username

    try {
        if (!nombre || !descripcion || !username) {
        //return ApiResponse.sendErrorResponse(res, 400, "Datos de género inválidos")
            throw new ErrorClasses.Error400()
        }

        const userRepo = UserRepository.getInstance();
        await userRepo.obtenerUsuario(username);
    
        const genero = new Genero(nombre, descripcion, username);
        const genreRepo = GenreRepository.getInstance();
        await genreRepo.crear(genero);
    
        return ApiResponse.sendSuccessResponse(res, 201, {
          status: "Genre created"
        })
      } catch (e) {
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
      }
}

async function listarGeneros(req, res) {
    try {
        const repo = GenreRepository.getInstance();
        const lista = await repo.listar(req.username);
        return ApiResponse.sendSuccessResponse(res, 200, lista)
    } catch(e) {
      return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}

async function obtenerGenero(req, res) {
    const id = req.body.id
    try {
        if (!id) {
            throw new ErrorClasses.Error400()
        }

        const genreRepo = GenreRepository.getInstance();
        const genero = await genreRepo.obtenerGenero(id, req.username)
        return ApiResponse.sendSuccessResponse(res, 200, genero)
    } catch(e) {
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}

async function borrarGenero(req, res) {
    const id = req.body.id

    try {
        if (!id) {
            throw new ErrorClasses.Error400()
        }

        const genreRepo = GenreRepository.getInstance();
        const generoBorrado = await genreRepo.borrar(id, req.username)
        return ApiResponse.sendSuccessResponse(res, 200, {
            status: "Género eliminado",
            genero: generoBorrado
        })
    } catch (e) {
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}

module.exports = { crearGenero, listarGeneros, obtenerGenero, borrarGenero};