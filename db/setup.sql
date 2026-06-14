CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name VARCHAR (100) NOT NULL, 
    email VARCHAR (100) UNIQUE NOT NULL, 
    bio TEXT , 
    created_at TIMESTAMPTZ DEFAULT NOW ()
);

CREATE TABLE posts (
     id SERIAL PRIMARY KEY,
     title VARCHAR (200) NOT NULL,
     content TEXT NOT NULL,
     published BOOLEAN DEFAULT FALSE,
     created_at TIMESTAMPTZ DEFAULT NOW (),
     author_id INTEGER NOT NULL, 
     FOREIGN KEY (author_id) REFERENCES authors(id) ON DELETE CASCADE
);

INSERT INTO authors (name, email, bio) VALUES
('Anahi Loisa', 'analoi@example.com', 'Diseñadora de interiores'),
('Jairo Palavecino', 'jairop@example.com', 'Jardinero escolar'),
('Ramón Diaz', 'ramond@example.com', 'Peluquero masculina y femenina');

INSERT INTO posts (title, content, published, author_id) VALUES
('Los mejores diseños', 'Encontraras una lista completa', true, 1),
('La facilidad del jardinero', 'Como cortar el pasto en simples pasos', false, 2),
('El color, la importancia', 'Encuentra el color que se adapte a tu hogar', true, 1);
