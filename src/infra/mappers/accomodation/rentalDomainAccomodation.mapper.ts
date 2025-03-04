import { RentalDomainAccommodation } from "@domain/accomodation/RentalDomainAccommodation.ts";
import { Accommodation as PrismaAccommodation,
    Room as PrismaRoom,
    RentalDomain as PrismaRentaldomain
 } from "@prisma/client";
import { Mapper } from "../mapper.ts";
import { UUID } from "node:crypto";
import { getRoomMapper } from "../room/roomMapper.registry.ts";
import { RentalDomainMapper } from "../rentalDomain/rentalDomain.mapper.ts";


export const RentalDomainAccomodationMapper: Mapper<RentalDomainAccommodation, PrismaAccommodation> = {
    toDb: (rentalDomainAccomodation: RentalDomainAccommodation): PrismaAccommodation => {
        return {
            id: rentalDomainAccomodation.id.toString(),
            accommodationName: rentalDomainAccomodation.accommodationName,
            accommodationOwner: rentalDomainAccomodation.accommodationOwner,
            accommodationType: "DOMAIN_ACC", 
            storage: rentalDomainAccomodation.storage,
            rentalDomainId: rentalDomainAccomodation.id,
            location: rentalDomainAccomodation.location,
            country: null,
            city: null,
            street: null,
            zipcode: null,
            houseNumber: null,
            busNumber: null,
        };
    },

    toDomain: (acc: PrismaAccommodation & {
        rooms: PrismaRoom[],
        rentalDomain: PrismaRentaldomain
    }): RentalDomainAccommodation => {


        const accomodation = RentalDomainAccommodation.builder()
            .setId(acc.id as UUID)
            .setAccommodationName(acc.accommodationName)
            .setAccommodationOwner(acc.accommodationOwner)
            .setStorage(acc.storage)
            .setRooms(acc.rooms ? acc.rooms.map(room => getRoomMapper(room.roomType).toDomain(room)) : [])
            .setLocation(acc.location!)
            
        if (acc.rentalDomain) {
            accomodation.setRentalDomain(RentalDomainMapper.toDomain(acc.rentalDomain));
        }

        return accomodation.build();
    }
}