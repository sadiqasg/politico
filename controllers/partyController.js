import parties from '../db/parties';

class PartyController {
  // get all parties
  static getParties(req, res) {
    return res.status(200).send({
      status: 200,
      parties,
    });
  }

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