import { RentalDomain } from "@domain/rentalDomain/RentalDomain.ts";
import { RentalDomain as PrismaRentalDomain } from "@prisma/client";
import { Mapper } from "../mapper.ts";
import { UUID } from "node:crypto";
import { Address } from "@domain/address/address.ts";

export const RentalDomainMapper: Mapper<RentalDomain, PrismaRentalDomain> = {
    toDb: (rentalDomain: RentalDomain): PrismaRentalDomain => {
        return {
            id: rentalDomain.id.toString(),
            domainName: rentalDomain.domainName,
            domainOwner: rentalDomain.domainOwner,
            country: rentalDomain.address.country,
            city: rentalDomain.address.city,
            street: rentalDomain.address.street,
            zipcode: rentalDomain.address.zipcode,
            houseNumber: rentalDomain.address.houseNumber,
            busNumber: rentalDomain.address.busNumber || null
        };
    },

    toDomain: (rentalDomain: PrismaRentalDomain): RentalDomain => {

        return new RentalDomain(
            rentalDomain.id as UUID,
            rentalDomain.domainName,
            rentalDomain.domainOwner,
            new Address(
                rentalDomain.country!,
                rentalDomain.city!,
                rentalDomain.street!,
                rentalDomain.zipcode!,
                rentalDomain.houseNumber!,
                rentalDomain.busNumber!
            )
        );
    }
}