const express = require('express');
const router = express.Router();
const postsService = require('../services/posts');

router.get('/', (req, res) => {
  const posts = postsService.getAll();
  res.json(posts);
});


router.get('/author/:authorId', (req, res) => {
  const posts = postsService.getByAuthorId(req.params.authorId);
  res.json(posts);
});

router.get('/:id', (req, res) => {
  const post = postsService.getById(req.params.id);
  if (!post) return res.status(404).json({ error: 'Post no encontrado' });
  res.json(post);
});

router.post('/', (req, res) => {
  const { title, content, author_id, published } = req.body;
  if (!title || !content || !author_id) return res.status(400).json({ error: 'title, content y author_id son obligatorios' });
  const newPost = postsService.create(title, content, author_id, published);
  res.status(201).json(newPost);
});

router.put('/:id', (req, res) => {
  const { title, content, author_id, published } = req.body;
  if (!title || !content || !author_id) return res.status(400).json({ error: 'title, content y author_id son obligatorios' });
  const post = postsService.update(req.params.id, title, content, author_id, published);
  if (!post) return res.status(404).json({ error: 'Post no encontrado' });
  res.json(post);
});

router.delete('/:id', (req, res) => {
  const post = postsService.remove(req.params.id);
  if (!post) return res.status(404).json({ error: 'Post no encontrado' });
  res.status(204).send();
});

module.exports = router;