import Sequelize, { Model } from 'sequelize';

class Address extends Model {
  static init(sequelize) {
    super.init({
      street: Sequelize.STRING,
      number: Sequelize.STRING,
      member_id: Sequelize.INTEGER,
      neighborhood: Sequelize.STRING,
      city: Sequelize.STRING,
      state: Sequelize.STRING,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }, {
      sequelize,
      tableName: 'adresses',
      deletedAt: 'deleted_at',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      underscored: true,
      underscoredAll: true,
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Member, {
      foreignKey: 'member_id',
    });
  }
}

export default Address;
