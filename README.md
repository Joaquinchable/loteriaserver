# Proyecto Lotería

Este es un proyecto de lotería desarrollado con Node.js, Express y MySQL.

## Instalación

Para instalar las dependencias del proyecto, asegúrate de tener Node.js instalado en tu sistema. Luego, ejecuta el siguiente comando:

Este comando instalará las siguientes dependencias:

npm install

- cors: ^2.8.5
- express: ^4.18.3
- mysql: ^2.18.1

Además, asegúrate de tener instalado MySQL en tu sistema. Puedes ejecutar el siguiente comando SQL para crear la base de datos "loteria":

```sql
CREATE DATABASE loteria;

Para crear el mismo usuario s
CREATE USER 'lote'@'localhost' IDENTIFIED BY '12345';


si no es pasar su usuario 
``
const connection = mysql.createConnection({
  host: "localhost",
  user: "lote",
  password: "12345",
  database: "loteria",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  port: "3306",
});
´´

las cartas se crean solas al correr el proyecto 

node 18.17.0 utilizar

correr el proyecto con el comando   

- node --watch index.js 

(solo con version node 18 para arriba)