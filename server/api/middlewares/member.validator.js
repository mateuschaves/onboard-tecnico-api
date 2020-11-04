import { check } from 'express-validator';
import MemberTypeService from '../services/member-type.service';
import MemberService from '../services/member.service';

const postRules = () => [
  check('name')
    .exists()
    .withMessage('Informe o nome do membro que deseja adicionar')
    .isString()
    .withMessage('O nome precisa ser um texto'),
  check('email')
    .exists()
    .withMessage('Informe o email do membro')
    .isEmail()
    .withMessage('Informe o email corretamente'),
  check('phone')
    .isString()
    .withMessage('Informe o telefone corretamente'),
  check('status')
    .exists()
    .withMessage('Informe o status corretamente'),
  check('memberTypeId')
    .custom(memberTypeId => new Promise((resolve, reject) => {
      MemberTypeService.byId(memberTypeId)
        .then(memberType => {
          if (memberType) resolve(true);
          reject(memberType);
        })
        .catch(reject);
    }))
    .withMessage('Esse tipo de membro não existe'),
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

const putRules = () => [
  check('id')
    .exists()
    .withMessage('Informe o id do membro que deseja editar')
    .custom(memberId => new Promise((resolve, reject) => {
      MemberService.byId(memberId)
        .then(member => {
          if (member) resolve(true);
          reject(member);
        })
        .catch(reject);
    }))
    .withMessage('O membro informado não existe'),
  check('name')
    .exists()
    .withMessage('Informe o nome do membro que deseja adicionar')
    .isString()
    .withMessage('O nome precisa ser um texto'),
  check('phone')
    .exists()
    .withMessage('Informe o número de celular')
    .isString()
    .withMessage('Informe o telefone corretamente'),
  check('status')
    .exists()
    .withMessage('Informe o status corretamente'),
  check('memberTypeId')
    .exists()
    .withMessage('Informe o tipo de membro')
    .custom(memberTypeId => new Promise((resolve, reject) => {
      MemberTypeService.byId(memberTypeId)
        .then(memberType => {
          if (memberType) resolve(true);
          reject(memberType);
        })
        .catch(reject);
    }))
    .withMessage('Esse tipo de membro não existe'),
];

const getRules = () => [
  check('page')
    .optional({
      nullable: true,
    })
    .isNumeric()
    .withMessage('O número da página precisa ser um número'),
  check('limit')
    .optional({
      nullable: true,
    })
    .isNumeric()
    .withMessage('O número de itens por página precisa ser um número'),
];

export default { postRules, getRules, putRules };
