import memberRouter from './api/controllers/member/router';

export default function routes(app) {
  app.use('/api/v1/member', memberRouter);
}
