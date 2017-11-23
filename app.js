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


// Regex routing
app.get('/', (req, res) => {
	res.send('root');
});

app.get('/about', (req, res) => {
	res.send('about');
});

app.get('/random.text', (req, res) => {
	res.send('random.text');
});

app.get('/ab?cd', (req, res) => {
	res.send('ab?cd');
});

app.get('/ab+cd', (req, res) => {
	res.send('ab+cd');
});

app.get('/ab*cd', (req, res) => {
	res.send('ab*cd');
});

app.get('/ab(cd)?e', (req, res) => {
	res.send('ab(cd)?e');
});

app.get(/a/, (req, res) => {
	res.send('/a/');
});

app.get(/.*fly$/, (req, res) => {
	res.send('/.*fly$/');
});
