import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const { Client } = require('pg');

import routes from './routes/index';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('views'));

const apiVersion1 = '/api/v1';

app.use(apiVersion1, routes);

app.get('/', (req, res) => {
  res.send('index');
});

app.post('/office', (req, res) => {
  const client = new Client();
  client.connect()
    .then(() => {
	  console.log('connection complete');

	  const sql = 'INSERT INTO offices (type, name) VALUES ($1, $2)';
	  const params = ['Fed', 'Senate presido'];

	  return client.query(sql, params);
    })
    .then((result) => {
	  console.log('result?', result);
	  res.redirect('/');
    });
})

app.listen(process.env.PORT || 3000)

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

module.exports = app.listen;
