import { IAccomodation } from "@domain/accomodation/IAccomodation.ts";
import { HasAddress } from "@domain/address/HasAddress.ts";
import { UUID } from "node:crypto";
import { Address } from "@domain/address/address.ts";

export class StandaloneAccommodation implements IAccomodation, HasAddress {

    readonly id: UUID;
    accomodationName: string;
    accomodationOwner: string;
    singleBeds: number;
    doubleBeds: number;
    storage: string;
    address: Address;

    constructor(id: UUID, accomodationName: string, accomodationOwner: string, singleBeds: number, doubleBeds: number, storage: string, address: Address) {
        this.id = id;
        this.accomodationName = accomodationName;
        this.accomodationOwner = accomodationOwner;
        this.singleBeds = singleBeds;
        this.doubleBeds = doubleBeds;
        this.storage = storage;
        this.address = address;
    }
}