import { Mapper } from "../mapper.ts";
import { Room as PrismaRoom } from "@prisma/client";
import { BedroomMapper } from "./bedroom.mapper.ts";
import { BathroomMapper } from "./bathroom.mapper.ts";

const roomMappers: Record<string, Mapper<any, PrismaRoom>> = {
  BEDROOM: BedroomMapper,
  BATHROOM: BathroomMapper,
};

export function getRoomMapper(type: string): Mapper<any, PrismaRoom> {
  const mapper = roomMappers[type];
  if (!mapper) {
    throw new Error(`Mapper for type ${type} not found`);
  }
  return mapper;
}
