import parties from '../db/parties';

class PartyController {
  // get all parties
  static getParties(req, res) {
    return res.status(200).send({
      status: 200,
      parties,
    });
  }

  static getAParty(req, res) {
    const findParty = parties.filter(party => party.id === parseInt(req.params.id, 10));
    if (findParty) {
      return res.status(200).send({
        status: 200,
        party: findParty,
      });
    }
  }
}

module.exports = PartyController;