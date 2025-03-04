import { Mapper } from "../mapper.ts";
import { Accommodation as PrismaAccommodation } from "@prisma/client";
import { standaloneAccommodationMapper } from "./standaloneAccomodation.mapper.ts";
import { RentalDomainAccomodationMapper } from "./rentalDomainAccomodation.mapper.ts";

const mappers: Record<string, Mapper<any, PrismaAccommodation>> = {
  STANDALONE: standaloneAccommodationMapper,
  DOMAIN_ACC: RentalDomainAccomodationMapper,
};

export function getAccommodationMapper(type: string): Mapper<any, PrismaAccommodation> {
  const mapper = mappers[type];
  if (!mapper) {
    throw new Error(`Mapper for type ${type} not found`);
  }
  return mapper;
}
