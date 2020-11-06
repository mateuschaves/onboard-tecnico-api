import { Address } from '../models';

class AddressService {
  addressFromUser(id, page = 1, limit = 20) {
    const offset = 0 + (page - 1) * limit;
    return Address.findAll({
      offset,
      limit,
      where: {
        member_id: id,
      },
    });
  }

  create(memberId, street, number, neighborhood, city, state) {
    return Address.create({
      member_id: memberId,
      street,
      number,
      neighborhood,
      city,
      state,
    });
  }

  update(id, memberId, street, number, neighborhood, city, state) {
    return Address.update({
      member_id: memberId,
      street,
      number,
      neighborhood,
      city,
      state,
    }, {
      where: { id },
      returning: true,
    });
  }
}

export default new AddressService();
