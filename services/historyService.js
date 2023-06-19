const HistoryRepository = require('../repositories/historyRepository')
const GenreRepository = require("../repositories/genreRepository")
const CharacterRepository = require("../repositories/characterRepository")
const HabilityRepository = require("../repositories/habilityRepository")
const Historia = require('../models/historia')
const Personaje = require('../models/personaje')
const Genero = require('../models/genero')
const Habilidad = require('../models/habilidad')
const ApiResponse = require('../helpers/ApiResponse')

async function generarHistoriaService(historiaId, username) {
    try {
        
        const repoHistoria = HistoryRepository.getInstance();
        const repoPersonaje = CharacterRepository.getInstance();
        const repoHabilidad = HabilityRepository.getInstance();
        const repoGenero = GenreRepository.getInstance();

        const historiaCreada = await repoHistoria.generarHistoria(historiaId, username);

        const historiaAGenerar = new Historia(historiaCreada.title, historiaCreada.descripcion);
        
        const generoObtenido = await repoGenero.obtenerGenero(historiaCreada.genero, username);

        historiaAGenerar.setGenero(new Genero(generoObtenido.nombre,
            generoObtenido.descripcion));

        for (let index = 0; index < historiaCreada.personajes.length; index++) {
            const p = historiaCreada.personajes[index];
            const personajeDB = await repoPersonaje.obtenerPersonaje(p, username)
            const personajeA = new Personaje(personajeDB.nombre, personajeDB.tipo, 
                personajeDB.descripcion, personajeDB.edad)
        
            if(personajeDB.habilidades != null || personajeDB.habilidades != undefined) {
                for (let index = 0; index < personajeDB.habilidades.length; index++) {
                    const h = personajeDB.habilidades[index];
                    const habilidadDB = await repoHabilidad.obtenerHabilidad(h, username)
                    console.log(habilidadDB)
                    personajeA.agregarHabilidad(new Habilidad(habilidadDB.tipo, habilidadDB.descripcion))
                }
            }
            historiaAGenerar.personajes.push(personajeA)
        }

        return historiaAGenerar
    }catch(e){
       throw e
    }
}

module.exports = { generarHistoriaService }