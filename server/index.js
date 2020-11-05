import './common/env';
import Server from './common/server';
import routes from './routes';

console.log(process.env.NODE_ENV);
export default new Server()
  .router(routes)
  .listen(
    process.env.NODE_ENV === 'test' ? 3001 : process.env.PORT,
  );
