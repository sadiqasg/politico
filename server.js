import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import pg from 'pg';
import routes from './routes/index';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('views'));

const apiVersion1 = '/api/v1';

app.use(apiVersion1, routes);

app.get('/', (req, res) => {
  res.send('index');
});

app.post('/office/add', (req, res) => {
  res.send('party added!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app.listen;
