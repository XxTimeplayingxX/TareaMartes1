//Importamos express
const express = require('express');
//Hacia donde va a ir la aplicación
const footballPlayers = require('./routes/FootballPlayes');
const app = express();

app.use('/api/players', footballPlayers);

app.listen(3000);

