const express = require('express');
const app = express();
const router = express.Router();

const port = 3000;
app.listen(port, () => {
	console.log(`Server listening to ${port}`);
});

app.use((req, res, next) => {
	console.log(req.url);
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

app.get(/abb/, (req, res) => {
	res.send('/a/');
});

app.get(/.*fly$/, (req, res) => {
	res.send('/.*fly$/');
});

// Routing params
app.get('/users/:userId/books/:bookId', (req, res) => {
	res.send(req.params);
});

app.get('/flights/:form-:to', (req, res) => {
	res.send(req.params);
});

app.get('/plantae/:genus.:species', (req, res) => {
	res.send(req.params);
});

app.get('/user/:userId(\\d+)', (req, res) => {
	res.send(req.params);
});

// App.route()
app.route('/book')
	.get((req, res) => {
		res.send('Get a random book');
	})
	.post((req, res) => {
		res.send('Add a book');
	})
	.put((req, res) => {
		res.send('Update the book');
	});

// Express Router
router.use((req, res, next) => {
	console.log('Time: ', Date.now());
	next();

});

router.get('/', (req, res) => {
	res.send('Birds home page');
});

router.get('/about', (req, res) => {
	res.send('About birds');
});

module.exports = router;