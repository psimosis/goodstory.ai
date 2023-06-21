const { crearUsuarioController, listarUsuarios, obtenerUsuario, login }  = require('./controllers/userController.js')
const { userGetValidate, userDataValidate, userLoginDataValidate } = require("./validations/user.validation.js");
const { charCreateValidate,charGetValidate,charHabilityValidate,charDeleteValidate } = require("./validations/char.validation.js");
const { genreCreateValidate,genreGetValidate,genreDeleteValidate } = require("./validations/genre.validation.js");
const { habilityCreateValidate,habilityGetValidate,habilityDeleteValidate } = require("./validations/hability.validation.js");
const { historyCreateValidate, historyGenerateGetValidate } = require("./validations/historyGen.validation.js");
const { sessionTokenValidate } = require("./controllers/authorizationController.js");
const { crearGenero, listarGeneros, obtenerGenero, borrarGenero } = require("./controllers/genreController.js")
const { crearHabilidadController, listarHabilidadesController, obtenerHabilidadController, borrarHabilidadController } = require("./controllers/habilityController.js")
const { crearPersonajeController, obtenerPersonajeController, 
  listarPersonajesController, borrarPersonajeController,
  anadirHabilidadController } = require("./controllers/characterController.js")
const {crearHistoriaController, generarHistoriaController, listarHistoriasController} = require("./controllers/historyController.js")
const { listarHistoriasGeneradas } = require('./controllers/genHistoryController.js')

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// History methods

app.post('/history', sessionTokenValidate, historyCreateValidate, crearHistoriaController)

app.get('/histories', sessionTokenValidate, listarHistoriasController)

app.post('/history/generate', sessionTokenValidate, historyGenerateGetValidate, generarHistoriaController)

app.get('/histories/generated', sessionTokenValidate, listarHistoriasGeneradas)

// Characters methods
app.post('/character', sessionTokenValidate, charCreateValidate, crearPersonajeController)

app.post('/character/hability', sessionTokenValidate, charHabilityValidate, anadirHabilidadController)

app.get('/character', sessionTokenValidate, charGetValidate, obtenerPersonajeController)

app.get('/characters', sessionTokenValidate, listarPersonajesController)

app.delete('/character',sessionTokenValidate, charDeleteValidate, borrarPersonajeController)

// User methods

app.post('/user', userDataValidate, crearUsuarioController)

app.get('/users', sessionTokenValidate, listarUsuarios)

app.get('/user', sessionTokenValidate, userGetValidate, obtenerUsuario)

app.post('/login', userLoginDataValidate, login)

// Habilities methods

app.post('/hability', sessionTokenValidate, habilityCreateValidate, crearHabilidadController)

app.get('/hability', sessionTokenValidate, habilityGetValidate, obtenerHabilidadController)

app.get('/habilities', sessionTokenValidate, listarHabilidadesController)

app.delete('/hability',sessionTokenValidate, habilityDeleteValidate, borrarHabilidadController)

// Genres methods

app.post('/genre', sessionTokenValidate, genreCreateValidate, crearGenero)

app.get('/genres', sessionTokenValidate, listarGeneros)

app.get('/genre', sessionTokenValidate, genreGetValidate, obtenerGenero)

app.delete('/genre', sessionTokenValidate, genreDeleteValidate, borrarGenero)
