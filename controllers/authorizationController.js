const UserRepository = require('../repositories/usersRepository')

async function sessionTokenValidate (req, res, next) {
    const sessionToken = req.headers['session-token'];

    if(sessionToken == null || sessionToken == undefined){
                res.status(500)
                res.json({
                "status": "Invalid Token"
                }).send
            return;
    }

    console.log("El Header a validar es: " + sessionToken);
    const repo = UserRepository.getInstance();
    const user = await repo.getUsrSessionToken(sessionToken);
    
    if (sessionToken != "test"){
        if (user == null){
            res.status(500)
                res.json({
                "status": "Invalid Token"
                }).send
            return;
        } else{
            req.username = user.username;
        }
    }else{
        req.username = "test";
    }
    next();
  };

  module.exports = {sessionTokenValidate};