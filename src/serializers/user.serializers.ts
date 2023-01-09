import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest, IUser, IUserUpdate } from "../interfaces/users";

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  password: yup.string().required(),
  isAdm: yup.boolean().required(),
});

const userWithoutPasswordSerializer: SchemaOf<IUser> = yup.object().shape({
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  id: yup.string().notRequired(),
  isAdm: yup.boolean().notRequired(),
  isActive: yup.boolean().default(true),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
});

const userUpdateSerializer: SchemaOf<IUserUpdate> = yup.object().shape({
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  password: yup.string().notRequired(),
});

export { userSerializer, userWithoutPasswordSerializer, userUpdateSerializer };
