import { Elysia } from "elysia";
import { UserRoutes } from "./v1/routes/user.route";
import jwt from "@elysiajs/jwt";
import cors from "@elysiajs/cors";

const app = new Elysia();

app.get("/", () => "Hello Elysia");

app.group('/v1', app => app
    .use(cors({
      origin: ['http://auth.h-ultra.net', 'https://auth.h-ultra.net']
    }))
    .state('version', 1 as number | null)
    .get('/', () => 'Using v1')
    .use(
      jwt({
          name: 'AccessTokenJWT',
          secret: process.env.ACCESS_TOKEN_SECRET || '',
          exp: '1h',
          alg: 'HS512'
      })
    )
    .use(
      jwt({
          name: 'RefreshTokenJWT',
          secret: process.env.REFRESH_TOKEN_SECRET || '',
          exp: '7d',
          alg: 'HS512'
      })
    )
    .use(UserRoutes)
);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
