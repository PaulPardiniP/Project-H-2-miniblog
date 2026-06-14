let authors = [
  { id: 1, name: 'Anahi Loisa', email: 'analoi@example.com', bio: 'Diseñadora de interiores' },
  { id: 2, name: 'Jairo Palavecino', email: 'jairop@example.com', bio: 'Jardinero escolar' },
  { id: 3, name: 'Ramón Diaz', email: 'ramond@example.com', bio: 'Peluquero masculino y femenino' }
];

let nextId =4; 

const getAll = () => authors;
const getById = (id) => authors.find (a => a.id === parseInt(id));

const create = (name, email, bio) => {
  const newAuthor = { id: nextId++, name, email, bio };
  authors.push(newAuthor);
  return newAuthor;
};

const update = (id, name, email, bio) => {
  const index = authors.findIndex(author => author.id === parseInt(id));
  if (index === -1) return null;
  authors[index] = { ...authors[index], name, email, bio };
  return authors[index];
};

const remove = (id) => {
  const index = authors.findIndex(author => author.id === parseInt(id));
  if (index === -1) return null;
  const deleted = authors.splice(index, 1);
  return deleted[0];
};
 
module.exports= {getAll, getById, create, update, remove};

