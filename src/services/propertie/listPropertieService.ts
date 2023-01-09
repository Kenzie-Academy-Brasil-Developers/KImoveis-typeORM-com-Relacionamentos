import AppDataSource from "../../data-source";
import { Properties } from "../../entities/propertie.entity";

const listPropertieService = async () => {
  const propertieRepository = AppDataSource.getRepository(Properties);
  const properties = await propertieRepository.find();
  return properties;
};

export default listPropertieService;
