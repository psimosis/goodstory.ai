const { crearUsuarioController, listarUsuarios, obtenerUsusario, login }  = require('./controllers/userController.js')
const { userDataValidate, userLoginDataValidate } = require("./validations/user.validation.js");
//const { crearGenero } = require("./controllers/generoController.js");
const { sessionTokenValidate } = require("./controllers/authorizationController.js");
const { crearGenero, listarGeneros, obtenerGenero, borrarGenero } = require("./controllers/genreController.js")
const { crearHabilidadController, listarHabilidadesController, obtenerHabilidadController, borrarHabilidadController } = require("./controllers/habilityController.js")

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// User methods

app.post('/user',userDataValidate, crearUsuarioController)

app.get('/users', sessionTokenValidate, listarUsuarios)

app.get('/user', obtenerUsusario)

app.post('/login', userLoginDataValidate, login)

// Habilities methods

app.post('/hability', sessionTokenValidate, crearHabilidadController)

app.get('/hability', sessionTokenValidate, obtenerHabilidadController)

app.get('/habilities', sessionTokenValidate, listarHabilidadesController)

app.delete('/hability',sessionTokenValidate, borrarHabilidadController)

// Genres methods

app.post('/genre', sessionTokenValidate, crearGenero)

app.get('/genres', sessionTokenValidate, listarGeneros)

app.get('/genre', sessionTokenValidate, obtenerGenero)

app.delete('/genre', sessionTokenValidate, borrarGenero)