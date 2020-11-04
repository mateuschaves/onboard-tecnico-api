import memberRouter from './api/controllers/member/router';
import memberType from './api/controllers/member-type/router';

export default function routes(app) {
  app.use('/api/v1/member', memberRouter);
  app.use('/api/v1/member-type', memberType);
}
