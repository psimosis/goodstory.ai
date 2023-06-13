const UserRepository = require('../repositories/usersRepository')
const ErrorClasses = require('../utils/error');

const userDataValidate = (req, res, next) => {
  if (!req.body.nombre) {
    res.status(400);
    res.json({
      "status": "Name are required field"
    }).send;
    return;
  }
  if (!req.body.apellido) {
    res.status(400);
    res.json({
      "status": "Last Name are required field"
    }).send;
    return;
  }
  if (!req.body.username) {
    res.status(400);
    res.json({
      "status": "User Name are required field"
    }).send;
    return;
  }
  if (!req.body.password) {
    res.status(400);
    res.json({
      "status": "Password are required field"
    }).send;
    return;
  }
  if (req.body.password.length < 5) {
    res.status(400);
    res.json({
      "status": "Password should have at least 5 characters"
    }).send;
    return;
  }
  next();
};

const userLoginDataValidate = (req, res, next) => {
  if (!req.body.username) {
    res.status(400).send('Bad Request: User Name are required fields');
    return;
  }
  if (!req.body.password) {
    res.status(400).send('Bad Request: Password are required fields');
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
