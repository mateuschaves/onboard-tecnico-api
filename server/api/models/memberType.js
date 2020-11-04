import Sequelize, { Model } from 'sequelize';

class MemberType extends Model {
  static init(sequelize) {
    super.init({
      description: Sequelize.STRING,
      status: Sequelize.ENUM({
        values: ['confirmed', 'pending', 'blocked'],
      }),
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }, {
      sequelize,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      underscored: true,
    });

    return this;
  }
}

export default MemberType;
