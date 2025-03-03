import { UUID } from "node:crypto";
import { IRoom } from "@domain/room/Room.ts";

export interface IAccommodation {
    readonly id: UUID
    accommodationName: string
    accommodationOwner: string
    storage: string
    rooms: IRoom[]
}