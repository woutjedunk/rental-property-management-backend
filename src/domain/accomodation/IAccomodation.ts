import { UUID } from "node:crypto";

export interface IAccomodation {
    readonly id: UUID
    accomodationName: string
    accomodationOwner: string
    singleBeds: number
    doubleBeds: number
    storage: string
}