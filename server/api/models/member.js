import Sequelize, { Model } from 'sequelize';

class Member extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      phone: Sequelize.STRING,
      status: Sequelize.ENUM({
        values: ['confirmed', 'pending', 'blocked'],
      }),
    }, {
      sequelize,
    });

    return this;
  }
}

export default Member;
