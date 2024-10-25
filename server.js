const express = require('express');  // Importar Express
const mysql = require('mysql');  // Importar MySQL
require('dotenv').config();  // Cargar las variables de entorno desde el archivo .env

const app = express();  // Crear una instancia de Express
const port = 3000;  // Puerto en el que se ejecutará la aplicación

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Definir una ruta simple
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
