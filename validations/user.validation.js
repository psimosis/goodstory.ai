const UserRepository = require('../repositories/usersRepository')
const ErrorClasses = require('../utils/error');
const ApiResponse = require('../helpers/ApiResponse')

const userDataValidate = (req, res, next) => {
  if (!req.body.nombre) {
    ApiResponse.sendErrorResponse(res, 400, "Nombre es un campo requerido.");
    return;
  }
  if (!req.body.apellido) {
    ApiResponse.sendErrorResponse(res, 400, "Apellido es un campo requerido")
    return;
  }
  if (!req.body.username) {
    ApiResponse.sendErrorResponse(res, 400, "El nombre de usuario es un campo requerido")
    return;
  }
  if (!req.body.password) {
    ApiResponse.sendErrorResponse(res, 400, "La contraseña es un campo requerido")
    return;
  }
  if (req.body.password.length < 5) {
    ApiResponse.sendErrorResponse(res, 400, "La contraseña debe contener al menos 5 caracteres")
    return;
  }
  next();
};

const userGetValidate = (req, res, next) => {
  if (!req.body.id) {
      ApiResponse.sendErrorResponse(res, 400, "El ID del Personaje es un campo requerido")
      return;
  }
  next();
}

const userLoginDataValidate = (req, res, next) => {
  if (!req.body.username) {
    ApiResponse.sendErrorResponse(res, 400, "El nombre de usuario es un campo requerido")
    return;
  }
  if (!req.body.password) {
    ApiResponse.sendErrorResponse(res, 400, "La contraseña es un campo requerido")
    return;
  }
  next();
};

async function userValidateCredentials (username, password) {
  const repo = UserRepository.getInstance();
  try {
    const user = await repo.obtenerUsuario(username)
    
    if (user.password != password){
      throw new ErrorClasses.Error401();
    }
  } catch(e) {
      throw e
  }
}

module.exports = { userGetValidate, userDataValidate, userLoginDataValidate, userValidateCredentials };
