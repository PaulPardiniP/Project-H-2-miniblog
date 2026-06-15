const express = require('express');
const router = express.Router();
const authorsService = require('../services/authors');

router.get('/', async (req, res) => {
  try {
    const authors = await authorsService.getAll();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const author = await authorsService.getById(req.params.id);
    if (!author) return res.status(404).json({ error: 'Autor no encontrado' });
    res.json(author);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, email, bio } = req.body;
    if (!name || !email) return res.status(400).json({ error: 'name y email son obligatorios' });
    const newAuthor = await authorsService.create(name, email, bio);
    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, email, bio } = req.body;
    if (!name || !email) return res.status(400).json({ error: 'name y email son obligatorios' });
    const author = await authorsService.update(req.params.id, name, email, bio);
    if (!author) return res.status(404).json({ error: 'Autor no encontrado' });
    res.json(author);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const author = await authorsService.remove(req.params.id);
    if (!author) return res.status(404).json({ error: 'Autor no encontrado' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;