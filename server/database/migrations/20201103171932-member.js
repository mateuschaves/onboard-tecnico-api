module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('members', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    member_type_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'member_types',
        key: 'id',
      },
    },
    name: Sequelize.DataTypes.STRING,
    email: Sequelize.DataTypes.STRING,
    phone: Sequelize.DataTypes.STRING,
    status: Sequelize.DataTypes.STRING,
    created_at: {
      type: Sequelize.DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
    updated_at: {
      type: Sequelize.DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
  }),

  down: async queryInterface => queryInterface.dropTable('members'),
};
