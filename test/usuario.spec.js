let chai = require('chai');
const { default: usuario } = require('../models/usuario').default;
let expect = chai.expect;

describe("Objeto Usuario", function(){

    it("El objeto Usuario deberia contar con todos los datos necesarios", function(){
        let usua = new usuario();
        expect(usua).to.have.all.keys('nombre', 'apellido', 'token');
    });
})