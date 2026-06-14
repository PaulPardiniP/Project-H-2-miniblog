const express = require('express');
const router = express.Router(); 
const authorsService = require ('../services/authors');

router.get ('/', (req,res) => {
    const authors = authorsService.getAll();
    res.json(authors);
});

router.get ('/:id', (req,res)=> {
    const author = authorsService.getById (req.params.id);
    
    if(!author)
        return res.status (404).json ({error: 'Autor no encontrado'});
    
    res.json (author);
});


router.post ('/', (req,res) =>{
    const { name, email, bio } = req.body;
    
    if (!name ||!email)
        return res.status (400).json ({error: 'name y email son obligatorios'});

    const newAuthor= authorsService.create(name, email, bio);
    res.status (201).json (newAuthor);
});

router.put('/:id', (req, res) => {
  const { name, email, bio } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'name y email son obligatorios' });
  const author = authorsService.update(req.params.id, name, email, bio);
  if (!author) return res.status(404).json({ error: 'Autor no encontrado' });
  res.json(author);
});

router.delete('/:id', (req, res) => {
  const author = authorsService.remove(req.params.id);
  if (!author) return res.status(404).json({ error: 'Autor no encontrado' });
  res.status(204).send();
});


module.exports=router;