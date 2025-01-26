import { RentalProperty } from "@domain/rentalProperty.ts";

export interface RentalPropertyRepo {
    getAll(): RentalProperty[];
    getById(): RentalProperty;
    save(rentalProperty: RentalProperty): RentalProperty
}