
const Usuario = require('../models/usuario')
const UserRepository = require('../repositories/usersRepository')
const TokenGenerator = require('uuid-token-generator');
const DBError = require('../utils/error');

 async function crearUsuarioController (req, res) {
    const u = req.body
    console.log(u);
    const usuarioCreado = new Usuario(u.nombre, u.apellido, u.username, u.password);
    const repo = UserRepository.getInstance();
    repo.crearUsuario(usuarioCreado);
    res.send('ok')
}

async function obtenerUsusario(req, res) {
    try	{
        const repo = UserRepository.getInstance();
        const u = req.body
        const user = await repo.obtenerUsuario(u.username)
        res.status(200)
        res.send(user)
    } catch(e) {
        if (e instanceof DBError){
            res.status(e.statusCode).send(e.message);
        } else {
            // Otras excepciones no personalizadas
                //    console.error(e);
            res.status(500).send('Error interno del servidor');
        }
    }
}

async function listarUsuarios (req, res) {
    try {
        const repo = UserRepository.getInstance();
        const lista = await repo.listarUsuarios();
        res.status(200)
        res.send(lista)
    } catch(e) {
        res.status(500)
        res.send('Error interno del servidor')
    }
}

async function login(req, res) {
    const userLogin = req.body
    const repo = UserRepository.getInstance();
    //Hacer validaciones de usuario/pass
    const tokgen2 = new TokenGenerator(256, TokenGenerator.BASE62);
    const token = tokgen2.generate();
    const asd = await repo.login(userLogin, token);
    // Agregar token al usuario 
    res.send(`Hola ${req.body.username} tu token es ${token}`)
}

module.exports = { crearUsuarioController, listarUsuarios, obtenerUsusario, login };