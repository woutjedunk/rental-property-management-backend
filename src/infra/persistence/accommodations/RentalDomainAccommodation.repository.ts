import { AccomodetionRepository } from "@application/accomodation.repository.ts";
import { RentalDomainAccommodation } from "../../../domain/accomodation/RentalDomainAccommodation.ts";
import { UUID } from "node:crypto";
import prisma from "@config/prisma/db.ts";
import { getAccommodationMapper } from "../../mappers/accomodation/accommodationMapper.registry.ts";
import { IAccommodation } from "@domain/accomodation/IAccommodation.ts";

export class RentalDomainAccomodationRepository implements AccomodetionRepository {


    private repo = prisma;

    RentalDomainAccomodationRepository() {
    }


    async get(id: UUID): Promise<RentalDomainAccommodation | null> {
        const result = await this.repo.accommodation.findUnique({
            where: {
                id: id
            },
            include: {
                rooms: true,
                rentalDomain: true
            }
        })


        return result 
            ? getAccommodationMapper(result.accommodationType).toDomain(result)
            : null;
    }

    async getAll(): Promise<IAccommodation[]> {

        const result = await this.repo.accommodation.findMany({
            include: {
                rooms: true,
                rentalDomain: true
            }
        })

        return result.map((acc) => getAccommodationMapper(acc.accommodationType).toDomain(acc));
    }

    async save(accomodation: IAccommodation) {
        const accomodationDb = getAccommodationMapper(accomodation.storage).toDb(accomodation);
        await this.repo.accommodation.create({
            data: accomodationDb
        });
    }

    async delete(id: UUID) {
        await this.repo.accommodation.delete({
            where: {
                id: id
            }
        })
    }
}