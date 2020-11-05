import database from '../../server/database';

export default function truncate() {
  return Promise.all(
    Object.keys(database.connection.models)
      .map(key => database.connection.models[key]
        .destroy({ truncate: true, force: true })),
  );
}
