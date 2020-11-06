import * as express from 'express';
import controller from './address.controller';
import AddressValidator from '../../middlewares/address.validator';

export default express
  .Router()
  .post('/:id/address', AddressValidator.postRules(), controller.create);
