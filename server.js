import express from 'express';

// Constants
const PORT = 4200;

// App
const app = express();
app.get('/', (req, res) => {
	res.send('Web3, let\'s go!');
});

app.get('/new-endpoint', (req, res) => {
	res.send('Here\'s to our new endpoint!');
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);