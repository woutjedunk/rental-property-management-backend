
import { RentalProperty } from "@domain/rentalProperty.ts";
import { IRentalPropertyRepo } from "@application/IRentalPropertyRepo.ts";
import { ApplicationError } from "../../shared/errors/ApplicationError.ts";
import { applicationErrorResponses, httpStatusCodes } from "../../shared/applicationResponses.ts";
import { PrismaClient } from "@prisma/client";

class RentalPropertyRepo implements IRentalPropertyRepo {

    rentalProperties: RentalProperty[] = []

    getAll(): RentalProperty[] {
        return this.rentalProperties;
    }

    getById(id: string): RentalProperty | undefined {
        return this.rentalProperties.find((rentalProperty) => rentalProperty.id == id);
    }

    save(rentalProperty: RentalProperty): RentalProperty {
        this.rentalProperties.push(rentalProperty);
        return rentalProperty;
    }
}

class RentalPropertyRepoPrisma implements IRentalPropertyRepo {
    
    private client: PrismaClient;

    constructor(injectedClient: PrismaClient) {
        this.client = injectedClient;
    }

    getAll(): RentalProperty[] {
        throw new ApplicationError(applicationErrorResponses.NOT_IMPLEMENTED, httpStatusCodes.NOT_IMPLEMENTED);
    }

    getById(id: string): RentalProperty | undefined {
        throw new ApplicationError(applicationErrorResponses.NOT_IMPLEMENTED, httpStatusCodes.NOT_IMPLEMENTED);
    }

    save(rentalProperty: RentalProperty): RentalProperty {
        throw new ApplicationError(applicationErrorResponses.NOT_IMPLEMENTED, httpStatusCodes.NOT_IMPLEMENTED);
    }
}

export const rentalPropertyRepo = new RentalPropertyRepo()