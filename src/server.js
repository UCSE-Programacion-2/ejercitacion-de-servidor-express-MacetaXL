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

app.get('/', (req, res) => {
  res.send('Bienvenid@s a nuestro servidor Express!');
});

app.get('/productos', (req, res) => {
  const { categoria } = req.query;
  if (categoria) {
    return res.json(productos.filter((p) => p.categoria === categoria));
  }
  return res.json(productos);
});

app.get('/usuarios/:id', (req, res) => {
  const usuario = usuarios.find((u) => u.id === Number(req.params.id));
  if (!usuario) {
    return res.status(404).send('Usuario no encontrado.');
  }
  return res.json(usuario);
});

app.use((req, res) => {
  res.status(404).send('No se ha encontrado la ruta ingresada.');
});

module.exports = app;
