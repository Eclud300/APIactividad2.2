require('dotenv').config(); // Importa la librería para leer variables ocultas

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

app.use(cors());
app.use(express.json());

// La conexión ahora lee la variable oculta sin exponer tu contraseña
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

// Endpoint principal para obtener la lista desde Supabase
app.get('/api/productos', async (req, res) => {
    try {
        const resultado = await pool.query('SELECT * FROM productos ORDER BY id ASC');
        res.json(resultado.rows); 
    } catch (error) {
        console.error('Error al consultar la base de datos:', error);
        res.status(500).json({ error: 'Fallo al conectar con la base de datos' });
    }
});

// Mensaje de estado en la raíz
app.get('/', (req, res) => {
    res.send('API de Dunaroma funcionando y conectada a PostgreSQL de forma segura.');
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});