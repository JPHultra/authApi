import Elysia from "elysia";
import { deleteUser, getUser, searchUsers, signIn, signOut, signUp, updateUser } from "../controllers/user.controller";
import { isUserLoggedIn } from "../middleware/auth.middleware";

export const UserRoutes = new Elysia({ prefix: '/user' })
  .get('/profile/:id', getUser, { beforeHandle: [isUserLoggedIn], afterHandle: [] })
  .get('/search', searchUsers, { beforeHandle: [], afterHandle: [] })
  .post('/sign-in', signIn, { beforeHandle: [], afterHandle: [] })
  .post('/sign-out', signOut, { beforeHandle: [], afterHandle: [] })
  .post('/sign-up', signUp, { beforeHandle: [], afterHandle: [] })
  .put('/update/:id', updateUser, { beforeHandle: [], afterHandle: [] })
  .delete('/delete/:id', deleteUser, { beforeHandle: [], afterHandle: [] })