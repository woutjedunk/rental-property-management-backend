import { IAccommodation } from "./IAccommodation.ts";
import { HasAddress } from "@domain/address/HasAddress.ts";
import { UUID, randomUUID } from "node:crypto";
import { Address } from "@domain/address/address.ts";
import { IRoom } from "../room/Room.ts";

export class StandaloneAccommodation implements IAccommodation, HasAddress {
    readonly id: UUID;
    accommodationName: string;
    accommodationOwner: string;
    storage: string;
    address: Address;
    rooms: IRoom[];

    constructor(
        id: UUID,
        accommodationName: string,
        accommodationOwner: string,
        storage: string,
        address: Address,
        rooms: IRoom[]
    ) {
        this.id = id;
        this.accommodationName = accommodationName;
        this.accommodationOwner = accommodationOwner;
        this.storage = storage;
        this.address = address;
        this.rooms = rooms;
    }

    static builder(): StandaloneAccommodationBuilder {
        return new StandaloneAccommodationBuilder();
    }
}

export class StandaloneAccommodationBuilder {
    private id: UUID = randomUUID();
    private accommodationName: string = "";
    private accommodationOwner: string = "";
    private storage: string = "";
    private address: Address = undefined as unknown as Address;
    private rooms: IRoom[] = [];

    setId(id: UUID): this {
        this.id = id;
        return this;
    }

    setAccommodationName(name: string): this {
        this.accommodationName = name;
        return this;
    }

    setAccommodationOwner(owner: string): this {
        this.accommodationOwner = owner;
        return this;
    }

    setStorage(storage: string): this {
        this.storage = storage;
        return this;
    }

    setAddress(address: Address): this {
        this.address = address;
        return this;
    }

    setRooms(rooms: IRoom[]): this {
        this.rooms = rooms;
        return this;
    }

    build(): StandaloneAccommodation {
        return new StandaloneAccommodation(
            this.id,
            this.accommodationName,
            this.accommodationOwner,
            this.storage,
            this.address,
            this.rooms
        );
    }
}
