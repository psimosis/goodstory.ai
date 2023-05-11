let chai = require('chai');
const Habilidad = require('../models/habilidad.js');
const Personaje = require('../models/personaje.js');
let expect = chai.expect;

describe("Objeto Personaje", function(){

    // it("El objeto Personaje deberia contar con todos los datos necesarios", function(){
    //    let person = new Personaje();
    //    expect(person).to.have.all.keys('nombre', 'descripcion', 'edad', 'tipo');
    // });

    it('debería crear un personaje con nombre, tipo, descripcion, edad',  () => {
        // Arrange
        const nombre = 'Tom';
        const tipo = 'Protagonista';
        const descripcion = 'Es un personaje medio loco';
        const edad = '150';

        // Act
        const character = new Personaje(nombre, tipo, descripcion, edad);

        // Assert
        expect(character.nombre).to.equal(nombre);
        expect(character.tipo).to.equal(tipo);
        expect(character.descripcion).to.equal(descripcion);
        expect(character.edad).to.equal(edad);
      });
    
      it('debería permitir agregar una habilidad al personaje', () => {
        // Arrange
        let personaje = null;
        personaje = new Personaje('Tom', 'Protagonista','Es un personaje medio loco','150');
        const habilidad = new Habilidad("Fuerza","Alta");
    
        // Act
        personaje.agregarHabilidad(habilidad);

        // Assert
        expect(personaje.habilidades).to.contains(habilidad);

      });

      it('si tiene mas de 3 personajes, tirar error', () => {
      }
})