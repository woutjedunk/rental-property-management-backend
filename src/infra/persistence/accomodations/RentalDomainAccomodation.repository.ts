import { AccomodetionRepository } from "@application/accomodation.repository.ts";
import { RentalDomainAccomodation } from "@domain/accomodation/RentalDomainAccomodation.ts";
import { randomUUID, UUID } from "node:crypto";
import { RentalDomain } from "@domain/rentalDomain/RentalDomain.ts";

export class RentalDomainAccomodationRepository implements AccomodetionRepository {


    private repo: RentalDomainAccomodation[] = [];

    RentalDomainAccomodation() {
        this.repo = [
            new RentalDomainAccomodation(
                randomUUID(),
                "Accomodation 1",
                "Owner 1",
                2,
                1,
                "Storage 1",
                null as unknown as RentalDomain,
                "Location 1"
            ),
            new RentalDomainAccomodation(
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

    async get(id: UUID): Promise<RentalDomainAccomodation> {
        return this.repo.find((accomodation) => accomodation.id === id) || null as unknown as RentalDomainAccomodation;
    }

    async getAll(): Promise<RentalDomainAccomodation[]> {
        return this.repo;
    }

    async save(accomodation: RentalDomainAccomodation) {
        this.repo.push(accomodation);
    }

    async delete(id: UUID) {
        this.repo = this.repo.filter((accomodation) => accomodation.id !== id);
    }
}