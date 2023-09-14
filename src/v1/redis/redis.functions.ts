import { redisClient } from "./redis";

export async function setKeyValue(key: string, expiration: number, value: string): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    redisClient.setEx(key, expiration, value).then(
      onfulfilled => { resolve(true) },
      onreject => { reject(false) }
    ).catch(e => {
      reject(false);
    });
  });
}

export async function getKeyValue(key: string): Promise<string | null> {
  return new Promise<string | null>((resolve, reject) => {
    redisClient.get(key).then(
      onfulfilled => { resolve(onfulfilled) },
      onreject => { reject(null) }
    ).catch(e => {
      reject(null);
    });
  });
}

export async function deleteKeyValue(key: string): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    redisClient.del(key).then(
      onfulfilled => { resolve(true) },
      onreject => { reject(false) }
    ).catch(e => {
      reject(false);
    });
  });
}