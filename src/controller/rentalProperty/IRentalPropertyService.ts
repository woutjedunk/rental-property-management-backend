import { RentalProperty } from "@domain/rentalProperty.ts";

export interface IRentalPropertyService {
    getAll(): RentalProperty[];
    getById(id: string): RentalProperty;
    create(rentalProperty: RentalProperty): RentalProperty;
}
