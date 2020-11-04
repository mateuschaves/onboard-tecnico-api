import { check } from 'express-validator';

const postRules = () => [
  check('description')
    .exists()
    .withMessage('Informe a descrição do tipo de membro')
    .isString()
    .withMessage('A descrição precisa ser um texto'),
  check('status')
    .exists()
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

export default { postRules, getRules };
