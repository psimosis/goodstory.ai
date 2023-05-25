const Personaje = require('./models/personaje.js')
const Usuario = require('./models/usuario.js')
const TokenGenerator = require('uuid-token-generator');

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const listaPersonajes = []

const listaUsuarios = []

app.get('/personajes', (req, res) => {

  res.send(listaPersonajes)
})

app.post('/personaje', (req, res) => {
    const p = req.body
    listaPersonajes.push(new Personaje(1, p.name, p.tipo, p.descripcion, p.edad))
    res.send(`Este es el personaje que creaste ${p.name}`)
})

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

    res.send(`Hola ${req.body.username} tu token es ${token}`)
})