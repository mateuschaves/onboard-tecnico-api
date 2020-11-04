import Sequelize, { Model } from 'sequelize';

class Member extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      phone: Sequelize.STRING,
      status: Sequelize.STRING,
      member_type_id: Sequelize.INTEGER,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }, {
      sequelize,
      deletedAt: 'deleted_at',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      underscored: true,
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.MemberType, {
      foreignKey: 'member_type_id',
    });
    this.hasMany(models.Address, {
      as: 'adresses',
    });
  }
}

export default Member;
