const UserRepository = require('../repositories/usersRepository')
const ErrorClasses = require('../utils/error');
const ApiResponse = require('../helpers/ApiResponse')

const userDataValidate = (req, res, next) => {
  if (!req.body.nombre) {
    ApiResponse.sendErrorResponse(res, 400, "Name are required field")
    return;
  }
  if (!req.body.apellido) {
    ApiResponse.sendErrorResponse(res, 400, "Last Name are required field")
    return;
  }
  if (!req.body.username) {
    ApiResponse.sendErrorResponse(res, 400, "User Name are required field")
    return;
  }
  if (!req.body.password) {
    ApiResponse.sendErrorResponse(res, 400, "Password are required field")
    return;
  }
  if (req.body.password.length < 5) {
    ApiResponse.sendErrorResponse(res, 400, "Password should have at least 5 characters")
    return;
  }
  next();
};

const userLoginDataValidate = (req, res, next) => {
  if (!req.body.username) {
    ApiResponse.sendErrorResponse(res, 400, "User Name are required fields")
    return;
  }
  if (!req.body.password) {
    ApiResponse.sendErrorResponse(res, 400, "Password are required fields")
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

module.exports = { userDataValidate, userLoginDataValidate, userValidateCredentials };
