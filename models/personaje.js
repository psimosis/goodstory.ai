class Personaje {
    constructor(id, nombre, tipo, descripcion, edad) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.edad = edad;
        this.habilidades = [];
    }

    agregarHabilidad(habilidad) {
        this.habilidades.push(habilidad);
    }
}


module.exports = Personaje;