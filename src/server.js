const express = require('express');

const app = express();

const productos = [
  { id: 1, nombre: 'Laptop', categoria: 'electronica' },
  { id: 2, nombre: 'Silla', categoria: 'muebles' },
  { id: 3, nombre: 'Monitor', categoria: 'electronica' },
];

const usuarios = [
  { id: 1, nombre: 'Juan' },
  { id: 2, nombre: 'Maria' },
  { id: 3, nombre: 'Pedro' },
];

// TODO: Define tus rutas aquí
const express = require('express');

const app = express();

const productos = [
  { id: 1, nombre: 'Laptop', categoria: 'electronica' },
  { id: 2, nombre: 'Silla', categoria: 'muebles' },
  { id: 3, nombre: 'Monitor', categoria: 'electronica' },
];

const usuarios = [
  { id: 1, nombre: 'Juan' },
  { id: 2, nombre: 'Maria' },
  { id: 3, nombre: 'Pedro' },
];

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Bienvenid@s a nuestro servidor Express!');
});

// Ruta productos (con filtro opcional por categoria)
app.get('/productos', (req, res) => {
  const { categoria } = req.query;
  if (categoria) {
    return res.json(productos.filter((p) => p.categoria === categoria));
  }
  return res.json(productos);
});

// Ruta usuarios por id
app.get('/usuarios/:id', (req, res) => {
  const usuario = usuarios.find((u) => u.id === Number(req.params.id));
  if (!usuario) {
    return res.status(404).send('Usuario no encontrado.');
  }
  return res.json(usuario);
});

// Ruta 404 para cualquier otra ruta
app.use((req, res) => {
  res.status(404).send('No se ha encontrado la ruta ingresada.');
});

module.exports = app;
