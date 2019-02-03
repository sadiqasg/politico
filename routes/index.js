import { Router } from 'express';
import PartyController from '../controllers/partyController';
import OfficeController from '../controllers/officeController';

const routes = Router();
const apiVersion = 'api/v1';

// parties
routes.get('/parties', PartyController.getParties);
routes.get('/parties/:id', PartyController.getAParty);
routes.get('/delete/parties/:id', PartyController.deleteParty);

// offices
routes.get('/offices', OfficeController.getOffices);
routes.get('/offices/:id', OfficeController.getAnOffice);

export default routes;
