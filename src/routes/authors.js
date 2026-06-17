const express = require('express');
const router = express.Router();
const authorsService = require('../services/authors');
const { asyncHandler } = require('../middlewares/errorHandler');
const { notFound, badRequest } = require('../helpers/errors');
const { validateAuthor } = require('../validators/authors');

router.get('/', asyncHandler(async (req, res) => {
  const authors = await authorsService.getAll();
  res.json(authors);
}));

router.get('/:id', asyncHandler(async (req, res, next) => {
  const author = await authorsService.getById(req.params.id);
  if (!author) return next(notFound('Autor no encontrado'));
  res.json(author);
}));

router.post('/', asyncHandler(async (req, res, next) => {
  const { name, email, bio } = req.body;
  const error = validateAuthor(name, email);
  if (error) return next(badRequest(error));
  const newAuthor = await authorsService.create(name, email, bio);
  res.status(201).json(newAuthor);
}));

router.put('/:id', asyncHandler(async (req, res, next) => {
  const { name, email, bio } = req.body;
  const error = validateAuthor(name, email);
  if (error) return next(badRequest(error));
  const author = await authorsService.update(req.params.id, name, email, bio);
  if (!author) return next(notFound('Autor no encontrado'));
  res.json(author);
}));

router.delete('/:id', asyncHandler(async (req, res, next) => {
  const author = await authorsService.remove(req.params.id);
  if (!author) return next(notFound('Autor no encontrado'));
  res.status(204).send();
}));

module.exports = router;