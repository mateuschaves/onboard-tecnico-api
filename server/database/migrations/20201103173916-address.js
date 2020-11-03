module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('adresses', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    member_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'members',
        key: 'id',
      },
    },
    street: Sequelize.DataTypes.STRING,
    number: Sequelize.DataTypes.STRING,
    neigborhood: Sequelize.DataTypes.STRING,
    city: Sequelize.DataTypes.STRING,
    state: Sequelize.DataTypes.STRING,
    created_at: {
      type: Sequelize.DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
    updated_at: {
      type: Sequelize.DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
  }),

  down: async queryInterface => queryInterface.dropTable('adresses'),
};
