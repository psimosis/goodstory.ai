const { v4: uuidv4 } = require('uuid');


class historia {
    constructor(title, descripcion, cantpersonajes, genero, personajes, username) {
        this.id = uuidv4();
        this.title = title;
        this.descripcion = descripcion;
        this.genero = genero;
        this.personajes = personajes;
        this.username = username
    }
    
}

module.exports = historia;