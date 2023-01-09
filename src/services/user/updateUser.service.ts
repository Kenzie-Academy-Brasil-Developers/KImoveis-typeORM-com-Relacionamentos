import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/users/index";
import { userWithoutPasswordSerializer } from "../../serializers/user.serializers";
import { AppError } from "../../errors/AppError";

const updateUserService = async (
  userData: IUserUpdate,
  userId: string
): Promise<IUserUpdate> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: userId,
  });
  const dataKeys = Object.keys(userData);

  if (!findUser) {
    throw new AppError("Unauthorized update", 404);
  }

  if (
    dataKeys.includes("isAdm") ||
    dataKeys.includes("isActive") ||
    dataKeys.includes("id")
  ) {
    throw new AppError("Unauthorized update", 401);
  }

  const updatedUser = userRepository.create({
    ...findUser,
    ...userData,
  });
  await userRepository.save(updatedUser);

  const updatedUserWithoutPassword =
    await userWithoutPasswordSerializer.validate(updatedUser, {
      stripUnknown: true,
    });

  return updatedUserWithoutPassword;
};

export default updateUserService;
