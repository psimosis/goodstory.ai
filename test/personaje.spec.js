let chai = require('chai');
const personaje= require('../models/personaje');
let expect = chai.expect;

describe("Objeto Personaje", function(){

    it("El objeto Personaje deberia contar con todos los datos necesarios", function(){
        let person = new personaje();
        expect(person).to.have.all.keys('nombre', 'descripcion', 'edad');
    });
})