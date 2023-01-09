import { IUserRequest, IUser } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { userWithoutPasswordSerializer } from "../../serializers/user.serializers";

const registerUserService = async (userData: IUserRequest): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const createdUser = userRepository.create(userData);

  const emailAlreadyExists = await userRepository.findOneBy({
    email: userData.email,
  });

  if (emailAlreadyExists) {
    throw new AppError("Email already exists", 400);
  }

  if (!createdUser.password) {
    throw new AppError("User or password invalid", 401);
  }

  await userRepository.save(createdUser);

  const userWithoutPassword = await userWithoutPasswordSerializer.validate(
    createdUser,
    { stripUnknown: true }
  );

  return userWithoutPassword;
};

export default registerUserService;
