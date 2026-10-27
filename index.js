const express = require('express');
const cors = require('cors');
const app = express();

// Habilitar CORS para que tu PWA pueda consumir la API sin bloqueos
app.use(cors());
app.use(express.json());

// Datos simulados (Mock) para Dunaroma
const perfumes = [
    {
        id: 1,
        nombre: "Khamrah Eau de Parfum",
        marca: "Lattafa",
        familiaOlfativa: "Dulce / Especiado",
        precio: 850
    },
    {
        id: 2,
        nombre: "Acqua Di Gio",
        marca: "Giorgio Armani",
        familiaOlfativa: "Cítrico / Acuático",
        precio: 2100
    },
    {
        id: 3,
        nombre: "Sauvage Elixir",
        marca: "Dior",
        familiaOlfativa: "Amaderado / Aromático",
        precio: 3200
    }
];

// Endpoint principal para obtener la lista
app.get('/api/productos', (req, res) => {
    res.json(perfumes);
});

// Mensaje de estado en la raíz
app.get('/', (req, res) => {
    res.send('API de Dunaroma funcionando correctamente.');
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});