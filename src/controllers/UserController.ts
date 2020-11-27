import {Request, Response} from 'express';
import EmailService from '../services/EmailService'

const users = [
  { name: 'Nathála', email: 'nathalia@email.com'}
];

export default {

  async index(req: Request, res: Response) {
    return res.status(200).json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail({
      to:{name: 'Nathália Rebouças', email: 'teste@email.com'},
      message: {subject: 'Bem-vindo ao sistema', body: 'Olá' }
    });

    return res.send();
  }
}