# MiniBlog API

API REST desarrollada con Node.js, Express y PostgreSQL para gestionar autores y posts.

El proyecto permite realizar operaciones CRUD sobre autores y publicaciones, usando una relación simple donde un autor puede tener muchos posts.

## Tecnologías

* Node.js
* Express
* PostgreSQL
* pg
* Jest
* Supertest
* OpenAPI

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
├── tests/
│   ├── authors.test.js
│   └── posts.test.js
├── openapi.yaml
├── .env.example
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## Requisitos

Para ejecutar el proyecto localmente se necesita tener instalado:

* Node.js
* npm
* PostgreSQL

## Instalación local

Clonar el repositorio:

```bash
git clone URL_DE_TU_REPOSITORIO
cd Project-H-2-miniblog
```

Instalar dependencias:

```bash
npm install
```

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto usando como referencia `.env.example`.

Ejemplo:

```env
PORT=3000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=tu_password
DB_NAME=miniblog
DB_PORT=3001
```

## Base de datos

Ejecutar el script SQL para crear las tablas e insertar datos iniciales:

```bash
psql -U postgres -p 3001 -d miniblog -f db/setup.sql
```

El archivo `setup.sql` crea las tablas `authors` y `posts`, junto con sus relaciones y datos de prueba.

## Ejecutar el proyecto

Iniciar el servidor:

```bash
npm start
```

La API estará disponible en:

```txt
http://localhost:3000
```

## Ejecutar tests

Ejecutar las pruebas automatizadas:

```bash
npm test
```

Los tests fueron realizados con Jest y Supertest.

## Documentación OpenAPI

La documentación de la API se encuentra en el archivo:

```txt
openapi.yaml
```

Para visualizarla, se puede copiar el contenido del archivo y pegarlo en Swagger Editor:

```txt
https://editor.swagger.io/
```

## Deployment en Railway

El proyecto será desplegado en Railway conectando el repositorio de GitHub con un servicio de Node.js y una base de datos PostgreSQL.

Variables de entorno necesarias en Railway:

```env
PORT=
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=
```

URL pública de la API:

```txt
Pendiente
```

Internal URL de PostgreSQL en Railway:

```txt
Pendiente
```

Cuando el deploy esté configurado, se debe reemplazar `Pendiente` por las URLs reales generadas por Railway.

## Uso de IA

Durante el desarrollo del proyecto se utilizó inteligencia artificial como apoyo para:

* Revisar la estructura del proyecto.
* Comprender el flujo entre rutas, servicios, validadores, middlewares y base de datos.
* Corregir errores de configuración.
* Completar la documentación OpenAPI.
* Redactar y organizar el README.

La IA fue utilizada como herramienta de asistencia y aprendizaje. El código fue probado, revisado y adaptado al proyecto MiniBlog.
