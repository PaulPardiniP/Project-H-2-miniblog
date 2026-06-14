let posts = [
  { id: 1, title: 'Los mejores diseños', content: 'Encontraras una lista completa', author_id: 1, published: true },
  { id: 2, title: 'La facilidad del jardinero', content: 'Como cortar el pasto en simples pasos', author_id: 2, published: false },
  { id: 3, title: 'El color, la importancia', content: 'Encuentra el color que se adapte a tu hogar', author_id: 1, published: true }
];

let nextId = 4;

const getAll = () => posts;

const getById = (id) => posts.find(post => post.id === parseInt(id));

const getByAuthorId = (authorId) => posts.filter(post => post.author_id === parseInt(authorId));

const create = (title, content, author_id, published) => {
  const newPost = { id: nextId++, title, content, author_id, published: published || false };
  posts.push(newPost);
  return newPost;
};

const update = (id, title, content, author_id, published) => {
  const index = posts.findIndex(post => post.id === parseInt(id));
  if (index === -1) return null;
  posts[index] = { ...posts[index], title, content, author_id, published };
  return posts[index];
};

const remove = (id) => {
  const index = posts.findIndex(post => post.id === parseInt(id));
  if (index === -1) return null;
  const deleted = posts.splice(index, 1);
  return deleted[0];
};

module.exports = { getAll, getById, getByAuthorId, create, update, remove };