module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.NODE_ENV === 'test' ? 'test' : process.env.DB_NAME,
  define: {
    paranoid: true,
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
