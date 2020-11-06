import memberRouter from './api/controllers/member/router';
import memberTypeRouter from './api/controllers/member-type/router';
import AddressRouter from './api/controllers/address/router';

export default function routes(app) {
  app.use('/api/v1/member', memberRouter);
  app.use('/api/v1/member-type', memberTypeRouter);
  app.use('/api/v1/member', AddressRouter);
}
