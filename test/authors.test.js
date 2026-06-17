const request = require('supertest');
const app = require('../server');

describe('Authors API', () => {
  
  test('GET /authors - debe retornar lista de authors', async () => {
    const res = await request(app).get('/authors');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('GET /authors/:id - debe retornar un author', async () => {
    const res = await request(app).get('/authors/1');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id');
  });

  test('POST /authors - debe crear un author', async () => {
    const res = await request(app)
      .post('/authors')
      .send({ name: 'Test User', email: `test${Date.now()}@test.com`, bio: 'Test bio' });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

  test('GET /authors/:id - debe retornar 404 si no existe', async () => {
    const res = await request(app).get('/authors/99999');
    expect(res.status).toBe(404);
  });

});

afterAll(async () => {
  const pool = require('../db/pool');
  await pool.end();
});