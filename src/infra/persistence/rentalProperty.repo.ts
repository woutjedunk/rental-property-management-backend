
import { RentalProperty } from "@domain/rentalProperty.ts";
import { IRentalPropertyRepo } from "@application/IRentalPropertyRepo.ts";
 

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

export const rentalPropertyRepo = new RentalPropertyRepo()