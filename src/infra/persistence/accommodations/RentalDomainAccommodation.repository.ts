import { AccomodetionRepository } from "@application/accomodation.repository.ts";
import { RentalDomainAccommodation } from "../../../domain/accomodation/RentalDomainAccommodation.ts";
import { randomUUID, UUID } from "node:crypto";
import { RentalDomain } from "@domain/rentalDomain/RentalDomain.ts";

export class RentalDomainAccomodationRepository implements AccomodetionRepository {


    private repo: RentalDomainAccommodation[] = [];

    RentalDomainAccomodation() {
        this.repo = [
            new RentalDomainAccommodation(
                randomUUID(),
                "Accomodation 1",
                "Owner 1",
                2,
                1,
                "Storage 1",
                null as unknown as RentalDomain,
                "Location 1"
            ),
            new RentalDomainAccommodation(
                randomUUID(),
                "Accomodation 2",
                "Owner 2",
                3,
                3,
                "Storage 2",
                null as unknown as RentalDomain,
                "Location 2"
            ),
        ];
    }

    async get(id: UUID): Promise<RentalDomainAccommodation> {
        return this.repo.find((accomodation) => accomodation.id === id) || null as unknown as RentalDomainAccommodation;
    }

    async getAll(): Promise<RentalDomainAccommodation[]> {
        return this.repo;
    }

    async save(accomodation: RentalDomainAccommodation) {
        this.repo.push(accomodation);
    }

    async delete(id: UUID) {
        this.repo = this.repo.filter((accomodation) => accomodation.id !== id);
    }
}