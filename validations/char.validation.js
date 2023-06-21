const ApiResponse = require('../helpers/ApiResponse')
const isNumeric = require("isnumeric");

const charCreateValidate = (req, res, next) => {
    if (!req.body.nombre) {
        ApiResponse.sendErrorResponse(res, 400, "Nombre es un campo requerido")
        return;
    }
    if (!req.body.tipo) {
        ApiResponse.sendErrorResponse(res, 400, "Tipo es un campo requerido")
        return;
    }
    if (!req.body.descripcion) {
        ApiResponse.sendErrorResponse(res, 400, "Descripcion es un campo requerido")
        return;
    }
    if (!req.body.edad) {
        ApiResponse.sendErrorResponse(res, 400, "Edad es un campo requerido")
        return;
    }
    console.log(isNumeric(req.body.edad));
    if (!isNumeric(req.body.edad)){
        ApiResponse.sendErrorResponse(res, 400, "La edad debe estar en años")
        return;
    }
    next();
};

const charGetValidate = (req, res, next) => {
    if (!req.body.id) {
        ApiResponse.sendErrorResponse(res, 400, "El ID del Personaje es un campo requerido")
        return;
    }
    next();
}

const charHabilityValidate = (req, res, next) => {
    if (!req.body.id) {
        ApiResponse.sendErrorResponse(res, 400, "El ID del Personaje es un campo requerido")
        return;
    }
    if (!req.body.habilidad) {
        ApiResponse.sendErrorResponse(res, 400, "El ID de la habilidad es un campo requerido")
        return;
    }
    next();
}

const charDeleteValidate = (req, res, next) => {
    if (!req.body.id) {
        ApiResponse.sendErrorResponse(res, 400, "El ID del Personaje es un campo requerido")
        return;
    }
    next();
}

module.exports = {charCreateValidate,charGetValidate,charHabilityValidate,charDeleteValidate}
