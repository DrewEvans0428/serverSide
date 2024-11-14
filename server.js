
const express = require('express');
const path = require('path');
const cards = require(./data);

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api.cards', (req, res) => {
    res.json(cards);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server ir running on http://localhost:${PORT}');
});
