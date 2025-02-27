import { IAccommodation } from "./IAccommodation.ts";
import { HasAddress } from "@domain/address/HasAddress.ts";
import { UUID } from "node:crypto";
import { Address } from "@domain/address/address.ts";
import { IRoom } from "../room/Room.ts";

export class StandaloneAccommodation implements IAccommodation, HasAddress {

    readonly id: UUID;
    accommodationName: string;
    accommodationOwner: string;
    singleBeds: number;
    doubleBeds: number;
    storage: string;
    address: Address;
    rooms: IRoom[];

    constructor(id: UUID, accommodationName: string, accommodationOwner: string, singleBeds: number, doubleBeds: number, storage: string, address: Address, rooms: IRoom[]) {
        this.id = id;
        this.accommodationName = accommodationName;
        this.accommodationOwner = accommodationOwner;
        this.singleBeds = singleBeds;
        this.doubleBeds = doubleBeds;
        this.storage = storage;
        this.address = address;
        this.rooms = rooms;
    }
}