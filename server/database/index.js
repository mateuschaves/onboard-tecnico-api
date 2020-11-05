import Sequelize from 'sequelize';
import decamelize from 'decamelize';
import databaseConfig from '../../config/database';
import {
  Address,
  Member,
  MemberType,
} from '../api/models';

const models = [Address, Member, MemberType];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    this.connection.addHook('beforeDefine', attributes => {
      Object.keys(attributes).forEach(key => {
        if (typeof attributes[key] !== 'function') {
          // eslint-disable-next-line no-param-reassign
          attributes[key].field = decamelize(key);
        }
      });
    });

    models
      .map(model => model.init(this.connection))
      .forEach(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
