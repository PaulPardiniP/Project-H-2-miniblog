# MiniBlog API

API REST desarrollada con **Node.js**, **Express** y **PostgreSQL** para gestionar autores y publicaciones de un miniblog.

El proyecto permite crear, leer, actualizar y eliminar autores y posts, utilizando una base de datos relacional desplegada en Railway.

---

## Deploy

API desplegada en Railway:

```txt
https://project-h-2-miniblog-production.up.railway.app
```

---

## Tecnologías utilizadas

* Node.js
* Express
* PostgreSQL
* pg
* dotenv
* Jest
* Supertest
* Railway
* OpenAPI

---

## Estructura del proyecto

```txt
Project-H-2-miniblog/
├── db/
│   ├── setup.sql
│   └── pool.js
├── src/
│   ├── routes/
│   │   ├── authors.js
│   │   └── posts.js
│   ├── services/
│   │   ├── authors.js
│   │   └── posts.js
│   ├── validators/
│   │   ├── authors.js
│   │   └── posts.js
│   ├── middlewares/
│   │   └── errorHandler.js
│   └── helpers/
│       └── errors.js
├── test/
│   ├── authors.test.js
│   └── posts.test.js
├── openapi.yaml
├── .env.example
├── .gitignore
├── package.json
└── server.js
```

---

## Instalación local

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
cd Project-H-2-miniblog
```

Instalar dependencias:

```bash
npm install
```

---

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto tomando como referencia `.env.example`.

Ejemplo para conexión local o Railway:

```env
PORT=3000
DB_HOST=host_de_postgres
DB_USER=postgres
DB_PASSWORD=password_de_postgres
DB_NAME=railway
DB_PORT=puerto_de_postgres
```

Archivo `.env.example`:

```env
PORT=3000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=tu_password
DB_NAME=miniblog
DB_PORT=5432
```

> Importante: el archivo `.env` no debe subirse al repositorio.

---

## Base de datos

El script de creación de tablas se encuentra en:

```txt
db/setup.sql
```

Este script crea las tablas:

* `authors`
* `posts`

También inserta datos iniciales de prueba.

Para ejecutar el script en PostgreSQL:

```bash
psql -h HOST -p PORT -U USER -d DATABASE -f db/setup.sql
```

O desde la consola de PostgreSQL:

```sql
\i ruta/del/proyecto/db/setup.sql
```

---

## Ejecutar el proyecto

Para iniciar el servidor:

```bash
npm start
```

Servidor local:

```txt
http://localhost:3000
```

---

## Endpoints principales

### Authors

| Método | Endpoint       | Descripción               |
| ------ | -------------- | ------------------------- |
| GET    | `/authors`     | Obtener todos los autores |
| GET    | `/authors/:id` | Obtener un autor por ID   |
| POST   | `/authors`     | Crear un autor            |
| PUT    | `/authors/:id` | Actualizar un autor       |
| DELETE | `/authors/:id` | Eliminar un autor         |

### Posts

| Método | Endpoint                  | Descripción             |
| ------ | ------------------------- | ----------------------- |
| GET    | `/posts`                  | Obtener todos los posts |
| GET    | `/posts/:id`              | Obtener un post por ID  |
| POST   | `/posts`                  | Crear un post           |
| PUT    | `/posts/:id`              | Actualizar un post      |
| DELETE | `/posts/:id`              | Eliminar un post        |
| GET    | `/posts/author/:authorId` | Obtener posts por autor |

---

## Ejemplos de uso

### Obtener autores

```bash
curl https://project-h-2-miniblog-production.up.railway.app/authors
```

### Obtener posts

```bash
curl https://project-h-2-miniblog-production.up.railway.app/posts
```

### Crear un autor

```bash
curl -X POST https://project-h-2-miniblog-production.up.railway.app/authors \
-H "Content-Type: application/json" \
-d '{
  "name": "Nuevo Autor",
  "email": "nuevoautor@example.com",
  "bio": "Biografía del autor"
}'
```

### Crear un post

```bash
curl -X POST https://project-h-2-miniblog-production.up.railway.app/posts \
-H "Content-Type: application/json" \
-d '{
  "title": "Nuevo post",
  "content": "Contenido del nuevo post",
  "published": true,
  "author_id": 1
}'
```

---

## Validaciones

El proyecto incluye validaciones para autores y posts.

### Authors

Campos requeridos:

* `name`
* `email`

### Posts

Campos requeridos:

* `title`
* `content`
* `author_id`

---

## Manejo de errores

La API utiliza un middleware centralizado para manejar errores.

Ejemplos de errores controlados:

* Autor no encontrado
* Post no encontrado
* Campos obligatorios faltantes
* Error interno del servidor

---

## Tests

El proyecto incluye tests con Jest y Supertest.

Para ejecutar los tests:

```bash
npm test
```

Resultado esperado:

```txt
Test Suites: 2 passed
Tests: 8 passed
```

---

## Documentación OpenAPI

La documentación de la API se encuentra en:

```txt
openapi.yaml
```

Este archivo describe los endpoints disponibles, parámetros, respuestas y esquemas principales.

---

## Deploy en Railway

El proyecto fue desplegado en Railway junto con una base de datos PostgreSQL.

Pasos realizados:

1. Crear proyecto en Railway.
2. Crear servicio PostgreSQL.
3. Ejecutar el script `db/setup.sql` en la base de datos.
4. Configurar variables de entorno en Railway.
5. Desplegar la aplicación Express.
6. Verificar los endpoints públicos.

URL pública:

```txt
https://project-h-2-miniblog-production.up.railway.app
```

---

## Uso de inteligencia artificial

Se utilizó inteligencia artificial como apoyo para:

* Organizar la estructura del proyecto.
* Revisar errores de conexión.
* Mejorar documentación.
* Verificar buenas prácticas generales.
* Acompañar el proceso de deploy.

El código fue revisado, adaptado y ejecutado manualmente durante el desarrollo del proyecto.

---

## Autor

Proyecto desarrollado por Paul Pardini para el Proyecto Integrador de Soy Henry.
