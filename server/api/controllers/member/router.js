import * as express from 'express';
import controller from './member.controller';
import MemberValidator from '../../middlewares/member.validator';

export default express
  .Router()
  .post('/', MemberValidator.postRules(), controller.create)
  .get('/', controller.all)
  .get('/:id', controller.byId);
