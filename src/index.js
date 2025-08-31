// Point d'entrée de l'application

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenue au gestionnaire de dettes !');
});

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
