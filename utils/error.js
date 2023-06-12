
module.exports = class ClientError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
    }
}


module.exports = class ServerError extends Error {
  constructor(message, statusCode) {
    //const message = `Internal server error - ${messageParam}`;
    super(message);
    this.statusCode = statusCode;
  }
}
