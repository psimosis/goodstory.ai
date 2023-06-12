const { crearUsuarioController, listarUsuarios, obtenerUsusario, login }  = require('./controllers/userController.js')
const { userDataValidate, userLoginDataValidate } = require("./validations/user.validation.js");
//const { crearGenero } = require("./controllers/generoController.js");
const { sessionTokenValidate } = require("./controllers/authorizationController.js");
const { crearGenero, listarGeneros, obtenerGenero, borrarGenero} = require("./controllers/genreController.js")

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/user', (req, res) => {
    
    const u = req.body
    console.log(u);
    const usuarioCreado = new Usuario(u.nombre, u.apellido, u.username, u.password);
    listaUsuarios.push(usuarioCreado)
    res.send(`Hola ${usuarioCreado.nombre}, creamos tu usuario ${usuarioCreado.username}.`)
})

// app.get('/user/{id}', (req, res) => {
//     const u = req.body
//     listaUsuarios.push(new Usuario(1, p.name, p.tipo, p.descripcion, p.edad))
//     res.send(`Este es el personaje que creaste ${p.name}`)
// })

app.get('/login', (req, res) => {
    const user = req.body

    //Hacer validaciones de usuario/pass

    const tokgen2 = new TokenGenerator(256, TokenGenerator.BASE62);
    const token = tokgen2.generate();

    // Agregar token al usuario 

app.get('/users', sessionTokenValidate, listarUsuarios)

app.get('/user', obtenerUsusario)

app.post('/login', userLoginDataValidate, login)

app.post('/genre', crearGenero)

app.get('/genres', listarGeneros)

app.get('/genre', obtenerGenero)

app.delete('/genre', borrarGenero)