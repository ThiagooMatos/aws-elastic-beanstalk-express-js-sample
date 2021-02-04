const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Esse é meu primeiro projeto utilizando AWS usando pipelines de Build,Review e Deploy - 3'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
