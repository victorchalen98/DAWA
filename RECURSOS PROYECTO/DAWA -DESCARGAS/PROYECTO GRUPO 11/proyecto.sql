CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo_electronico VARCHAR(100) NOT NULL UNIQUE,
    contrasena VARCHAR(100) NOT NULL,
    modelo_telefono VARCHAR(50) NOT NULL,
    danio_telefono VARCHAR(255) NOT NULL,
    fecha_envio DATE NOT NULL,
    fecha_estimada_entrega DATE NOT NULL
);

SELECT * FROM clientes;

INSERT INTO clientes (nombre, correo_electronico, contrasena, modelo_telefono, danio_telefono, fecha_envio, fecha_estimada_entrega)
VALUES ('Juan Pérez', 'juan.perez@gmail.com', 'juan123', 'iPhone 12', 'Pantalla rota', '2024-06-01', '2024-06-20');

INSERT INTO clientes (nombre, correo_electronico, contrasena, modelo_telefono, danio_telefono, fecha_envio, fecha_estimada_entrega)
VALUES ('María López', 'maria.lopez@gmail.com', 'maria456', 'Samsung Galaxy S21', 'Batería no carga', '2024-06-05', '2024-06-21');

