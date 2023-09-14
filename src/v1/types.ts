import { JWTOption, JWTPayloadSpec } from "@elysiajs/jwt"
import { Context } from "elysia"

export interface ApiRequest extends Context {
  store: { [key: string]: any },
  AccessTokenJWT?: {
    sign: (payload: JWTPayloadSpec) => Promise<string>,
    verify: (payload: string) => Promise<JWTPayloadSpec | false>
  },
  RefreshTokenJWT?: {
    sign: (payload: JWTPayloadSpec) => Promise<string>,
    verify: (payload: string) => Promise<JWTPayloadSpec | false>
  }
}