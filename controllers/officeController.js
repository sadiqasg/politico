import offices from '../db/offices';

class OfficeController {
// get offices
  static getOffices(req, res) {
    return res.status(200).send({
      status: 200,
      offices,
    });
  }

  // get a single office
  
  static getAnOffice(req, res) {
    const getOffice = offices.filter(office => office.id === parseInt(req.params.id, 10));
    if (getOffice) {
      return res.status(200).send({
        status: 200,
        office: getOffice,
      });
    }
  }
}

module.exports = OfficeController;
