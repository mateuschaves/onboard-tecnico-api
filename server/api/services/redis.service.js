import redis from 'redis';

class RedisService {
  constructor() {
    this.redis = redis.createClient(process.env.REDIS_URL);
  }
}

export default new RedisService();
