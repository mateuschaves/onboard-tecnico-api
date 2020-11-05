import faker from 'faker';

class MemberTypeFactory {
  generate() {
    return {
      description: `${faker.random.words(3)}`,
      status: `${faker.random.word()}`,
    };
  }
}

export default new MemberTypeFactory();
