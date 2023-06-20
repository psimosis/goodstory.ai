const { v4: uuidv4 } = require('uuid');

class Personaje {
    constructor(nombre, tipo, descripcion, edad, username) {
        this.id = uuidv4() ;
        this.nombre = nombre;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.edad = edad;
        this.username = username;
        this.habilidades = [];
    }

    agregarHabilidad(habilidad) {
        this.habilidades.push(habilidad);
    }
}


module.exports = Personaje;