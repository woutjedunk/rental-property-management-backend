import { IAccommodation } from "./IAccommodation.ts";
import { RentalDomain } from "@domain/rentalDomain/RentalDomain.ts";
import { UUID } from "node:crypto";

export class RentalDomainAccommodation implements IAccommodation {
    readonly id: UUID;
    accommodationName: string;
    accommodationOwner: string;
    singleBeds: number;
    doubleBeds: number;
    storage: string;
    rentalDomain?: RentalDomain;
    location: string;

    constructor(id: UUID, accommodationName: string, accommodationOwner: string, singleBeds: number, doubleBeds: number, storage: string, rentalDomain: RentalDomain, location: string) {
        this.id = id;
        this.accommodationName = accommodationName;
        this.accommodationOwner = accommodationOwner;
        this.singleBeds = singleBeds;
        this.doubleBeds = doubleBeds;
        this.storage = storage;
        this.rentalDomain = rentalDomain;
        this.location = location;
    }
}