import {Router} from 'express';

const routes = Router();

routes.get('/', (req, res) => res.send('Oi!!'));

export default routes;