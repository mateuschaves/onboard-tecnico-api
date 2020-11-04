import { check } from 'express-validator';
import MemberService from '../services/member.service';

const postRules = () => [
  check('id')
    .isNumeric()
    .withMessage('Informe o id do membro que deseja adicionar o endereço')
    .custom(memberId => new Promise((resolve, reject) => {
      MemberService.byId(memberId)
        .then(member => {
          if (member) resolve(true);
          reject(member);
        })
        .catch(reject);
    }))
    .withMessage('O membro que voce informou não existe'),
  check('street')
    .isString()
    .withMessage('Informe a rua'),
  check('number')
    .isString()
    .withMessage('Informe o número da casa'),
  check('neighborhood')
    .isString()
    .withMessage('Informe o bairro'),
  check('city')
    .isString()
    .withMessage('Informe a cidade'),
  check('state')
    .isString()
    .withMessage('Informe o estado'),
];

export default {
  postRules,
};
