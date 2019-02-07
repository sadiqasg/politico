import parties from '../models/parties';
import db from '../models/db';

class PartyController {
  static createParty(req, res) {
    const { name, hqAddress, logoUrl } = req.body;
    if (!name || !hqAddress || !logoUrl) {
      return res.send({ status: 400, error: 'All fields are required!' });
    }

    const sql = 'INSERT INTO parties (name, hqAddress, logoUrl) VALUES ($1, $2, $3) RETURNING * '
    const param = [name, hqAddress, logoUrl]

    db.query(sql, param).then((party) => {
      res.status(201).send({
        data: [party.rows]
      })
    }).catch((err) => {
      return res.send(err)
    })
  },

  // get all parties
  static getParties(req, res) {
    let sql = 'SELECT * FROM party'
    db.query(sql).then((party) => {
      return res.send({ status: 200, data: party.rows[0] });
    })
  },

  static getSpecificParty(req, res) {
    const findParty = parties.filter(party => party.id === parseInt(req.params.id, 10));
    if (findParty) {
      return res.status(200).send({
        status: 200,
        party: findParty,
      });
    }
  }

  static deleteParty(req, res) {
    let id = req.params.id;
    let data = parties.filter( data => {
      return data.id == id;
    })[0];
    const index = parties.indexOf(data);
  
    if(index !== -1){
  
    parties.splice(index, 1);
  
    res.status(200).json({ 
      status: 200,
      data: [{message: `Party with id ${id} deleted.`}]});
    } else {
      res.status(201).json({ 
      message: `Party with id ${id} not found.`});
    }
  }
}



//   static updatePartyName (req, res) {
//     const { id } = req.params;
//     const data = partyDb.find(data=> data.id == id);
//     if(data){
//       data.name = req.body.name;
//       return res.status(201).send({
//       status: 201,
//       message: "party name updated successfully",
//       data: [data]
//     });
//   } else {
//       return res.status(404).send({
//       status: 404,
//       error: "name of party not found!"
//     });
//   }
// }

module.exports = PartyController;