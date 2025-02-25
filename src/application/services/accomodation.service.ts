import { IAccommodation } from "../../domain/accomodation/IAccommodation.ts";
import { RentalDomainAccommodation } from "../../domain/accomodation/RentalDomainAccommodation.ts";
import { StandaloneAccommodation } from "../../domain/accomodation/StandaloneAccommodation.ts";
import { BaseAccommodationRepository } from "../../infra/persistence/accommodations/StandaloneAccommodation.repository.ts";
import { UUID } from "node:crypto";
import { ApplicationError } from "../../shared/errors/ApplicationError.ts";
import { applicationErrorResponses } from "../../shared/applicationResponses.ts";
import { httpStatusCodes } from "../../shared/applicationResponses.ts";

const repo = new BaseAccommodationRepository();

async function CreateAccommodation(accomodation: IAccommodation) {

    repo.save(accomodation);

}

async function GetAccommodation(id: UUID): Promise<IAccommodation> {

    const result = await repo.get(id);

    if (!result) throw new ApplicationError(applicationErrorResponses.NOT_FOUND, httpStatusCodes.NOT_FOUND);

    return result;
}




export { 
    CreateAccommodation,
    GetAccommodation
 };
