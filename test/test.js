import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import parties from '../db/parties';
import offices from '../db/offices';

// const expect = require('chai').expect;

const port = "http://localhost:3000";
const { should } = chai;
should();

chai.use(chaiHttp);

const partyId1 = 1;
const partyId2 = 2;

const partyLink = '/api/v1/parties';
const officeLink = '/api/v1/offices';
const deleteLink = `/api/v1/parties/${partyId1}`;

// tests for parties
describe('/GET parties', () => {
  // test a functionaity
  it('should return an object', (done) => {
    // add an assertion
    chai.request(port)
      .get(partyLink)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json
        res.body.should.be.a('object');
        done();
      });
  });
});

// unit testing for POST to create parties
describe('/POST parties', () => {
  it('should post a party with party details', (done) => {
    const party = {
      id: '5',
      name: 'Bootcamp party',
      logoUrl: '/images/party5',
    };
    chai.request(port)
      .post(partyLink)
      .send(party)
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.a('object');
        done();
      });
  });
});

// tests for offices
describe('/GET offices', () => {
  it('should return an object', (done) => {
    chai.request(port)
      .get(officeLink)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json
        res.body.should.be.a('object');
        done();
      });
  });
});

// unit testing for posting office
describe('/POST offices', () => {
  it('should post an office with party details', (done) => {
    const office = {
      id: '5',
      type: 'Fededral',
      name: 'Office of the Governor',
    };
    chai.request(port)
      .post(officeLink)
      .send(office)
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.a('object');
        done();
      });
  });
});
