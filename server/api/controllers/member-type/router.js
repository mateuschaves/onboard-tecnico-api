import * as express from 'express';
import controller from './member-type.controller';
import memberTypeValidator from '../../middlewares/member-type.validator';

export default express
  .Router()
  .post('/', memberTypeValidator.postRules(), controller.create)
  .get('/', memberTypeValidator.getRules(), controller.all);
