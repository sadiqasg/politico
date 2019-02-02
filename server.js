import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api/v1', routes);

app.get('/', (req, res) => {
  res.send('index');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app.listen;
