import { UUID } from "node:crypto";

export interface IAccommodation {
    readonly id: UUID
    accommodationName: string
    accommodationOwner: string
    singleBeds: number
    doubleBeds: number
    storage: string
}