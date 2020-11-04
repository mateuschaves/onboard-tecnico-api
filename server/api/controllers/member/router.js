import * as express from 'express';
import controller from './member.controller';
import MemberValidator from '../../middlewares/member.validator';

export default express
  .Router()
  .post('/', MemberValidator.postRules(), controller.create)
  .get('/', MemberValidator.getRules(), controller.all)
  .get('/:id', controller.byId)
  .put('/:id', MemberValidator.putRules(), controller.update);
