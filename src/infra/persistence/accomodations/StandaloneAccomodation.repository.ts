import { AccomodetionRepository } from "@application/accomodation.repository.ts";
import { StandaloneAccomodation } from "@domain/accomodation/StandaloneAccomodation.ts";
import { randomUUID, UUID } from "node:crypto";
import { Address } from "@domain/address/address.ts";

export class StandaloneAccomodationRepository implements AccomodetionRepository {


    private repo: StandaloneAccomodation[] = [];

    RentalDomainAccomodation() {
        this.repo = [
            new StandaloneAccomodation(
                randomUUID(),
                "Accomodation 1",
                "Owner 1",
                2,
                1,
                "Storage 1",
                null as unknown as Address,
                
            ),
            new StandaloneAccomodation(
                randomUUID(),
                "Accomodation 2",
                "Owner 2",
                3,
                3,
                "Storage 2",
                null as unknown as Address
            ),
        ];
    }

    async get(id: UUID): Promise<StandaloneAccomodation> {
        return this.repo.find((accomodation) => accomodation.id === id) || null as unknown as StandaloneAccomodation;
    }

    async getAll(): Promise<StandaloneAccomodation[]> {
        return this.repo;
    }

    async save(accomodation: StandaloneAccomodation) {
        this.repo.push(accomodation);
    }

    async delete(id: UUID) {
        this.repo = this.repo.filter((accomodation) => accomodation.id !== id);
    }
}