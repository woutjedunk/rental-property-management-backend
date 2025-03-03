import { IAccommodation } from "./IAccommodation.ts";
import { RentalDomain } from "@domain/rentalDomain/RentalDomain.ts";
import { UUID, randomUUID } from "node:crypto";
import { IRoom } from "@domain/room/Room.ts";



export class RentalDomainAccommodation implements IAccommodation {
    readonly id: UUID;
    accommodationName: string;
    accommodationOwner: string;
    storage: string;
    rentalDomain?: RentalDomain;
    location: string;
    rooms: IRoom[];

    constructor(
        id: UUID,
        accommodationName: string,
        accommodationOwner: string,
        storage: string,
        rentalDomain: RentalDomain,
        location: string,
        rooms: IRoom[]
    ) {
        this.id = id;
        this.accommodationName = accommodationName;
        this.accommodationOwner = accommodationOwner;
        this.storage = storage;
        this.rentalDomain = rentalDomain;
        this.location = location;
        this.rooms = rooms;
    }

    static builder(): RentalDomainAccommodationBuilder {
        return new RentalDomainAccommodationBuilder();
    }
}

export class RentalDomainAccommodationBuilder {
    private id: UUID = randomUUID();
    private accommodationName: string = "";
    private accommodationOwner: string = "";
    private storage: string = "";
    private rentalDomain?: RentalDomain;
    private location: string = "";
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

    setRentalDomain(domain: RentalDomain): this {
        this.rentalDomain = domain;
        return this;
    }

    setLocation(location: string): this {
        this.location = location;
        return this;
    }

    setRooms(rooms: IRoom[]): this {
        this.rooms = rooms;
        return this;
    }

    build(): RentalDomainAccommodation {
        return new RentalDomainAccommodation(
            this.id,
            this.accommodationName,
            this.accommodationOwner,
            this.storage,
            this.rentalDomain!,
            this.location,
            this.rooms
        );
    }
}