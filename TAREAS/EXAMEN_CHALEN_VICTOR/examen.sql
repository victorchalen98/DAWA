-- Crear base de datos
CREATE DATABASE red_social;
USE red_social;

-- Tabla de usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla amigos 
CREATE TABLE amigos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    amigo_id INT NOT NULL,
    fecha_amistad TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (amigo_id) REFERENCES usuarios(id)
);

-- Tabla de publicaciones
CREATE TABLE publicaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    contenido TEXT NOT NULL,
    num_reacciones INT DEFAULT 0,
    num_comentarios INT DEFAULT 0,
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Tabla  reacciones
CREATE TABLE reacciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    publicacion_id INT NOT NULL,
    usuario_id INT NOT NULL,
    tipo ENUM('like', 'love', 'haha', 'wow', 'sad', 'angry') NOT NULL,
    fecha_reaccion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (publicacion_id) REFERENCES publicaciones(id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Tabla  comentarios
CREATE TABLE comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    publicacion_id INT NOT NULL,
    usuario_id INT NOT NULL,
    contenido TEXT NOT NULL,
    fecha_comentario TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (publicacion_id) REFERENCES publicaciones(id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
-- Insertar datos 
INSERT INTO usuarios (nombre, correo) VALUES
('Juan Perez', 'juan.perez@gmail.com'),
('Maria Gomez', 'maria.gomez@gmail.com'),
('Carlos Ruiz', 'carlos.ruiz@gmail.com');


INSERT INTO amigos (usuario_id, amigo_id) VALUES
(1, 2), (1, 3),
(2, 1), (2, 3),
(3, 1), (3, 2);


INSERT INTO publicaciones (usuario_id, contenido, num_reacciones, num_comentarios) VALUES
-- Juan
(1, 'Me llamo Juan', 5, 2), -- más reacciones
(1, 'Me gusta el futbol', 2, 5), -- más comentarios
(1, 'Quiero dormir', 3, 3),

-- Maria
(2, 'Soy Maria', 4, 3), -- más reacciones
(2, 'hace calor', 6, 2), -- más comentarios
(2, 'Perros > gatos', 3, 4),

-- Carlos
(3, 'Aguante River Plate', 7, 1), -- más reacciones
(3, 'DAWA es la mejor materia <3', 3, 5), -- más comentarios
(3, 'Mañana es viernes', 2, 2);

-- reacciones
-- Juan
INSERT INTO reacciones (publicacion_id, usuario_id, tipo) VALUES
(1, 2, 'like'), (1, 3, 'love'), (1, 2, 'haha'), (1, 3, 'wow'), (1, 2, 'angry');
-- Maria
INSERT INTO reacciones (publicacion_id, usuario_id, tipo) VALUES
(4, 1, 'wow'), (4, 3, 'like'), (4, 1, 'haha'), (4, 3, 'angry');
-- Carlos
INSERT INTO reacciones (publicacion_id, usuario_id, tipo) VALUES
(7, 1, 'love'), (7, 2, 'like'), (7, 1, 'haha'), (7, 2, 'wow'), (7, 1, 'angry'), (7, 2, 'sad');

--comentarios
-- Juan
INSERT INTO comentarios (publicacion_id, usuario_id, contenido) VALUES
(2, 2, 'jajajajajaja'), (2, 3, 'jijijijijijij'), (2, 2, 'jojojojojojojojoj'), (2, 3, 'jujujujujujuju'), (2, 2, 'jejejejejeje');
-- Maria
INSERT INTO comentarios (publicacion_id, usuario_id, contenido) VALUES
(5, 1, 'Hola'), (5, 3, 'Holis'), (5, 1, 'Hello'), (5, 3, 'HI'), (5, 1, 'annyeong');
-- Carlos
INSERT INTO comentarios (publicacion_id, usuario_id, contenido) VALUES
(8, 1, 'chao'), (8, 2, 'adios'), (8, 1, 'sayonara'), (8, 2, 'bye bye'), (8, 1, 'Nos vemos');
