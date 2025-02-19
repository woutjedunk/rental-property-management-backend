import { IRentalPropertyService } from "@controller/rentalProperty/IRentalPropertyService.ts";
import { RentalProperty } from "@domain/rentalProperty.ts";
import { IRentalPropertyRepo } from "@application/IRentalPropertyRepo.ts";
import { rentalPropertyRepo } from "@persistence/rentalProperty.repo.ts";



export class RentalPropertyService implements IRentalPropertyService {
    
    readonly rentalPropertyRepo: IRentalPropertyRepo

    constructor(
        injectedRentalPropertyRepo?: IRentalPropertyRepo
    ) {
        this.rentalPropertyRepo = injectedRentalPropertyRepo || rentalPropertyRepo
    }

    getAll = (): RentalProperty[] => {
        return this.rentalPropertyRepo.getAll();
    }

    getById(id: string): RentalProperty {
        const rentalProperty = this.rentalPropertyRepo.getById(id)
        if (!rentalProperty) throw new Error("implement better error handling")
        return rentalProperty
    }

    create(rentalProperty: RentalProperty): RentalProperty {
      return this.rentalPropertyRepo.save(rentalProperty)
    }
}

export const rentalPropertyService = new RentalPropertyService()