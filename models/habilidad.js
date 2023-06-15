const { v4: uuidv4 } = require('uuid');

class Habilidad {
    constructor(tipo, descripcion) {
        this.id = uuidv4();
        this.tipo = tipo;
        this.descripcion = descripcion;
    }
}


module.exports = Habilidad;