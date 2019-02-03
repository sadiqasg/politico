import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

const parties = require('./db/parties');
const offices = require('./db/offices');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('index');
});

// get all parties
app.get('/parties', (req, res) => {
  return res.status(200).send({
    status: 200,
    parties,
  });
});

// get single party
app.get('/parties/:id', (req, res) => {
  const findParty = parties.filter(party => party.id === parseInt(req.params.id, 10));
  if (findParty) {
    return res.status(200).send({
      status: 200,
      party: findParty,
    });
  }
});

// ===========
// get offices
app.get('/offices', (req, res) => {
  return res.status(200).send({
    status: 200,
    offices,
  });
});

// get a single office
app.get('/offices/:id', (req, res) => {
  const getOffice = offices.filter(office => office.id === parseInt(req.params.id, 10));
  if (getOffice) {
    return res.status(200).send({
      status: 200,
      office: getOffice,
    });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
