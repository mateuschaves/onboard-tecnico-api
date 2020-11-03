module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('members', {
    id: Sequelize.DataTypes.STRING,
    name: Sequelize.DataTypes.STRING,
    email: Sequelize.DataTypes.STRING,
    phone: Sequelize.DataTypes.STRING,
    status: {
      type: Sequelize.DataTypes.ENUM({
        values: ['confirmed', 'pending', 'blocked'],
      }),
      defaultValue: 'pending',
    },
  }),

  down: async queryInterface => queryInterface.dropTable('members'),
};
