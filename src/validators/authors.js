const validateAuthor = (name, email) => {
  if (!name || !name.trim()) return 'El nombre es requerido';
  if (!email || !email.trim()) return 'El email es requerido';
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'El formato del email es inválido';
  
  return null;
};

module.exports = { validateAuthor };