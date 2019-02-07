import parties from '../models/parties';
import db from '../models/db';

class PartyController {
  static createParty(req, res) {
    const { name, hqAddress, logoUrl } = req.body;
    const sql = 'INSERT INTO Parties (name, "hqAddress", "logoUrl") VALUES($1, $2, $3) RETURNING *';
    const prm = [name, hqAddress, logoUrl];

    console.log(req.body);

    db.query(sql, prm).then((newParty)=>{
        return res.status(201).send({
          success: true,
          message: 'new party created',
          parties: newParty.rows[0],
        });
      })
    .catch((err)=>{
        return res.status(422).send({
          success: false,
          message: 'party was not created',
          err
        })
      }) 
  }

  // get all parties
  static getParties(req, res) {
    let sql = 'SELECT * from Parties';
    db.query(sql).then((parties)=>{ 
      return res.status(200).send({
        success: true,
        parties
      }) 
    }).catch((err)=>{
      return res.status(400).send({
        success: false,
        message: 'error'
      })
    })
  }

  static getSpecificParty(req, res) {
    // const findParty = parties.filter(party => party.id === parseInt(req.params.id, 10));
    // if (findParty) {
    //   return res.status(200).send({
    //     status: 200,
    //     party: findParty,
    //   });
    // }
    const id = parseInt(req.params.id);
    let sql= `SELECT * FROM Parties WHERE id = ${id}`;

    db.query(sql).then((parties)=>{
      res.status(200).send({
        success: true,
        message: parties
      });
    }).catch((err)=>{
      return res.status(404).send({
        success: false,
        message: 'Political party dont exist'
      });
    })
  }

 static editAParty(req,res){
    const id = parseInt(req.params.id);
    const {name} = req.body
    const sql = `UPDATE parties SET name = ${name} WHERE id = ${id} `
    
    db.query(sql).then((parties)=>{
      return res.status(200).send({
        success: true,
        message: parties.rows[0]
      })
    }).catch((err)=>{
      console.log(err)
      return res.status(404).send({
        success: false,
        message:"party dont exist"
      })
    })
        
  }
}

module.exports = PartyController;