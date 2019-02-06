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

  static addOffice(req, res) {
    res.send('<form method="POST" action="/office/add"><input name="type" placeholder="Enter type"><input name="name" placeholder="Enter name"><button type="submit">save</button></form>')
  }

  // static postOffice(req, res) {
  //   res.send('party added!')
  // }

}

module.exports = OfficeController;
