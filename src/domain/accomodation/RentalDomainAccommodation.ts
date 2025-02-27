import { IAccommodation } from "./IAccommodation.ts";
import { RentalDomain } from "@domain/rentalDomain/RentalDomain.ts";
import { UUID } from "node:crypto";
import { IRoom } from "@domain/room/Room.ts";

export class RentalDomainAccommodation implements IAccommodation {
    readonly id: UUID;
    accommodationName: string;
    accommodationOwner: string;
    singleBeds: number;
    doubleBeds: number;
    storage: string;
    rentalDomain?: RentalDomain;
    location: string;
    rooms: IRoom[];

    constructor(id: UUID, accommodationName: string, accommodationOwner: string, singleBeds: number, doubleBeds: number, storage: string, rentalDomain: RentalDomain, location: string, rooms: IRoom[]) {
        this.id = id;
        this.accommodationName = accommodationName;
        this.accommodationOwner = accommodationOwner;
        this.singleBeds = singleBeds;
        this.doubleBeds = doubleBeds;
        this.storage = storage;
        this.rentalDomain = rentalDomain;
        this.location = location;
        this.rooms = rooms;
    }
    
}