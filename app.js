const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('Esse é meu primeiro projeto utilizando AWS'));
=======
app.get('/', (req, res) => res.send('Hello World'));
>>>>>>> eef45973d890ed060b4b49b1ae5ef3fe49e4006e

app.listen(port);
console.log(`App running on http://localhost:${port}`);
