import { Member } from '../models';

class MemberService {
  all(page, limit) {
    const offset = 0 + (page - 1) * limit;
    return Member.findAll({
      offset,
      limit,
    });
  }

  byId(id) {
    return Member.findByPk(id);
  }

  create(name, phone, email, status, memberTypeId) {
    return Member.create({
      name,
      phone,
      email,
      status,
      member_type_id: memberTypeId,
    });
  }

  update(id, name, phone, status, memberTypeId) {
    return Member.update(
      {
        name,
        phone,
        status,
        memberTypeId,
      },
      {
        where: { id },
        returning: true,
      },
    );
  }

  destroy(id) {
    return Member.destroy({
      where: { id },
    });
  }
}

export default new MemberService();
