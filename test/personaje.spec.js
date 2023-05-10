let chai = require('chai');
const personaje= require('../models/personaje');
let expect = chai.expect;

describe("Objeto Personaje", function(){

    //it("El objeto Personaje deberia contar con todos los datos necesarios", function(){
    //    let person = new personaje();
    //    expect(person).to.have.all.keys('nombre', 'descripcion', 'edad');
    //});

    it('debería crear un personaje con nombre, tipo, descripcion, edad',  () => {
        // Arrange
        const nombre = 'Tom';
        const tipo = 'Protagonista';
        const descripcion = 'Es un personaje medio loco';
        const edad = '150';
    
        // Act
        const personaje = new personaje(nombre, tipo, descripcion, edad);
    
        // Assert
        expect(personaje.nombre).to.equal(nombre);
        expect(personaje.tipo).to.equal(tipo);
        expect(personaje.descripcion).to.equal(descripcion);
        expect(personaje.edades).to.equal(edad);
      });
    
      it('debería permitir agregar una habilidad al personaje', () => {
        // Arrange
        const personaje = new personaje('Tom', 'Protagonista','Es un personaje medio loco','150');
        const habilidad = new habilidad('Fuerza', 'Alta');
    
        // Act
        personaje.agregarHabilidad(habilidad);
    
        // Assert
        expect(personaje.habilidades).to.contain(habilidad);
      });
})