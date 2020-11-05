import faker from 'faker';

class MemberFactory {
  generate(
    name,
    phone,
    email,
    status,
    memberTypeId,
  ) {
    return {
      name: name || `${faker.name.firstName()} ${faker.name.lastName()}`,
      phone: phone || `${faker.phone.phoneNumberFormat()}`,
      email: email || `${faker.internet.email()}`,
      status: status || `${faker.random.word()}`,
      memberTypeId: memberTypeId || 1,
    };
  }
}

export default new MemberFactory();
