import bodyParser from 'body-parser';

import { Router } from 'express';
import PartyController from '../controllers/partyController';
import OfficeController from '../controllers/officeController';
import UserController from '../controllers/userController';

const routes = Router();

// parties
routes.get('/parties', PartyController.getParties);
routes.get('/parties/:id', PartyController.getSpecificParty);
routes.post('/parties', PartyController.createParty);
routes.patch('/parties/:id', PartyController.editAParty);
// routes.delete('/parties/:id', PartyController.deleteAParty);

// offices
routes.get('/offices', OfficeController.getOffices);
routes.get('/offices/:id', OfficeController.getAnOffice);

routes.post('/auth/signup', UserController.userSignup);

export default routes;
