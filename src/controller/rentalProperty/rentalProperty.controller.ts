//@ts-types="npm:@types/express"
import { Router, Request, Response, NextFunction } from  "express"
import { RentalProperty } from "@domain/rentalProperty.ts";
import { rentalPropertyService as rentalPropertyServiceImpl } from "@application/services/rentalProperty.service.ts";
import { IRentalPropertyService } from "@controller/rentalProperty/IRentalPropertyService.ts";
import { CreateRentalPropertyDTO } from "@controller/rentalProperty/RentalProperty.dto.ts";



const rentalPropertyRouter = Router()
const rentalPropertyService: IRentalPropertyService = rentalPropertyServiceImpl;


rentalPropertyRouter.get( "/", async ( req: Request, res: Response<RentalProperty[]>, next: NextFunction ) => {
    try {
        res.send(rentalPropertyService.getAll())
    } catch( error ) {
        next(error)
    }
})

rentalPropertyRouter.get( "/:id", async ( req: Request, res: Response, next: NextFunction ) => {
    try {
        res.send(rentalPropertyService.getById(req.params.id))
    } catch( error ) {
        next(error)
    }
})

rentalPropertyRouter.post( "/", async ( req: Request<{}, {}, CreateRentalPropertyDTO>, res: Response<RentalProperty>, next: NextFunction ) => {
    try {
        const newRentalProperty = RentalProperty.from(
            undefined,
            req.body.rentalOwner,
            req.body.rentalName,
            req.body.singleBeds,
            req.body.doublebeds,
            req.body.storage,
            req.body.country,
            req.body.city,
            req.body.zipcode,
            req.body.street,
            req.body.houseNumber,
            req.body.busNumber
        )

        const createdRentalProperty = await rentalPropertyService.create(newRentalProperty);

        res.send(createdRentalProperty);
        
    } catch( error ) {
        next(error)
    }
})

export default rentalPropertyRouter