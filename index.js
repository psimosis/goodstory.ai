const Personaje = require('./models/personaje.js')

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const listaPersonajes = []

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