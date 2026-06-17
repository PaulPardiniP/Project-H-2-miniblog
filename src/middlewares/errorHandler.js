const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Error interno del servidor';

  console.error('Error capturado:', {
    status: statusCode,
    message: message,
    path: req.path,
    method: req.method
  });

  res.status(statusCode).json({
    error: message,
    status: statusCode
  });
};

const asyncHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

module.exports = { errorHandler, asyncHandler };