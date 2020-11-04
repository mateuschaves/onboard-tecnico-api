import { MemberType } from '../models';

class MemberTypeService {
  create(description, status) {
    return MemberType.create({
      description,
      status,
    });
  }
}

export default new MemberTypeService();
