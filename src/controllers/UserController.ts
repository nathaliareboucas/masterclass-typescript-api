import {Request, Response} from 'express';

const users = [
  { name: 'Nathála', email: 'nathalia@email.com'}
];

export default {

  async index(req: Request, res: Response) {
    return res.send(users);
  }
}