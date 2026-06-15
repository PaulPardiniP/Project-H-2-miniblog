const express = require('express');
const router = express.Router();
const postsService = require('../services/posts');

router.get('/', async (req, res) => {
  try {
    const posts = await postsService.getAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.get('/author/:authorId', async (req, res) => {
  try {
    const posts = await postsService.getByAuthorId(req.params.authorId);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const post = await postsService.getById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post no encontrado' });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, content, author_id, published } = req.body;
    if (!title || !content || !author_id) return res.status(400).json({ error: 'title, content y author_id son obligatorios' });
    const newPost = await postsService.create(title, content, author_id, published);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { title, content, author_id, published } = req.body;
    if (!title || !content || !author_id) return res.status(400).json({ error: 'title, content y author_id son obligatorios' });
    const post = await postsService.update(req.params.id, title, content, author_id, published);
    if (!post) return res.status(404).json({ error: 'Post no encontrado' });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const post = await postsService.remove(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post no encontrado' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;