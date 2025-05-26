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

// Ruta POST para recibir datos del formulario de CONTACTO
app.post('/contacto', (req, res) => {
  // Extrae los datos enviados en el cuerpo de la petición
  const { nombre,
    apellido,
    numero_contacto,
    correo_electronico,
    mensaje,
    acepta_politica
  } = req.body;

  const sql = 'INSERT INTO mensajes_contacto (nombre, apellido, numero_contacto, correo_electronico, mensaje, acepta_politica) VALUES (?, ?, ?, ?, ?, ?)';

  db.query(sql, [nombre, apellido, numero_contacto, correo_electronico, mensaje, acepta_politica],
    (err, result) => {
      if (err) {
        console.error('Error al insertar datos:', err);
        return res.status(500).send('Error del servidor');
      }
      res.send('Formulario recibido y guardado correctamente.');
    }
  );
});

// Ruta POST para recibir datos del formulario de CONTACTO
app.post('/compra', (req, res) => {
  const {
    nombre,
    apellido,
    numero_contacto,
    tipo_pedido,
    metodo_pago,
    metodo_entrega,
    colores_deseados,
    idea_personalizada,
    comentarios,
    acepta_politica
  } = req.body;

  const sql = 'INSERT INTO pedidos ( nombre, apellido, numero_contacto, tipo_pedido, metodo_pago, metodo_entrega, colores_deseados, idea_personalizada, comentarios, acepta_politica) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(sql, [
    nombre,
    apellido,
    numero_contacto,
    tipo_pedido,
    metodo_pago,
    metodo_entrega,
    colores_deseados,
    idea_personalizada,
    comentarios,
    acepta_politica
  ],
    (err, result) => {
      if (err) {
        console.error('Error al insertar datos:', err);
        return res.status(500).send('Error del servidor');
      }
      res.send('Pedido recibido y guardado correctamente.');
    }
  );
});


// Inicia el servidor en el puerto definido
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`); // Mensaje en consola indicando que el servidor está activo
});

app.get("/prueba", (req, res) => {
  res.send("Servidor funcionando correctamente 🎉");
});

