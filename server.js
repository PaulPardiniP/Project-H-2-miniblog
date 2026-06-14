require('dotenv').config(); 
const express = require ('express');
const app = express ();

app.use (express.json());

const PORT = process.env.PORT || 3000;

const authorsRouter = require('./src/routes/authors');
app.use('/authors', authorsRouter);

const postsRouter = require('./src/routes/posts');
app.use('/posts', postsRouter);

app.listen (PORT, () => {
    console.log (`Servidor corriendo en puerto ${PORT}`);
});