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

export default { postRules };
