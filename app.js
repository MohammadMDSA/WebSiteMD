const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;
const fs = require('fs');

app.listen(port, () => {
	console.log(`Server listening to ${port}.`);
});

app.use((req, res, next) => {
	console.log(`${req.url}`);
	next();
});

app.route('/')
	.get((req, res) => {
		res.send(html);
	})
	.post((req, res) => {
		res.send(html);
	});

let html = fs.readFileSync('index.html');