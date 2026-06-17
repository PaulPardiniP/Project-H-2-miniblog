const validatePost = (title, content, author_id) => {
  if (!title || !title.trim()) return 'El título es requerido';
  if (!content || !content.trim()) return 'El contenido es requerido';
  if (!author_id) return 'El author_id es requerido';
  
  return null;
};

module.exports = { validatePost };