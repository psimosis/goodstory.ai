const historia = require('./historia.js').default
const personaje = require('./personaje.js').default

class Command {
    execute() {}
    undo() {}
  }

class generadorHistoria extends Command {
    constructor(descripcion, cantPersonajes, genero){
        super();
        this.descripcion = descripcion;
        this.cantPersonajes = cantPersonajes;
        this.genero = genero;
        this.histor = null;
    }
    ejecutar() {
        this.histor = new historia(this.descripcion, this.cantPersonajes, this.genero, []);

        for (let i = 0; i < this.cantPersonajes; i++) {
            const person = new personaje();
            this.historia.personajes.push(person);
          }
    }
}

