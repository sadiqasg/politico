import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import parties from '../models/parties';
import offices from '../models/offices';

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
describe('/GET /api/v1/parties', () => {
  it('should return an object', (done) => {
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


/**test for creating a party */
// describe('POST /api/v1/parties', () => {
//     it('it should create a party', (done) => {
//       chai.request(app)
//         .post(partyLink)
//         .send({
//             id: 1,
//             name: 'Bootcamp party',
//             logoUrl: '/some/image'
//         })
//         .end((err, res) => {
//           expect(res.status).to.equal(201);
//           expect(Object.keys(res.body.data).length).to.be.above(0);
//           done();
//         });
//     }); 
//   });


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

// // unit testing for posting office
// describe('/POST offices', () => {
//   it('should post an office with party details', (done) => {
//     const office = {
//       id: '5',
//       type: 'Fededral',
//       name: 'Office of the Governor',
//     };
//     chai.request(port)
//       .post(officeLink)
//       .send(office)
//       .end((err, res) => {
//         res.should.have.status(404);
//         res.should.be.a('object');
//         done();
//       });
//   });
// });
