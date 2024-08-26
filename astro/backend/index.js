// backend/index.js
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001; // Puedes elegir el puerto que prefieras

// Variables
const pity_value = 90;
const wish_value = 160;


app.use(express.json()); // Middleware para parsear JSON
app.use(cors()); // Permite solicitudes desde otros orígenes

// Define tu endpoint POST
app.post('/api/process', (req, res) => {
  try {
    const data = req.body;
    console.log('Datos recibidos:', data);

    // Aquí puedes procesar los datos como necesites
    const { constelation, weapon, guaranteed } = data;
    if (!constelation || !weapon) {
      // Validación básica
      return res.status(400).json({ error: 'constelation y weapon son obligatorios' });
    }

    // Procesando data

    const constela_fix = (constelation + 1)
    const neededWishes = (pity_value * 2 * constela_fix)

    const neededWishesWithWeapon = (neededWishes + (pity_value * weapon))

    // data a devolver
    const responseData = {
      message: 'data processed sucesfully',
      received: data,
      additionalData: {
        processedItems: [
          { result: "Necesary Wishes", value: neededWishesWithWeapon },
          { id: 2, value: 'Item 2' }
        ]
      }
    };

    res.status(200).json(responseData);
  } catch (error) {
    console.error('Error al procesar los datos:', error);
    res.status(500).json({ error: 'Error al procesar los datos' });
  }
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
