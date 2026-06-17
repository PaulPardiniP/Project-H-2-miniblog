const request = require('supertest');
const app = require('../server');

describe('Posts API', () => {

  test('GET /posts - debe retornar lista de posts', async () => {
    const res = await request(app).get('/posts');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('GET /posts/:id - debe retornar un post', async () => {
    const res = await request(app).get('/posts/1');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id');
  });

  test('POST /posts - debe crear un post', async () => {
    const res = await request(app)
      .post('/posts')
      .send({ title: 'Test post', content: 'Contenido test', author_id: 1, published: false });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

  test('GET /posts/:id - debe retornar 404 si no existe', async () => {
    const res = await request(app).get('/posts/99999');
    expect(res.status).toBe(404);
  });

});

afterAll(async () => {
  const pool = require('../db/pool');
  await pool.end();
});