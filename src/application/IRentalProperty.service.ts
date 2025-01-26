import { RentalProperty } from "@domain/rentalProperty.ts";

export interface RentalPropertyReadService {
    getAll(): RentalProperty[];
    getById(id: string): RentalProperty;
}

export interface RentalPropertyCommandService {
    create(rentalProperty: RentalProperty): RentalProperty;
}