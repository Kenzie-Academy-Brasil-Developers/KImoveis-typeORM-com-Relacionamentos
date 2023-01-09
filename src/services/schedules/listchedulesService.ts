import AppDataSource from "../../data-source";
import { Properties } from "../../entities/propertie.entity";
import { AppError } from "../../errors/AppError";

const listchedulesService = async (id: string) => {
  const propertiesRepository = AppDataSource.getRepository(Properties);

  const properties = await propertiesRepository.findOne({
    relations: {
      schedules: true,
    },
    where: {
      id,
    },
  });

  if (!properties) {
    throw new AppError("Property not found", 404);
  }

  return properties;
};

export default listchedulesService;
