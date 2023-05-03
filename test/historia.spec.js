let chai = require('chai');
const { default: historia } = require('../models/historia').default;
let expect = chai.expect;


describe("Objeto Historia", function(){
    it("Deberia crear un objeto Historia", function(){
        let histor = new historia();
        expect(histor).to.be.an('object');
    });

    it("Deberia crear un objeto Historia con todos los datos necesarios", function(){
        let histor = new historia();
        expect(histor).to.have.all.keys('id', 'descripcion', 'cantpersonajes', 'genero');
    });

    
})