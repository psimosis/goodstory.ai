const { v4: uuidv4 } = require('uuid');

class Habilidad {
    constructor(tipo, descripcion, username) {
        this.id = uuidv4();
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.username = username;
    }
}


module.exports = Habilidad;