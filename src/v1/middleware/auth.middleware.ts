import jwt, { JWTPayloadSpec } from "@elysiajs/jwt";
import { ApiRequest } from "../types";
import { Context } from "elysia";

export async function isUserLoggedIn(request: ApiRequest) {
  if (!request.AccessTokenJWT || !request.RefreshTokenJWT) {
    request.set.status = 400;
    return 'Internal Server Error';
  }

  if (!request.set.headers.Authorization) {
    request.set.status = 401;
    return 'Unauthorized';
  }

  request.store.isAuth = true;
  
  const token = request.set.headers.Authorization.replace('Bearer ','');

  const payload: JWTPayloadSpec | false = await request.AccessTokenJWT.verify(token);

  if (payload === false) {
    request.set.status = 401;
    return 'TOKEN_EXPIRED'
  }

  request.store.tokenPayload = payload;

  return request;
}

export async function getAuthUserData(request: ApiRequest) {
  return request;
}