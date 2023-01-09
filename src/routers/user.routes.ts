import { Router } from "express";
import registerUsercontroller from "../controllers/user/registerUser.controller";
import listUserscontroller from "../controllers/user/listUsers.controller";
import loginUsercontroller from "../controllers/user/loginUser.controller";
import updateUsercontroller from "../controllers/user/updateUser.controller";
import deleteUsercontroller from "../controllers/user/deleteUser.controller";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import verifyDataIsValideMiddleware from "../middlewares/verifyDataIsValide.middleware";
import {
  userSerializer,
  userWithoutPasswordSerializer,
} from "../serializers/user.serializers";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";
import verifyIsAdmUpdateMiddleware from "../middlewares/verifyIsAdmUpdate.middleware";

const userRoutes = Router();

userRoutes.post(
  "/users",
  verifyDataIsValideMiddleware(userSerializer),
  registerUsercontroller
);
userRoutes.get(
  "/users",
  verifyDataIsValideMiddleware(userWithoutPasswordSerializer),
  verifyAuthMiddleware,
  verifyIsAdmMiddleware,
  listUserscontroller
);
userRoutes.post("/login", loginUsercontroller);
userRoutes.patch(
  "/users/:id",
  verifyAuthMiddleware,
  verifyIsAdmUpdateMiddleware,
  updateUsercontroller
);
userRoutes.delete(
  "/users/:id",
  verifyAuthMiddleware,
  verifyIsAdmMiddleware,
  deleteUsercontroller
);

export default userRoutes;
