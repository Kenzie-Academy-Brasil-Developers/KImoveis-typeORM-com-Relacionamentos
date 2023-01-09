import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/address.entity";
import { Categories } from "../../entities/categorie.entity";
import { Properties } from "../../entities/propertie.entity";
import { AppError } from "../../errors/AppError";
import { IPropertyRequest } from "../../interfaces/properties";

const createPropertieService = async ({
  address,
  categoryId,
  size,
  value,
}: IPropertyRequest) => {
  if (address.state.length > 2) {
    throw new AppError("Invalid state", 400);
  }

  if (address.zipCode.length > 8) {
    throw new AppError("Invalid Zip code", 400);
  }
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const addressRepository = AppDataSource.getRepository(Addresses);
  const addressAlreadyExists = await addressRepository.findOneBy({
    number: address.number,
  });

  if (addressAlreadyExists) {
    throw new AppError("Address already exists", 400);
  }
  const addresses = await addressRepository.save(address);
  const categoryRepository = AppDataSource.getRepository(Categories);
  const category = await categoryRepository.findOneBy({ id: categoryId });

  if (!category) {
    throw new AppError("Category not found", 400);
  }

  const propertie = await propertiesRepository.save({
    size,
    value,
    address: addresses,
    category: {
      id: category?.id,
      name: category?.name,
    },
  });

  return propertie;
};

export default createPropertieService;
