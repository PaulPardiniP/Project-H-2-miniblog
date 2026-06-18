function errorHandler(err, req, res, next) {
  const statusCode = err.status || 500;

  console.error('Error real:', {
    status: statusCode,
    message: err.message,
    code: err.code,
    detail: err.detail,
    stack: err.stack,
    path: req.path,
    method: req.method
  });

  res.status(statusCode).json({
    error: statusCode === 500 ? 'Error interno del servidor' : err.message,
    status: statusCode
  });
}

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = { errorHandler, asyncHandler };