// backend/index.js
const express = require('express');
const app = express();
const port = 3001; // Puedes elegir el puerto que prefieras

app.use(express.json()); // Middleware para parsear JSON

// Define tu endpoint POST
app.post('/api/process', (req, res) => {
  try {
    const data = req.body;
    console.log('Datos recibidos:', data);

    // Aquí puedes procesar los datos como necesites

    res.status(200).json({ message: 'Datos procesados correctamente' });
  } catch (error) {
    console.error('Error al procesar los datos:', error);
    res.status(500).json({ error: 'Error al procesar los datos' });
  }
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
