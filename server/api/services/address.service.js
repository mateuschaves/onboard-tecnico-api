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
    console.log(neighborhood);
    return Address.create({
      member_id: memberId,
      street,
      number,
      neighborhood,
      city,
      state,
    });
  }
}

export default new AddressService();
