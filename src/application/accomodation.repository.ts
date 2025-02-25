import { IAccommodation } from "../domain/accomodation/IAccommodation.ts";
import { UUID } from "node:crypto";

export interface AccomodetionRepository {
    get(accommodationId: UUID): Promise<IAccommodation | null>;
    getAll(): Promise<IAccommodation[]>;
    save(accommodation: IAccommodation): void;
    delete(accommodationId: UUID): void;
}