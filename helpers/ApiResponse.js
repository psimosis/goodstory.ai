module.exports = class ApiResponse {
    static sendSuccessResponse(res, statusCode, data) {
      res.status(statusCode).json(data);
    }
  
    static sendErrorResponse(res, statusCode, message) {
        res.status(statusCode).json({ error: message });
    }
  }
  