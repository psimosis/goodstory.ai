const Personaje = require('./models/personaje.js')

const express = require('express')
const app = express()
const port = 3000

app.get('/personajes', (req, res) => {
  const personaje = new Personaje(1, "Jose", "Heroe", "No es bueno", 22)
  console.log(personaje)
  res.send(personaje)
})

app.post('/personaje', (req, res) => {
    const personaje = new Personaje(1, "Jose", "Heroe", "No es bueno", 22)
    console.log(personaje)
    res.send(personaje)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})