const { crearUsuarioController, listarUsuarios, obtenerUsuario, login }  = require('./controllers/userController.js')
const { userDataValidate, userLoginDataValidate } = require("./validations/user.validation.js");
const { sessionTokenValidate } = require("./controllers/authorizationController.js");
const { crearGenero, listarGeneros, obtenerGenero, borrarGenero } = require("./controllers/genreController.js")
const { crearHabilidadController, listarHabilidadesController, obtenerHabilidadController, borrarHabilidadController } = require("./controllers/habilityController.js")
const { crearPersonajeController, obtenerPersonajeController, 
  listarPersonajesController, borrarPersonajeController,
  anadirHabilidadController } = require("./controllers/characterController.js")
const {crearHistoriaController, generarHistoriaController} = require("./controllers/historyController.js")

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/character', sessionTokenValidate, obtenerPersonajeController)

app.get('/characters', sessionTokenValidate, listarPersonajesController)

app.delete('/character',sessionTokenValidate, borrarPersonajeController)

    // Agregar token al usuario 

app.get('/users', sessionTokenValidate, listarUsuarios)

app.get('/user', obtenerUsuario)

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
