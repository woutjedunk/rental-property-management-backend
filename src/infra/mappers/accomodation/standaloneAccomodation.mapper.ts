import { StandaloneAccommodation } from "@domain/accomodation/StandaloneAccommodation.ts";
import { Accommodation as PrismaAccommodation,
            RentalDomain as PrismaRentalDomain,
            Room as PrismaRoom
 } from "@prisma/client";
import { UUID } from "node:crypto";
import { Address } from "@domain/address/address.ts";
import { Mapper } from "../mapper.ts";
import { getRoomMapper } from "../room/roomMapper.registry.ts";

export const standaloneAccommodationMapper: Mapper<StandaloneAccommodation, PrismaAccommodation> = {
    toDb: (standaloneAccommodation: StandaloneAccommodation): PrismaAccommodation => {
        return {
            id: standaloneAccommodation.id.toString(),
            accommodationName: standaloneAccommodation.accommodationName,
            accommodationOwner: standaloneAccommodation.accommodationOwner,
            accommodationType: "STANDALONE", 
            storage: standaloneAccommodation.storage,
            country: standaloneAccommodation.address.country,
            city: standaloneAccommodation.address.city,
            street: standaloneAccommodation.address.street,
            zipcode: standaloneAccommodation.address.zipcode,
            houseNumber: standaloneAccommodation.address.houseNumber,
            busNumber: standaloneAccommodation.address.busNumber || null,
            rentalDomainId: standaloneAccommodation.id,
            location: null
        };
    },


    toDomain: (acc: PrismaAccommodation & {
        prismaRentalDomain?: PrismaRentalDomain;
        rooms: PrismaRoom[]
    }): StandaloneAccommodation => {
        const address = new Address(
            acc.country!,
            acc.city!,
            acc.street!,
            acc.zipcode!,
            acc.houseNumber!,
            acc.busNumber || undefined,
        );
        const accomodation = StandaloneAccommodation.builder()
            .setId(acc.id as UUID)
            .setAccommodationName(acc.accommodationName)
            .setAccommodationOwner(acc.accommodationOwner)
            .setRooms(acc.rooms ? acc.rooms.map(room => getRoomMapper(room.roomType).toDomain(room)) : [])
           
            .setStorage(acc.accommodationType)
            .setAddress(address)
            .build();
        return accomodation;
    }
}

