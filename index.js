const { crearUsuarioController, listarUsuarios, obtenerUsusario, login }  = require('./controllers/userController.js')
const { userDataValidate, userLoginDataValidate } = require("./validations/user.validation.js");
const { crearGenero, listarGeneros} = require("./controllers/genreController.js")

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.get('/personajes', (req, res) => {

//   res.send(listaPersonajes)
// })

// app.post('/personaje', (req, res) => {
//     const p = req.body
//     listaPersonajes.push(new Personaje(1, p.name, p.tipo, p.descripcion, p.edad))
//     res.send(`Este es el personaje que creaste ${p.name}`)
// })

// Genre methods

// app.post('/genre', authorizationController, genreController)

// User methods

app.post('/user',userDataValidate, crearUsuarioController)

app.get('/users', listarUsuarios)

app.get('/user', obtenerUsusario)

app.post('/login', userLoginDataValidate, login)

app.post('/genre', crearGenero)

app.get('/genres', listarGeneros)
