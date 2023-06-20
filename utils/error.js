
class ClientError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
    }
}


class ServerError extends Error {
  constructor(message, statusCode) {
    //const message = `Internal server error - ${messageParam}`;
    super(message);
    this.statusCode = statusCode;
  }
}

class Error400 extends ClientError {
  constructor() {
    const message =  "Solicitud inválida"
    const statusCode = 400
    super(message, statusCode);
  }
}

class Error401 extends ClientError {
  constructor() {
    const statusCode = 401;
    const message = "No autorizado";
    super(message, statusCode);
  }
}

class Error403 extends ClientError {
  constructor() {
    const statusCode = 403;
    const message = "Acceso denegado";
    super(message, statusCode);
  }
}

class Error404 extends ClientError {
  constructor() {
    const statusCode = 404;
    const message = "Recurso no encontrado";
    super(message, statusCode);
  }
}

class Error405 extends ClientError {
  constructor() {
    const statusCode = 405;
    const message = "Método no permitido";
    super(message, statusCode);
  }
}

class Error409 extends ClientError {
  constructor() {
    const statusCode = 409;
    const message = "Conflicto";
    super(message, statusCode);
  }
}

class Error500 extends ServerError {
  constructor() {
    const statusCode = 500;
    const message = "Error interno del servidor";
    super(message, statusCode);
  }
}

class Error503 extends ServerError {
  constructor() {
    const statusCode = 503;
    const message = "Servicio no disponible";
    super(message, statusCode);
  }
}


module.exports = {
  ClientError,
  ServerError,
  Error400,
  Error401,
  Error403,
  Error404,
  Error405,
  Error409,
  Error500,
  Error503
};