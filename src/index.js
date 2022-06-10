const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('up!');
});

app.post('/', (req, res) => {
    res.redirect('/');
});

app.post('/upload', (eq, res) => {
    res.send("Upload com sucesso!")
})

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));