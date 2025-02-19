import { IAccomodation } from "@domain/accomodation/IAccomodation.ts";
import { UUID } from "node:crypto";

export interface AccomodetionRepository {
    get(accomodationId: UUID): IAccomodation;
    save(accomodation: IAccomodation): void;
    delete(accomodationId: UUID): void;
}