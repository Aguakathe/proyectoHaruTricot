const express = require('express'); // Importa el framework Express para crear el servidor
const bodyParser = require('body-parser'); // Middleware para parsear el cuerpo de las peticiones HTTP
const mysql = require('mysql'); // Cliente para conectarse a base de datos MySQL
const cors = require('cors'); // Middleware para habilitar CORS (Cross-Origin Resource Sharing)

const app = express(); // Crea una instancia de la aplicación Express
const port = 3000;  // Puerto donde correrá el servidor

app.use(cors()); // Permite que el servidor acepte peticiones desde otros orígenes (dominios)
app.use(bodyParser.urlencoded({ extended: false })); // Configura el middleware para interpretar datos urlencoded (formularios)
app.use(bodyParser.json()); // Configura el middleware para interpretar datos JSON

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',    // Host de la base de datos
  user: 'root',         // Usuario para la conexión
  password: '',         // Contraseña del usuario
  database: 'haru'  // Nombre de la base de datos
});

// Establece la conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err); // En caso de error, se muestra por consola
    return;
  }
  console.log('Conectado a la base de datos MySQL'); // Mensaje de éxito al conectar
});

// Ruta POST para recibir datos del formulario desde el cliente
app.post('/contacto', (req, res) => {
  // Extrae los datos enviados en el cuerpo de la petición
  const { nombre, email, mensaje } = req.body;

  // Consulta SQL para insertar los datos en la tabla 'contacto'
  const sql = 'INSERT INTO contacto (nombre, email, mensaje) VALUES (?, ?, ?)';
  db.query(sql, [nombre, email, mensaje], (err, result) => {
    if (err) {
      console.error('Error al insertar datos:', err); // Muestra error en caso de fallo en la consulta
      return res.status(500).send('Error del servidor'); // Responde con error 500 al cliente
    }
    // Si se inserta correctamente, envía mensaje de éxito
    res.send('Formulario recibido y guardado correctamente.');
  });
});

// Inicia el servidor en el puerto definido
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`); // Mensaje en consola indicando que el servidor está activo
});
