const createError = (message, statusCode) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

const notFound = (message) => {
  return createError(message, 404);
};

const badRequest = (message) => {
  return createError(message, 400);
};

module.exports = { createError, notFound, badRequest };