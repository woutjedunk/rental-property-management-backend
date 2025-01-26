import { RentalProperty } from "@domain/rentalProperty.ts";

export interface IRentalPropertyRepo {
    getAll(): RentalProperty[];
    getById(id: string): RentalProperty | undefined;
    save(rentalProperty: RentalProperty): RentalProperty
}