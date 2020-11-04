import { MemberType } from '../models';

class MemberTypeService {
  byId(id) {
    return MemberType.findByPk(id);
  }

  create(description, status) {
    return MemberType.create({
      description,
      status,
    });
  }
}

export default new MemberTypeService();
