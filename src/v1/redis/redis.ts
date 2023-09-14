import { createClient } from "redis";

export const redisClient = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT)
  }
});

redisClient.connect();
