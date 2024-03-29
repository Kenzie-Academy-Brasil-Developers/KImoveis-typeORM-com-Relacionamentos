import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import { Schedule } from "../../entities/schedule";
import { User } from "../../entities/user.entity";
import { Properties } from "../../entities/propertie.entity";
import { IScheduleRequest } from "../../interfaces/schedules";

const createScheduleService = async ({
  userId,
  propertyId,
  date,
  hour,
}: IScheduleRequest) => {
  const scheduleRepository = AppDataSource.getRepository(Schedule);
  const userRepository = AppDataSource.getRepository(User);
  const propertyRepository = AppDataSource.getRepository(Properties);

  const users = await userRepository.find();
  const user = users.find((user) => user.id === userId);

  if (!user) {
    throw new AppError("User not exists", 400);
  }

  const schedule = await scheduleRepository.find();

  const properties = await propertyRepository.find();
  const property = properties.find((property) => property.id === propertyId);

  if (!property) {
    throw new AppError("Property not exists", 404);
  }

  const scheduleResult = schedule.find((schedule) => schedule);
  const scheduleDate = scheduleResult?.date.toString();
  const scheduleHour = scheduleResult?.hour.toString();

  if (scheduleDate === date && scheduleHour === hour) {
    throw new AppError("User schedule already exists", 409);
  }

  const workSchedule = Number(hour.split(":")[0]);

  if (workSchedule >= 18 || workSchedule < 8) {
    throw new AppError("Invalid hour", 400);
  }

  const mondayToFriday = new Date(date);
  const numberWeek = mondayToFriday.getDay();

  if (numberWeek === 0 || numberWeek === 6) {
    throw new AppError("Invalid Date", 400);
  }

  const schedules = scheduleRepository.create({
    user: user,
    property: property,
    date,
    hour,
  });

  await scheduleRepository.save(schedules);

  return schedules;
};

export default createScheduleService;
