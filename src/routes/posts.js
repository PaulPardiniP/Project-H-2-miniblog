const express = require('express');
const router = express.Router();
const postsService = require('../services/posts');
const { asyncHandler } = require('../middlewares/errorHandler');
const { notFound, badRequest } = require('../helpers/errors');
const { validatePost } = require('../validators/posts');

router.get('/', asyncHandler(async (req, res) => {
  const posts = await postsService.getAll();
  res.json(posts);
}));

router.get('/author/:authorId', asyncHandler(async (req, res) => {
  const posts = await postsService.getByAuthorId(req.params.authorId);
  res.json(posts);
}));

router.get('/:id', asyncHandler(async (req, res, next) => {
  const post = await postsService.getById(req.params.id);
  if (!post) return next(notFound('Post no encontrado'));
  res.json(post);
}));

router.post('/', asyncHandler(async (req, res, next) => {
  const { title, content, author_id, published } = req.body;
  const error = validatePost(title, content, author_id);
  if (error) return next(badRequest(error));
  const newPost = await postsService.create(title, content, author_id, published);
  res.status(201).json(newPost);
}));

router.put('/:id', asyncHandler(async (req, res, next) => {
  const { title, content, author_id, published } = req.body;
  const error = validatePost(title, content, author_id);
  if (error) return next(badRequest(error));
  const post = await postsService.update(req.params.id, title, content, author_id, published);
  if (!post) return next(notFound('Post no encontrado'));
  res.json(post);
}));

router.delete('/:id', asyncHandler(async (req, res, next) => {
  const post = await postsService.remove(req.params.id);
  if (!post) return next(notFound('Post no encontrado'));
  res.status(204).send();
}));

module.exports = router;