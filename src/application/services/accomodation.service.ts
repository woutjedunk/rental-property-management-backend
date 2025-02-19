import { IAccomodation } from "@domain/accomodation/IAccomodation.ts";
import { RentalDomainAccomodation } from "@domain/accomodation/RentalDomainAccomodation.ts";
import { Address } from "@domain/address/address.ts";
import { randomUUID } from "node:crypto";
import { RentalDomain } from "@domain/rentalDomain/RentalDomain.ts";
import { StandaloneAccommodation } from "@domain/accomodation/StandaloneAccomodation.ts";



function CreateAccomodation(accomodation: IAccomodation) {
    if (accomodation instanceof RentalDomainAccomodation) {
        // persist
    } else if (accomodation instanceof StandaloneAccommodation) {
        // persist
    }

    throw new Error("Invalid accomodation type");
}