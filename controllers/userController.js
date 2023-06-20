
const Usuario = require('../models/usuario')
const UserRepository = require('../repositories/usersRepository')
const TokenGenerator = require('uuid-token-generator');
const ErrorClasses = require('../utils/error');
const userValidations = require('../validations/user.validation')
const ApiResponse = require('../helpers/ApiResponse')

 async function crearUsuarioController (req, res) {
    const nombre = req.body.nombre
    const apellido = req.body.apellido
    const username = req.body.username
    const password = req.body.password
    try {
        /*if (!nombre || !apellido || !username || !password) {
            throw new ErrorClasses.Error400()
        }*/
        const usuarioCreado = new Usuario(nombre, apellido, username, password);
        const repo = UserRepository.getInstance();
        repo.crearUsuario(usuarioCreado);

        return ApiResponse.sendSuccessResponse(res, 201, {
            status: "User created"
        })
    } catch(e) {
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}

async function obtenerUsuario(req, res) {
    try	{
        const repo = UserRepository.getInstance();
        const u = req.body
        const user = await repo.obtenerUsuario(u.username)
        return ApiResponse.sendSuccessResponse(res, 200, user)
    } catch(e) {
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}

async function listarUsuarios (req, res) {
    try {
        const repo = UserRepository.getInstance();
        const lista = await repo.listarUsuarios();
        return ApiResponse.sendSuccessResponse(res, 200, lista)
    } catch(e) {
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}

async function login(req, res) {
    const userLogin = req.body
    const repo = UserRepository.getInstance();

    try {
        await userValidations.userValidateCredentials(userLogin.username, userLogin.password)
        const tokgen2 = new TokenGenerator(256, TokenGenerator.BASE62);
        const token = tokgen2.generate();
        const asd = await repo.setSessionToken(userLogin, token);
        return ApiResponse.sendSuccessResponse(res, 200, {
            "username": req.body.username,
            "session-token": token
        })
    } catch(e) {
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}

module.exports = { crearUsuarioController, listarUsuarios, obtenerUsuario, login };