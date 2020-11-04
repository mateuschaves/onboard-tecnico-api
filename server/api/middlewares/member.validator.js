import { check } from 'express-validator';

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
    .isAlphanumeric()
    .withMessage('Informe o telefone corretamente'),
  check('street')
    .isString()
    .withMessage('Informe a rua'),
  check('number')
    .isString()
    .withMessage('Informe o número da casa'),
  check('neigborhood')
    .isString()
    .withMessage('Informe o bairro'),
  check('city')
    .isString()
    .withMessage('Informe a cidade'),
  check('state')
    .isString()
    .withMessage('Informe o estado'),
];

export default { postRules };
