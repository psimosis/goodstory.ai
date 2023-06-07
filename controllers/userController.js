
const Usuario = require('../models/usuario')
const UserRepository = require('../repositories/usersRepository')


 async function crearUsuarioController (req, res) {
    
    const u = req.body
    console.log(u);
    const usuarioCreado = new Usuario(u.nombre, u.apellido, u.username, u.password);
    const repo = UserRepository.getInstance();
    repo.crear(usuarioCreado);

    res.send('ok')
}

async function listarUsuarios (req, res) {
    
    const repo = UserRepository.getInstance();
    const lista = await repo.listar();

    res.send(lista)
}

module.exports = { crearUsuarioController, listarUsuarios };