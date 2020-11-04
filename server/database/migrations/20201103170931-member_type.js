module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('member_types', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    description: Sequelize.DataTypes.STRING,
    status: Sequelize.DataTypes.STRING,
    created_at: {
      type: Sequelize.DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
    updated_at: {
      type: Sequelize.DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
    deleted_at: {
      type: Sequelize.DataTypes.DATE,
    },
  }),

  down: async queryInterface => queryInterface.dropTable('users'),
};
