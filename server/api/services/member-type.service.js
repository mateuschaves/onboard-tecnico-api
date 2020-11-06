import { MemberType } from '../models';
class MemberTypeService {
  all(page, limit) {
    const offset = 0 + (page - 1) * limit;
    return MemberType.findAll({
      offset,
      limit,
    });
  }

  byId(id) {
    return MemberType.findByPk(id);
  }

  create(description, status) {
    return MemberType.create({
      description,
      status,
    });
  }

  update(id, description, status) {
    return MemberType.update(
      {
        description,
        status,
      },
      {
        where: { id },
        returning: true,
      },
    );
  }

  destory(id) {
    return MemberType.destroy({
      where: { id },
    });
  }
}

export default new MemberTypeService();
