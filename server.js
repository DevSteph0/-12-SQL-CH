const express = require('express');

const app = express();
const PORT = 3001;

const middleware = (req, res, next) => {

  const yellow = '\x1b[33m%s\x1b[0m';


  console.log(yellow, `${req.method} request to ${req.path}`);


  next();
};

app.use(middleware);

app.get('/
', (req, res) => res.json(`GET route`));
app.post('/', (req, res) => res.json(`POST route`));
app.put('/:id', (req, res) => res.json(`PUT route`));
app.delete('/:id', (req, res) => res.json(`DELETE route`));
app.patch('/:id', (req, res) => res.json(`PATCH route`));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`Listening for requests on port ${PORT}! 🏎️`)
);


