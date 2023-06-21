const ApiResponse = require('../helpers/ApiResponse')
const isNumeric = require("isnumeric");

const habilityCreateValidate = (req, res, next) => {
    if (!req.body.tipo) {
        ApiResponse.sendErrorResponse(res, 400, "Tipo es un campo requerido")
        return;
    }
    if (!req.body.descripcion) {
        ApiResponse.sendErrorResponse(res, 400, "Descripcion es un campo requerido")
        return;
    }
    next();
};

const habilityGetValidate = (req, res, next) => {
    if (!req.body.id) {
        ApiResponse.sendErrorResponse(res, 400, "El ID es un campo requerido")
        return;
    }
    next();
}

const habilityDeleteValidate = (req, res, next) => {
    if (!req.body.id) {
        ApiResponse.sendErrorResponse(res, 400, "El ID es un campo requerido")
        return;
    }
    next();
}

module.exports = {habilityCreateValidate,habilityGetValidate,habilityDeleteValidate}
