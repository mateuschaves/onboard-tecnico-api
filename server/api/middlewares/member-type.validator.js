import { check } from 'express-validator';
import MemberTypeService from '../services/member-type.service';

const postRules = () => [
  check('description')
    .exists()
    .not()
    .isEmpty()
    .withMessage('Informe a descrição do tipo de membro')
    .isString()
    .withMessage('A descrição precisa ser um texto'),
  check('status')
    .exists()
    .not()
    .isEmpty()
    .withMessage('Informe o status do tipo de membro')
    .isString()
    .withMessage('O status precisa ser um texto'),
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

const putRules = () => [
  check('id')
    .exists()
    .withMessage('Informe o ID do tipo de membro que deseja deletar')
    .isNumeric({
      no_symbols: true,
    })
    .withMessage('Informe corretamente o ID do tipo de membro que deseja deletar')
    .custom(memberTypeId => new Promise((resolve, reject) => {
      MemberTypeService.byId(memberTypeId)
        .then(memberType => {
          if (memberType) resolve(true);
          else reject(memberType);
        });
    }))
    .withMessage('O tipo de membro informado não existe'),
  check('description')
    .exists()
    .not()
    .isEmpty()
    .withMessage('Informe a descrição do tipo de membro')
    .isString()
    .withMessage('A descrição precisa ser um texto'),
  check('status')
    .exists()
    .not()
    .isEmpty()
    .withMessage('Informe o status do tipo de membro')
    .isString()
    .withMessage('O status precisa ser um texto'),
];

const deleteRules = () => [
  check('id')
    .exists()
    .withMessage('Informe o ID do tipo de membro que deseja deletar')
    .isNumeric({
      no_symbols: true,
    })
    .withMessage('Informe corretamente o ID do tipo de membro que deseja deletar')
    .custom(memberTypeId => new Promise((resolve, reject) => {
      MemberTypeService.byId(memberTypeId)
        .then(memberType => {
          if (memberType) resolve(true);
          else reject(memberType);
        });
    }))
    .withMessage('O tipo de membro informado não existe'),
];

export default { postRules, getRules, putRules, deleteRules };
