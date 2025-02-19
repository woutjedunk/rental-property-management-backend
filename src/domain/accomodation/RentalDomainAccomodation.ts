import { IAccomodation } from "@domain/accomodation/IAccomodation.ts";
import { RentalDomain } from "@domain/rentalDomain/RentalDomain.ts";
import { UUID } from "node:crypto";

export class RentalDomainAccomodation implements IAccomodation {
    readonly id: UUID;
    accomodationName: string;
    accomodationOwner: string;
    singleBeds: number;
    doubleBeds: number;
    storage: string;
    rentalDomain: RentalDomain;
    location: string;

    constructor(id: UUID, accomodationName: string, accomodationOwner: string, singleBeds: number, doubleBeds: number, storage: string, rentalDomain: RentalDomain, location: string) {
        this.id = id;
        this.accomodationName = accomodationName;
        this.accomodationOwner = accomodationOwner;
        this.singleBeds = singleBeds;
        this.doubleBeds = doubleBeds;
        this.storage = storage;
        this.rentalDomain = rentalDomain;
        this.location = location;
    }
}