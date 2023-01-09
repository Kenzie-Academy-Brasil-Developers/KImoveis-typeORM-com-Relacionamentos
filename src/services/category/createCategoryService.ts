import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categorie.entity";
import { AppError } from "../../errors/AppError";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoryService = async (name: string) => {
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const categorys = await categoriesRepository.find();

  const categoryAlreadyExists = categorys.find(
    (category) => category.name === name
  );

  if (categoryAlreadyExists) {
    throw new AppError("category already exists", 400);
  }

  const categoryReturn = await categoriesRepository.save({
    name,
  });

  return categoryReturn;
};

export default createCategoryService;
