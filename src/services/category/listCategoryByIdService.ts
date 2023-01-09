import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categorie.entity";
import { AppError } from "../../errors/AppError";

const listCategoryByIdService = async (id: string) => {
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const categories = await categoriesRepository.findOne({
    where: {
      id,
    },
    relations: {
      properties: true,
    },
  });

  if (!categories) {
    throw new AppError("Category not found", 400);
  }
  return categories;
};

export default listCategoryByIdService;
