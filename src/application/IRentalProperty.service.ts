import { RentalProperty } from "@domain/rentalProperty.ts";

export interface RentalPropertyService {
    getAll(): RentalProperty[];
    getById(id: string): RentalProperty;
    create(rentalProperty: RentalProperty): RentalProperty;
}
