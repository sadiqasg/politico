import bodyParser from 'body-parser';

import { Router } from 'express';
import PartyController from '../controllers/partyController';
import OfficeController from '../controllers/officeController';

const routes = Router();

// parties
routes.get('/parties', PartyController.getParties);
routes.get('/parties/:id', PartyController.getSpecificParty);
routes.get('/delete/parties/:id', PartyController.deleteParty);

// offices
routes.get('/offices', OfficeController.getOffices);
routes.get('/offices/:id', OfficeController.getAnOffice);

routes.get('/office/add', OfficeController.addOffice);	
// routes.post('/office', OfficeController.postOffice);
export default routes;
