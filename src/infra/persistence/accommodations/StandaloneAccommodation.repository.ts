import { AccomodetionRepository } from "@application/accomodation.repository.ts";
import { StandaloneAccommodation } from "../../../domain/accomodation/StandaloneAccommodation.ts";
import { randomUUID, UUID } from "node:crypto";
import { Address } from "@domain/address/address.ts";
import { IAccommodation } from "../../../domain/accomodation/IAccommodation.ts";

export class BaseAccommodationRepository implements AccomodetionRepository {


    private repo: IAccommodation[] = [];

    RentalDomainAccomodation() {
        this.repo = [
            new StandaloneAccommodation(
                randomUUID(),
                "Accomodation 1",
                "Owner 1",
                2,
                1,
                "Storage 1",
                null as unknown as Address
                
            ),
            new StandaloneAccommodation(
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

    async get(id: UUID): Promise<IAccommodation | null> {
        return this.repo.find((accommodation) => accommodation.id === id) || null;
    }

    async getAll(): Promise<IAccommodation[]> {
        return this.repo;
    }

    async save(accomodation: IAccommodation) {
        this.repo.push(accomodation);
    }

    async delete(id: UUID) {
        this.repo = this.repo.filter((accomodation) => accomodation.id !== id);
    }
}