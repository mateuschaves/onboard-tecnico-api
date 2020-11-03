module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('members_type', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    description: Sequelize.DataTypes.STRING,
    status: {
      type: Sequelize.DataTypes.ENUM({
        values: ['confirmed', 'pending', 'blocked'],
      }),
      defaultValue: 'pending',
    },
    created_at: {
      type: Sequelize.DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
    updated_at: {
      type: Sequelize.DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
  }),

  down: async queryInterface => queryInterface.dropTable('users'),
};
