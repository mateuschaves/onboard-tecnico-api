import { Member } from '../models';

class MemberService {
  all(page = 1, limit = 20) {
    const offset = 0 + (page - 1) * limit;
    return Member.findAll({
      offset,
      limit,
    });
  }

  byId(id) {
    return Member.findByPk(id);
  }

  create(name, phone, email) {
    return Member.create({
      name,
      phone,
      email,
    });
  }

  update(id, name, phone) {
    return Member.update(
      { name, phone },
      {
        where: { id },
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
