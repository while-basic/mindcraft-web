import Redis from 'ioredis';

// Add better error handling and configuration
const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379', {
  maxRetriesPerRequest: 3,
  retryStrategy(times) {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
  reconnectOnError(err) {
    const targetError = 'READONLY';
    if (err.message.includes(targetError)) {
      return true;
    }
    return false;
  },
});

redis.on('error', (error) => {
  console.error('Redis connection error:', error);
});

redis.on('connect', () => {
  console.log('Successfully connected to Redis');
});

export async function incrementVisitCount(): Promise<number> {
  try {
    return await redis.incr('visit-count');
  } catch (error) {
    console.error('Error incrementing visit count:', error);
    return 0;
  }
}

export async function getVisitCount(): Promise<number> {
  try {
    const count = await redis.get('visit-count');
    return parseInt(count || '0', 10);
  } catch (error) {
    console.error('Error getting visit count:', error);
    return 0;
  }
} 