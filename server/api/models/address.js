import Sequelize, { Model } from 'sequelize';

class Address extends Model {
  static init(sequelize) {
    super.init({
      street: Sequelize.STRING,
      number: Sequelize.STRING,
      neigborhood: Sequelize.STRING,
      city: Sequelize.STRING,
      state: Sequelize.STRING,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }, {
      sequelize,
    });

    return this;
  }
}

export default Address;
