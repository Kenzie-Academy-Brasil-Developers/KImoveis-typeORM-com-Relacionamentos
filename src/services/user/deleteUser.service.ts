import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import { User } from "../../entities/user.entity";

const deleteUserService = async (userId: string): Promise<boolean> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: userId,
  });

  if (!findUser) {
    throw new AppError("Unauthorized update", 404);
  }

  if (findUser.isActive == false) {
    throw new AppError("Unauthorized update", 400);
  }
  await userRepository.update(userId, {
    isActive: false,
  });

  return true;
};

export default deleteUserService;
