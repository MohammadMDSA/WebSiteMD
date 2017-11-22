const express = require('express');
const app = express();

const port = 3000;
app.listen(port, () => {
	console.log(`Server listening to ${port}`);
});

app.get('/', (req, res) => {
	res.send('Hello world');
});

app.post('/', (req, res) => {
	res.send('POST request to the homepage');
});

app.all('/samimd', (req, res, next) => {
	res.send('Accessing the SamiMD section...');
	next();
});