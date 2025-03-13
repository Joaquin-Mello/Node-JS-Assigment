require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error("Error al conectar con MySQL:", err);
        return;
    }
    console.log("Conectado a la base de datos MySQL");
});

// Endpoint para agregar una escuela
app.post("/addSchool", (req, res) => {
    const { name, address, latitude, longitude } = req.body;
    if (!name || !address || !latitude || !longitude) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }
    const query = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
    db.query(query, [name, address, latitude, longitude], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Escuela agregada", id: result.insertId });
    });
});

// Endpoint para listar las escuelas ordenadas por proximidad
app.get("/listSchools", (req, res) => {
    const { latitude, longitude } = req.query;
    if (!latitude || !longitude) {
        return res.status(400).json({ error: "Se requieren latitude y longitude" });
    }
    const query = "SELECT *, SQRT(POW(latitude - ?, 2) + POW(longitude - ?, 2)) AS distance FROM schools ORDER BY distance ASC";
    db.query(query, [latitude, longitude], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
