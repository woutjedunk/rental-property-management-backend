import { UUID } from "node:crypto";
import { IRoom } from "@domain/room/Room.ts";

export interface IAccommodation {
    readonly id: UUID
    accommodationName: string
    accommodationOwner: string
    singleBeds: number
    doubleBeds: number
    storage: string
    rooms: IRoom[]
}