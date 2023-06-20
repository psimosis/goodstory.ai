const { v4: uuidv4 } = require('uuid');

class Genero {
    constructor(nombre, descripcion, username) {
        this.id = uuidv4();
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.username = username;
    }
}

module.exports = Genero;